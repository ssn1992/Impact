<?php

namespace App\Http\Controllers\Tradeshow;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Services\SalesForceAPI;
use App\Models\Tradeshow;
use App\Models\Tradeshow_campaign;
use App\Models\Tradeshow_category;
use App\Models\Tradeshow_tradeshow_edition;
use App\Models\Lead_request;
use App\Models\Lead;
use App\Models\Lead_detail;
use App\Models\Brand;
use App\Models\Tradeshow_client_acquire;
use Auth;
use DB;
use Mail;
use App\Mail\tradeshowBrands;
use App\Services\GeoIP;

class OperationsController extends Controller
{
	protected $sf;
    protected $geoip;

	public function __construct()
    {
		$this->middleware('auth');
		$this->sf = resolve(SalesForceAPI::class);
	}

    public function store(Request $request)
	{

        try
        {
            $tradeshowMiddleTable;
            $contact;
            $lead_request;

            $validator = Validator::make($request->all(), [
                "fair"          => "required|integer",
                "email"         => "required|email",
                "firstName"     => "required|string",
                "lastName"      => "required|string",
                "jobPosition"   => "string|nullable",
                "industry"      => "integer",
                "company"       => "string",
                "phone"         => "string|nullable",
                "mobile"        => "string|nullable",
                "address"       => "string|nullable",
                "country"       => "required|integer",
                "cat"           => "required|integer",
                "moreinfo"      => "string|nullable",
                "campaignSf"    => "required|string",
                "leadType"      => "required|integer",
            ]);
            if ($validator->passes())
            {
                DB::transaction(function () use ($request, &$tradeshowMiddleTable, &$contact, &$lead_request)
                {
                    $contact = Lead::firstOrCreate(
                        [
                            'email'         => strtolower($request->email)
                        ],
                        [
                            'first_name'    => title_case($request->firstName),
                            'last_name'     => title_case($request->lastName)
                        ]);

                    $contact->first_name    = $request->firstName;
                    $contact->last_name     = $request->lastName;
                    $contact->save();

                    $contactInfo = Lead_detail::where("lead_id", $contact->id)->first();

                    if (empty($contactInfo))
                    {
                        $contactInfo                = new Lead_detail;
                        $contactInfo->lead_id       = $contact->id;
                        $contactInfo->job_position  = $request->jobPosition;
                        $contactInfo->industry_id   = $request->industry;
                        $contactInfo->company       = $request->company;
                        $contactInfo->address       = $request->address;
                        $contactInfo->zip_code      = $request->zipCode;
                        $contactInfo->phone         = $request->phone;
                        $contactInfo->mobile        = $request->mobile;
                        $contactInfo->website       = $request->website;
                    }
                    else
                    {
                        $contactInfo->job_position  = $request->jobPosition;
                        $contactInfo->industry_id   = $request->industry;
                        $contactInfo->company       = $request->company;
                        $contactInfo->address       = $request->address;
                        $contactInfo->phone         = $request->phone;
                        $contactInfo->mobile        = $request->mobile;
                        $contactInfo->website       = $request->website;
                    }

                    $contactInfo->save();

                    $tradeshowMiddleTable = Tradeshow_tradeshow_edition::where('id', $request->fair)
                    ->first();

                    $lead_request                               = new Lead_request;
                    $lead_request->lead_id                      = $contact->id;
                    $lead_request->brand_id                     = Auth::User()->brand_id;
                    $lead_request->country_id                   = $request->country;
                    $lead_request->state_id                     = ($request->country != 234) ? null : $request->state;
                    $lead_request->country_detected             = null;
                    $lead_request->region_detected              = null;
                    $lead_request->city                         = $request->city;
                    $lead_request->browser_language             = null;
                    $lead_request->source_id                    = 8;
                    $lead_request->source_categoryable_id       = $request->cat;
                    $lead_request->source_categoryable_type     = Tradeshow_category::class;
                    $lead_request->interested_nameable_id       = $tradeshowMiddleTable->tradeshow_id;
                    $lead_request->interested_nameable_type     = Tradeshow::class;
                    $lead_request->interested_categoryable_id   = $tradeshowMiddleTable->id;
                    $lead_request->interested_categoryable_type = Tradeshow_tradeshow_edition::class;
                    $lead_request->lead_class_id                = $this->sf_query($request->email);
                    $lead_request->lead_type_id                 = $request->leadType;
                    $lead_request->lead_potencial               = null;
                    $lead_request->url_origin                   = null;
                    $lead_request->url_converted                = null;
                    $lead_request->heard_about                  = null;
                    $lead_request->more_info                    = $request->moreinfo;
                    $lead_request->cta_id                       = null;
                    $lead_request->cta_color_id                 = null;
                    $lead_request->form_page_id                 = null;
                    $lead_request->form_page_position_id        = null;
                    $lead_request->salesforce_id                = null;
                    $lead_request->salesforce_campaign          = $request->campaignSf;
                    $lead_request->client_evaluation            = $request->rating;
                    $lead_request->interested_in                = $request->interested_in;
                    $lead_request->tradeshow_client_acquired    = json_encode($request->clientAcquired);
                    $lead_request->save();

                    $this->geoip = resolve(GeoIP::class);
                    $this->geoip->setIP(\Request::ip());

                    activity()
                        ->withProperties([
                            'ip'      => \Request::ip(),
                            'country' => $this->geoip->getCountry(),
                            'region'  => $this->geoip->getRegion()
                        ])
                        ->log('Added request Tradeshows: '.$request->email.' in '.class_basename($lead_request));

                    $response = $this->saveToSalesForce($lead_request->id, true);

                });

                if ($tradeshowMiddleTable->tradeshow_id == 2)
                {
                    Mail::to($contact->email)
                        ->send(new tradeshowBrands($lead_request->country->iso,
                                                    Auth::user()->brand->name));
                }
                    return response()->json(config('messages.code200'), 200);
            }
            else
            {
                $errorMessage = array();
                foreach ($validator->errors()->getMessages() as $key => $value)
                {
                    $errorMessage[$key] = current($value);
                }

                return response()->json($errorMessage, 400);
            }
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }

	}

	public function update(Request $request)
	{
        try
        {
            $lead_request;

            $validator = Validator::make($request->all(), [
                "id"            => "required|integer",
                "email"         => "required|email",
                "firstName"     => "required|string",
                "lastName"      => 'required|string',
                "jobPosition"   => "nullable|string",
                "industry"      => "nullable|integer",
                "company"       => "string",
                "phone"         => "nullable|string",
                "mobile"        => "nullable|string",
                "address"       => "nullable|string",
                "website"       => "nullable",
                "country"       => "required|integer",
                "moreinfo"      => "nullable|string",
                "lead_type"     => "integer",
            ]);

            if ($validator->passes())
            {

                DB::transaction(function () use ($request, &$lead_request)
                {
                    $lead_request = Lead_request::where("id", $request->id)
                    ->first();
                    $contact = Lead::find($lead_request->lead_id);
                    $id = $contact->id;

                    $contact->email         = $request->email;
                    $contact->first_name    = $request->firstName;
                    $contact->last_name     = $request->lastName;
                    $contact->save();

                    $contactInfo = Lead_detail::where("lead_id", $id)->first();
                    $contactInfo->lead_id                       = $id;
                    $contactInfo->job_position                  = $request->jobPosition;
                    $contactInfo->industry_id                   = $request->industry;
                    $contactInfo->company                       = $request->company;
                    $contactInfo->phone                         = $request->phone;
                    $contactInfo->zip_code                      = $request->zipCode;
                    $contactInfo->mobile                        = $request->mobile;
                    $contactInfo->website                       = $request->website;
                    $contactInfo->address                       = $request->address;

                    $contactInfo->save();

                    $lead_request->lead_id                      = $id;
                    $lead_request->brand_id                     = Auth::User()->brand_id;
                    $lead_request->country_id                   = $request->country;
                    $lead_request->city                         = $request->city;
                    $lead_request->state_id                     = ($request->country != 234) ? null : $request->state;
                    $lead_request->lead_class_id                = $this->sf_query($request->email);
                    $lead_request->lead_type_id                 = $request->lead_type;
                    $lead_request->more_info                    = $request->moreinfo;
                    $lead_request->tradeshow_client_acquired    = json_encode($request->client_aquired);
                    $lead_request->save();

                });
                $this->geoip = resolve(GeoIP::class);
                $this->geoip->setIP(\Request::ip());

                activity()
                    ->withProperties([
                        'ip'      => \Request::ip(),
                        'country' => $this->geoip->getCountry(),
                        'region'  => $this->geoip->getRegion()
                    ])
                    ->log('Updated Tradeshows: '.$request->email.' in '.class_basename($lead_request));

                    if (isset($lead_request->salesforce_id))
                    {
                        $this->saveToSalesForce($lead_request->id, false);
                    }
                    else
                    {
                        $this->saveToSalesForce($lead_request->id, true);
                    }

                    return response()->json(config('messages.code200'), 200);
            }
            else
            {

                $errorMessage = array();
                foreach ($validator->errors()->getMessages() as $key => $value)
                {
                    $errorMessage[$key] = current($value);
                }

                return response()->json($errorMessage, 400);
            }
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
	}

	public function sf_query($email)
	{
		$brand = Brand::find(Auth::User()->brand_id)->name_salesforce;
		$table = "Account.TARGET_" . $brand ."__c";

		$soql_query = "SELECT $table
		from Account
		where Account.Id
		IN (SELECT Contact.accountId
		FROM Contact
		where Contact.Email	= '$email')";

		$response = $this->sf->Query($soql_query);

		if (empty($response["records"]))
		{
			$type = "none";
		}
		else
		{
			$type = $response["records"][0]['TARGET_'. $brand .'__c'];
		}

		switch ($type)
		{
			case 'TOP':
				return 1;
				break;

			case 'TARGET':
				return 2;
				break;

			case 'Cliente marca':
				return 3;
				break;

			case 'Cliente grupo':
				return 4;
				break;

			case "none" :
				return null;
				break;
		}
	}

	public function show_update_data(Request $request)
	{

		$leadInfo = Lead_request::with('lead')
			->where("id",$request->id)
			->first();

		$leadDetails = [
			"cat" 			    => $leadInfo->source_categoryable_id,
			"country" 		    => $leadInfo->country->id,
            "state" 		    => $leadInfo->state,
            "city" 		        => $leadInfo->city,
			"email" 		    => $leadInfo->lead->email,
			"firstName" 	    => $leadInfo->lead->first_name,
			"lastName" 		    => $leadInfo->lead->last_name,
			"jobPosition" 	    => $leadInfo->lead->details->job_position,
			"industry" 		    => $leadInfo->lead->details->industry_id,
			"company" 		    => $leadInfo->lead->details->company,
            "zipCode"     	    => $leadInfo->lead->details->zip_code,
            "Address" 		    => $leadInfo->lead->details->address,
			"phone" 		    => $leadInfo->lead->details->phone,
			"mobile" 		    => $leadInfo->lead->details->mobile,
			"address" 		    => $leadInfo->lead->details->address,
			"website" 		    => $leadInfo->lead->details->website,
            "moreinfo" 		    => $leadInfo->more_info,
            "client_acquire"    => ($leadInfo->tradeshow_client_acquired) ? Tradeshow_client_acquire::whereIn('id', json_decode($leadInfo->tradeshow_client_acquired))->get() : ''
		];

		return json_encode(['editUser' => $leadDetails]);
    }

    public function resendSF()
    {
        $lead_requested = Lead_request::where('source_id', 8)
                ->where('brand_id', Auth::user()->brand_id)
                ->where('salesforce_id', null)
                ->get();
                var_dump('Total: '.$lead_requested->count());
        foreach ($lead_requested as $key => $lead_r)
        {
            var_dump($lead_r->id.'          ');
            $response = $this->saveToSalesForce($lead_r->id, true);
            \Log::info($key.'# SF->'.$response);
            var_dump($key.'#  '.$response);
        }
    }


    public function reUpdateSF()
    {
        $lead_requested = Lead_request::where('id',140)
                ->first();

                var_dump('Total: '.$lead_requested->count());

        var_dump($lead_requested->id);

        $response = $this->saveToSalesForce($lead_requested->id, false);
        dd('#  ->'.$response);
    }

	public function saveToSalesForce(int $lead_request_id, bool $insert)
    {
        try
        {
            $lead_requested = Lead_request::with(
                'lead',
                'lead_type',
                'brand',
                'country',
                'state',
                'source',
                'source_categoryable',
				'interested_nameable',
				'interested_categoryable',
                'state')
                ->where('id', $lead_request_id)
                ->firstOrFail();

            if ($lead_requested->country_id != 234)
            {
                $typeRegion = 'city';
                $region     = $lead_requested->city;
            }
            else
            {
                $typeRegion = 'state';
                $region     = $lead_requested->state->name;
            }

            $jsonContent = [
                'FirstName'            => $lead_requested->lead->first_name,
                'LastName'             => $lead_requested->lead->last_name,
                'Email'                => $lead_requested->lead->email,
                'Street'               => isset($lead_requested->lead->details->address) ? $lead_requested->lead->details->address : null ,
                'PostalCode'           => isset($lead_requested->lead->details->zip_code) ? $lead_requested->lead->details->zip_code: null,
                'company'              => isset($lead_requested->lead->details->company) ? $lead_requested->lead->details->company : $lead_requested->lead->first_name.$lead_requested->lead->last_name,
               	'phone'                => isset($lead_requested->lead->details->phone) ? $lead_requested->lead->details->phone: null,
               	'industry'             => isset($lead_requested->lead->details->industry->name) ? $lead_requested->lead->details->industry->name: null,
                'website'              => isset($lead_requested->lead->details->website) ? $lead_requested->lead->details->website: null,
                'CountryCode'          => $lead_requested->country->iso,
              	$typeRegion            => $region,
                'Nivel__c'             => 'lead',
                //Source
                'Source__c'            => $lead_requested->source->name,
                //Category
                'Category__c'          => $lead_requested->source_categoryable->name,
                //Type
                'Type__c'              => ($lead_requested->interested_categoryable_id != null) ? $lead_requested->interested_categoryable->Tradeshow->name ." ". $lead_requested->interested_categoryable->Tradeshow_edition->name : null,
                //interested in
                'Interested_in__c'     => $lead_requested->interested_in,
                //Brand
                'Brand__c'             => $lead_requested->brand->name_salesforce,
                // Other info
                'More_Information__c'  => $lead_requested->more_info,
                'Description'          => ($lead_requested->lead_class_id != null) ? $lead_requested->lead_class->name : "" ."| Customer Evaluation: ". $lead_requested->client_evaluation,
                'Registered_by__c'     =>  Auth::user()->name
            ];

            if (true)
            {
                $jsonContent['Registered_by__c']= Auth::user()->name;
            }

            $jsonContent = json_encode($jsonContent);

			$this->sf = resolve(SalesForceAPI::class);

            if ($insert)
            {
                $response = $this->sf->Insert('Lead', $jsonContent);

				if ($response['success'])
				{

					$jsonMember = json_encode([
						'CampaignId'    => $lead_requested->salesforce_campaign,
						'leadid'        => $response['id'],
					]);

					$responseCampaign = $this->sf->Insert('CampaignMember',$jsonMember);

					if ($responseCampaign['success'])
					{
						$lead_requested->salesforce_id = $response['id'];
						$lead_requested->save();
                    }
                    else
                    {
                        return 'error insert in campaign: '.$lead_request_id;
                    }

                }
                else
                {
                    return 'error insert lead id: '.$lead_request_id;
                }
            }
            else
            {
                $response = $this->sf->Update('Lead', $lead_requested->salesforce_id, $jsonContent);
            }

            if (isset($response['success']))
            {
                $lead_requested->salesforce_id = $response['id'];
                $lead_requested->save();
                return $response;
            }
            else
            {
                return $response;
			}
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }

    }

}
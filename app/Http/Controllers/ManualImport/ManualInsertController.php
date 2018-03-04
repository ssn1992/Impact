<?php

namespace App\Http\Controllers\ManualImport;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\SalesForceAPI;
use App\Services\GeoIP;
use App\Traits\Cross;
use Mockery\Exception;
use Carbon\carbon;
use Validator;
use DB;
use Auth;
use App\Models\Cross_type;
use App\Models\Occupation;
use App\Models\Social_network_category;
use App\Models\Social_network_type;
use App\Models\SocialNetwork_subType;
use App\Models\Tradeshow_category;
use App\Models\Partner_brand;
use App\Models\Lead;
use App\Models\Social_network;
use App\Models\Lead_detail;
use App\Models\Advertising;
use App\Models\Email;
use App\Models\Phone;
use App\Models\Platforms;
use App\Models\Tradeshow;
use App\Models\Direct_contact;
use App\Models\Showroom;
use App\Models\Lead_request;
use App\Models\Brand;
use App\Models\Source;
use App\Models\Source_category;
use App\Models\User_lead;


class ManualInsertController extends Controller
{
    use Cross;

    protected $sf;
    protected $geoip;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function manualImportChecker(Request $request)
    {
        $date = Carbon::now('Europe/Lisbon')->toDateString();

        $lead = Lead_request::
        wherehas('lead', function($q) use($request)
        {
            $q->where('email', $request->email);

        })->where('brand_id', $request->brand)
            ->where('source_id', $request->sources)
            ->whereBetween('created_at', [$date." 00:00:00", $date." 23:59:59"])
            ->get();

        if ($lead->count() > 0)
        {
            return json_encode(["duplicated" =>
                [
                    "flag"     => true,
                    "message" => "This Lead could be a duplicated. Confirm that you want to advance"
                ]
            ]);
        }
        else
        {
            return $this->create($request);
        }
    }

    public function create(Request $request)
    {
       $validator = Validator::make($request->all(), [
            'firstName'         => 'required',
            'lastName'          => 'sometimes',
            'email'             => 'required|email',
            'country'           => 'required|exists:countries,id|integer',
            'sources'           => 'required|integer',
            'leadType'          => 'required',
        ]);

        if ($validator->passes())
        {
            try
            {
                //Country && State
                if ($request->country != 234)
                {
                    $state      = null;
                    $typeRegion = 'city';
                    $region     = $request->city;
                }
                else
                {
                    $typeRegion = 'state';
                    $region     = $request->state;
                    $state      = $request->state;
                }

                //Source
                $sourceId       = null;

                $categoryId     = null;// First Combo
                $categoryType   = null;// Category

                $typeId         = null;// Secound Combo
                $typeType       = null;// Type

                $subTypeId      = null;// Third Combo
                $subTypeType    = null;// subType

                switch ($request->sources)
                {
                    case 2:
                        $sourceId       = 2;

                        $categoryType   = Advertising::class;
                        $categoryId     = $request->category;

                        break;

                    case 4:
                        $sourceId       = 4;

                        $categoryType   = Email::class;
                        $categoryId     = $request->category;

                        break;

                    case 5:
                        $sourceId       = 5;

                        $categoryType   = Platforms::class;
                        $categoryId     = $request->category;

                        break;

                    case 6:
                        $sourceId       = 6;

                        $categoryId     = $request->category;
                        $categoryType   = Social_network_category::class;

                        $typeId         = $request->type;
                        $typeType       = Social_network::class;

                        $subTypeId      = $request->subType;
                        $subTypeType    = SocialNetwork_subType::class;

                        break;

                    case 7:
                        $sourceId       = 7;

                        $categoryType   = Partner_brand::class;
                        $categoryId     = $request->category;

                        break;

                    case 8:
                        $sourceId       = 8;

                        $categoryId     = $request->category;
                        $categoryType   = Tradeshow_category::class;

                        $typeId         = $request->type;
                        $typeType       = Tradeshow::class;

                        break;

                    case 9:
                        $sourceId       = 9;

                        $categoryType   = Direct_contact::class;
                        $categoryId     = $request->category;

                        $typeId         = $request->type;
                        $typeType       = Phone::class;
                        break;

                    case 10:
                        $sourceId       = 10;

                        $categoryId     = $request->category;
                        $categoryType   = Showroom::class;

                        $typeId         = $request->type;
                        $typeType       = Brand::class;

                        break;

                    case 11:
                        $sourceId       = 11;

                        $categoryId     = $request->category;
                        $categoryType   = Cross_type::class;

                        $typeId         = $request->type;
                        $typeType       = Brand::class;

                        break;
                }

                //Lead_Request
                //Check if exists or create new and save Request
                $lead = Lead::firstOrCreate(
                    [
                        'email'      => strtolower($request->email)
                    ],
                    [
                        'first_name' => ucwords($request->firstName),
                        'last_name'  => ucwords($request->lastName)
                    ]);

                $lead->first_name    = ucwords($request->firstName);
                $lead->last_name     = ucwords($request->lastName);
                $lead->save();

                $leadDetails = Lead_detail::where("lead_id", $lead->id)->first();
                if (empty($leadDetails))
                {
                    $leadDetails = new Lead_detail;
                    $leadDetails->lead_id                   = $lead->id;
                    $leadDetails->job_position              = $request->jobPosition;
                    $leadDetails->industry_id               = $request->industry;
                    $leadDetails->mobile                    = $request->mobile;
                    $leadDetails->website                   = $request->website;
                    $leadDetails->address                   = $request->address;
                    $leadDetails->company                   = $request->company;
                    $leadDetails->employees_nr              = $request->companyNumber;
                    $leadDetails->phone                     = $request->phone;
                    $leadDetails->lead_mkt_type_id          = $request->mktType;
                    $leadDetails->lead_role_id              = $request->contactRole;
                    $leadDetails->save();

                }
                else
                {
                    $leadDetails->industry_id               = $request->industry;
                    $leadDetails->job_position              = $request->jobPosition;
                    $leadDetails->address                   = $request->address;
                    $leadDetails->company                   = $request->company;
                    $leadDetails->website                   = $request->website;
                    $leadDetails->employees_nr              = $request->companyNumber;
                    $leadDetails->phone                     = $request->phone;
                    $leadDetails->mobile                    = $request->mobile;
                    $leadDetails->lead_mkt_type_id          = $request->mktType;
                    $leadDetails->lead_role_id              = $request->contactRole;
                    $leadDetails->save();
                }

                $lead_request = new Lead_request;
                $lead_request->lead_id                      = $lead->id;
                $lead_request->brand_id                     = $request->brand;
                $lead_request->country_id                   = $request->country;
                $lead_request->state_id                     = $state;
                $lead_request->city                         = $request->city;
                $lead_request->country_detected             = null;
                $lead_request->region_detected              = null;
                $lead_request->browser_language             = null;

                $lead_request->source_id                    = $sourceId;
                $lead_request->source_categoryable_id       = $categoryId;
                $lead_request->source_categoryable_type     = $categoryType;

                $lead_request->interested_nameable_id       = $typeId;
                $lead_request->interested_nameable_type     = $typeType;

                $lead_request->interested_categoryable_id   = $subTypeId;
                $lead_request->interested_categoryable_type = $subTypeType;

                $lead_request->lead_class_id                = null;
                $lead_request->more_info                    = $request->moreInfo;
                $lead_request->lead_type_id                 = $request->leadType;
                $lead_request->lead_potencial               = null;
                $lead_request->url_origin                   = null;
                $lead_request->url_converted                = null;
                $lead_request->interested_in                = $request->interestedIn;
                $lead_request->heard_about                  = $request->heardAbout;
                $lead_request->cta_id                       = null;
                $lead_request->cta_color_id                 = null;
                $lead_request->form_page_id                 = null;
                $lead_request->form_page_position_id        = null;
                $lead_request->save();

                /*
                * manual insert links
                */
                if ( !is_null($request->facebook) || !is_null($request->instagram) ||
                !is_null($request->pinterest) || !is_null($request->linkedIn) )
                {
                    $networks =[
                        [
                        "networkId" => 1,
                        "name"      => "facebook",
                        "link"      => $request->facebook,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 2,
                        "name"      => "linkedin",
                        "link"      => $request->linkedIn,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 3,
                        "name"      => "googleplus",
                        "link"      => $request->linkedIn,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 4,
                        "name"      => "instagram",
                        "link"      => $request->instagram,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 5,
                        "name"      => "pinterest",
                        "link"      => $request->pinterest,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 6,
                        "name"      => "twitter",
                        "link"      => null,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 17,
                        "name"      => "vkontakte",
                        "link"      => null,
                        "statusId"  => 1
                        ],
                        [
                        "networkId" => 18,
                        "name"      => "xing",
                        "link"      => null,
                        "statusId"  => 1
                        ],
                    ];

                    $request->request->add(['id' => $lead->id]);
                    $request->request->add(['networksList' => $networks]);
                    $this->cross($request);
                }

                $this->geoip = resolve(GeoIP::class);
                $this->geoip->setIP(\Request::ip());

                activity()
                    ->withProperties([
                        'ip'      => \Request::ip(),
                        'country' => $this->geoip->getCountry(),
                        'region'  => $this->geoip->getRegion()
                    ])
                    ->log('Added request to '.$request->email.' in '.class_basename($lead_request));

                $user_lead                  = new User_lead;
                $user_lead->user_id         = Auth::user()->id;
                $user_lead->lead_request_id = $lead_request->id;
                $user_lead->save();

                $response = $this->saveToSalesForce($lead_request->id, true);

                if (isset($response['success']))
                {
                    $sfResponse['flag']      = false;
                    $sfResponse['message']   = null;
                }
                else
                {
                    $sfResponse['flag']    = true;
                    $sfResponse['message'] = $response;
                }

                return json_encode([
                    "duplicated" =>
                        [   "flag"     => false,
                            "message" => "success",
                        ]
                    ,
                    "salesforce" =>
                        [   "error"     => $sfResponse['flag'],
                            "message"   => $sfResponse['message'],
                        ]
                ]);
            }
            catch (\Exception $e)
            {
                return $e->getMessage();
            }
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

    public function edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id'         => 'required',
        ]);

        if($validator->passes())
        {
            try
            {
                $leadInfo = Lead_request::with('lead')
                    ->where("id",$request->id)
                    ->first();

                $facebook   = null;
                $linkedin   = null;
                $pinterest  = null;
                $instagram  = null;
                $oneNetwork = $leadInfo->networks_lead;

                if ($oneNetwork)
                {
                    $facebook = $oneNetwork
                        ->where("social_network_id", 1)
                        ->first();
                    $facebook = ($facebook != null )? $facebook->link : null;

                    $linkedin = $oneNetwork
                        ->where("social_network_id", 2)
                        ->first();
                    $linkedin =  ($linkedin != null )? $linkedin->link : null;

                    $pinterest = $oneNetwork
                        ->where("social_network_id", 4)
                        ->first();
                    $pinterest = ($pinterest != null )? $pinterest->link : null;

                    $instagram = $oneNetwork
                        ->where("social_network_id", 5)
                        ->first();
                    $instagram = ($instagram != null )? $instagram->link : null;
                }

                $leadDetails = [
                    'id'                => $leadInfo->id,
                    'brand'             => $leadInfo->brand->id,
                    'email' 		    => $leadInfo->lead->email,
                    'firstName' 	    => $leadInfo->lead->first_name,
                    'lastName' 		    => $leadInfo->lead->last_name,
                    'country'           => $leadInfo->country->id,
                    'state'             => ($leadInfo->country->id == 234) ? $leadInfo->state->id : null,
                    'moreInfo' 		    => $leadInfo->more_info,
                    'industry' 		    => $leadInfo->lead->details->industry_id,
                    'company' 		    => $leadInfo->lead->details->company,
                    'phone' 		    => $leadInfo->lead->details->phone,
                    'interestedIn'      => $leadInfo->interested_in,
                    'leadType' 		    => $leadInfo->lead_type_id,
                    'city' 		        => $leadInfo->city,
                    'mobile' 		    => $leadInfo->lead->details->mobile,
                    'address' 		    => $leadInfo->lead->details->address,
                    'website' 		    => $leadInfo->lead->details->website,
                    'heardAbout' 		=> $leadInfo->heard_about,
                    'jobPosition' 		=> $leadInfo->lead->details->job_position,
                    'sources'           => $leadInfo->source_id,
                    'category'          => $leadInfo->source_categoryable->id,
                    'type'              => ($leadInfo->interested_nameable_type != null) ? $leadInfo->interested_nameable_id: null,
                    'subType'           => ($leadInfo->interested_categoryable_type != null) ? $leadInfo->interested_categoryable_id : null,
                    'companyNumber'     => $leadInfo->lead->details->employees_nr,
                    'facebook' 		    => $facebook,
                    'instagram' 		=> $instagram,
                    'pinterest' 		=> $pinterest,
                    'linkedIn'          => $linkedin,
                    'contactRole'       => $leadInfo->lead->details->lead_role_id,
                    'mktType'           => $leadInfo->lead->details->lead_mkt_type_id,
                ];

                return json_encode(['lead' => ['data' => $leadDetails]]);
            }
            catch(\Exception $e)
            {
                return $e->getMessage();
            }
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

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName'         => 'required',
            'lastName'          => 'sometimes',
            'email'             => 'required|email',
            'country'           => 'required|exists:countries,id|integer',
            'sources'           => 'required|integer',
            'leadType'          => 'required',
            'heard_about'       => 'sometimes|string'
        ]);

        if($validator->passes())
        {
            try
            {
                //Country && State
                if($request->country != 234)
                {
                    $state      = null;
                    $typeRegion = 'city';
                    $region     = $request->city;
                }
                else
                {
                    $typeRegion = 'state';
                    $region     = $request->state;
                    $state      = $request->state;
                }
                //Source
                $sourceId       = null;
                $subTypeId      = null;
                $subTypeType    = null;
                $categorySF     = null;
                $typeSF         = null;
                $subtypeSF      = null;

                switch ($request->sources)
                {
                case 2:
                    $sourceId       = 2;

                    $categoryType   = Advertising::class;
                    $categoryId     = $request->category;

                    break;

                case 4:
                    $sourceId       = 4;

                    $categoryType   = Email::class;
                    $categoryId     = $request->category;

                    break;

                case 5:
                    $sourceId       = 5;

                    $categoryType   = Platforms::class;
                    $categoryId     = $request->category;

                    break;

                case 6:
                    $sourceId       = 6;

                    $categoryId     = $request->category;
                    $categoryType   = Social_network_category::class;

                    $typeId         = $request->type;
                    $typeType       = Social_network::class;

                    $subTypeId      = $request->subType;
                    $subTypeType    = SocialNetwork_subType::class;

                    break;

                case 7:
                    $sourceId       = 7;

                    $categoryType   = Partner_brand::class;
                    $categoryId     = $request->category;

                    break;

                case 8:
                    $sourceId       = 8;

                    $categoryId     = $request->category;
                    $categoryType   = Tradeshow_category::class;

                    $typeId         = $request->type;
                    $typeType       = Tradeshow::class;

                    break;

                case 9:
                    $sourceId       = 9;

                    $categoryType   = Direct_contact::class;
                    $categoryId     = $request->category;

                    $typeId         = $request->type;
                    $typeType       = Phone::class;

                    break;

                case 10:
                    $sourceId       = 10;

                    $categoryId     = $request->category;
                    $categoryType   = Showroom::class;

                    $typeId         = $request->type;
                    $typeType       = Brand::class;

                    break;

                case 11:
                    $sourceId       = 11;

                    $categoryId     = $request->category;
                    $categoryType   = Cross_type::class;

                    $typeId         = $request->type;
                    $typeType       = Brand::class;

                    break;
                }

                //Lead_Request
                //Check if exists or create new and save Request
                $lead = Lead::updateOrCreate(
                    [
                        'email'      => strtolower($request->email)
                    ],
                    [
                        'first_name' => ucwords($request->firstName),
                        'last_name'  => ucwords($request->lastName)
                    ]);

                $leadDetails = Lead_detail::updateOrCreate(
                    [
                        'lead_id'       => $lead->id,
                    ],
                    [
                        'job_position'      => $request->jobPosition,
                        'industry_id'       => $request->industry,
                        'company'           => $request->company,
                        'phone'             => $request->phone,
                        'mobile'            => $request->mobile,
                        'website'           => $request->website,
                        'address'           => $request->address,
                        'employees_nr'      => $request->companyNumber,
                        'lead_mkt_type_id'  => $request->mktType,
                        'lead_role_id'      => $request->contactRole,

                    ]);

                $lead_request = Lead_request::find($request->id);
                $lead_request->lead_id                      = $lead->id;
                $lead_request->brand_id                     = $request->brand;

                $lead_request->country_id                   = $request->country;
                $lead_request->state_id                     = $state;
                $lead_request->city                         = $request->city;
                $lead_request->country_detected             = null;
                $lead_request->region_detected              = null;
                $lead_request->browser_language             = null;

                $lead_request->source_id                    = $sourceId;
                $lead_request->source_categoryable_id       = $categoryId;
                $lead_request->source_categoryable_type     = $categoryType;

                $lead_request->interested_nameable_id       = $typeId;
                $lead_request->interested_nameable_type     = $typeType;

                $lead_request->interested_categoryable_id   = $subTypeId;
                $lead_request->interested_categoryable_type = $subTypeType;

                $lead_request->lead_class_id                = null;
                $lead_request->more_info                    = $request->moreInfo;
                $lead_request->lead_type_id                 = $request->leadType;
                $lead_request->lead_potencial               = null;
                $lead_request->url_origin                   = null;
                $lead_request->url_converted                = null;
                $lead_request->interested_in                = $request->interestedIn;
                $lead_request->heard_about                  = $request->heardAbout;
                $lead_request->cta_id                       = null;
                $lead_request->cta_color_id                 = null;
                $lead_request->form_page_id                 = null;
                $lead_request->form_page_position_id        = null;
                $lead_request->save();

                $this->geoip = resolve(GeoIP::class);
                $this->geoip->setIP(\Request::ip());
                activity()
                    ->withProperties([
                        'ip'        => \Request::ip(),
                        'country' => $this->geoip->getCountry(),
                        'region'  => $this->geoip->getRegion()
                    ])
                    ->log('Updated request to '.$request->email.' in '.class_basename($lead_request));

                if (isset($lead_request->salesforce_id))
                {
                    $response = $this->saveToSalesForce($lead_request->id, false);
                }
                else
                {
                    $response = $this->saveToSalesForce($lead_request->id, true);
                }

                if (isset($response['success']))
                {
                    $sfResponse['flag']      = false;
                    $sfResponse['message']   = null;
                }
                else
                {
                    $sfResponse['flag']    = true;
                    $sfResponse['message'] = $response;
                }

                return json_encode([
                    "salesforce" =>
                        [   "error"     => $sfResponse['flag'],
                            "message"   => $sfResponse['message'],
                        ]
                ]);
            }
            catch(\Exception $e)
            {
                return $e->getMessage();
            }
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

    public function saveToSalesForceResend(Request $request)
    {
        try
        {
            $response = $this->saveToSalesForce($request->id,true);
            if (isset($response['success']))
                {
                    $sfResponse['flag']      = false;
                    $sfResponse['message']   = null;
                }
                else
                {
                    $sfResponse['flag']    = true;
                    $sfResponse['message'] = $response;
                }

                return json_encode([
                    "salesforce" =>
                        [   "error"     => $sfResponse['flag'],
                            "message"   => $sfResponse['message'],
                        ]
                ]);
        }
        catch(\Exception $e)
        {
            return $e->getMessage();
        }


    }

    public function saveToSalesForce(int $lead_request_id,bool $insert)
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
                'interested_categoryable',
                'interested_nameable')
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

            $facebook   = null;
            $linkedin   = null;
            $pinterest  = null;
            $instagram  = null;
            $oneNetwork = $lead_requested->networks_lead;

            if ($oneNetwork)
            {
                $facebook = $oneNetwork
                ->where("social_network_id", 1)
                ->first();
                $facebook = ($facebook != null )? $facebook->link : null;

                $linkedin = $oneNetwork
                ->where("social_network_id", 2)
                ->first();
                $linkedin =  ($linkedin != null )? $linkedin->link : null;

                $pinterest = $oneNetwork
                ->where("social_network_id", 4)
                ->first();
                $pinterest = ($pinterest != null )? $pinterest->link : null;

                $instagram = $oneNetwork
                ->where("social_network_id", 5)
                ->first();
                $instagram = ($instagram != null )? $instagram->link : null;
            }

            $jsonContent = [
                'FirstName'                 => $lead_requested->lead->first_name,
                'LastName'                  => $lead_requested->lead->last_name,
                'Email'                     => $lead_requested->lead->email,
                'Company'                   => $lead_requested->lead->details->company,
                'phone'                     => $lead_requested->lead->details->phone,
                'industry'                  => $lead_requested->lead->details->industry->name,
                'website'                   => $lead_requested->lead->details->website,
                'CountryCode'               => $lead_requested->country->iso,
                $typeRegion                 => $region,
                'Nivel__c'                  => $lead_requested->lead_type->name,
                'Source__c'                 => $lead_requested->source->name,
                'Category__c'               => $lead_requested->source_categoryable->name,
                'Type__c'                   => ($lead_requested->interested_nameable_type != null) ? $lead_requested->interested_nameable->name: null,
                'Sub_Type__c'               => ($lead_requested->interested_categoryable_type != null) ? $lead_requested->interested_categoryable->name: null,
                'Interested_in__c'          => $lead_requested->interested_in,
                'Brand__c'                  => $lead_requested->brand->name_salesforce,
                'More_Information__c'       => $lead_requested->more_info,
                'MKT_type__c'               => $lead_requested->lead->details->lead_mkt_type->name,
                'Contact_role__c'           => ($lead_requested->lead->details->lead_role != null) ? $lead_requested->lead->details->lead_role->name : null,
                'Companys_employee_nr__c'   => $lead_requested->lead->details->employees_nr,
                'Facebook__c'               => $facebook,
                'LinkedIn__c'               => $linkedin,
                'Instagram__c'              => $instagram,
                'Pinterest__c'              => $pinterest,
            ];

            if ($insert)
            {
                $jsonContent['Registered_by__c'] = Auth::user()->name;
            }

            $jsonContent = json_encode($jsonContent);

            $this->sf = resolve(SalesForceAPI::class);

            if ($insert)
            {
                $response = $this->sf->Insert('Lead', $jsonContent);
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
        catch(\Exception $e)
        {
            return $response['exception'] = $e->getMessage();
        }

    }
}

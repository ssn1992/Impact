<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use App\Models\Lead_token_brand;
use App\Models\Country;
use App\Models\Country_state;
use App\Models\Lead;
use App\Models\Lead_request;
use App\Models\Lead_class;
use App\Models\Ebook;
use App\Models\Blog;
use App\Models\Source;
use App\Models\Type;
use App\Models\Form;
use App\Models\Cta;
use App\Models\Infographic;
use App\Models\Catalogue;
use App\Models\Cta_color;
use App\Models\Form_page;
use App\Models\Form_page_position;
use App\Models\Lead_type;
use App\Models\Lead_campaign;
use App\Models\Lead_detail;
use App\Models\Website;
use App\Services\GeoIP;
use Log;
use Validator;
use DB;

class LeadRegisterController extends Controller
{

    protected $geoip;

    public function __construct()
    {
        $this->geoip = resolve(GeoIP::class);
    }

    /*
    * Validate and Store all external Leads
    *
    *
    * @param Request $request
    [
    @string first_name,
    @string last_name,
    @string email,
    @string token,
    @string country,
    @string state,
    @string ip,
    @string browser_language,
    @int source,
    @string type,
    @string interested_name,
    @string interested_category,
    @int lead_potencial,
    @string referrer,
    @string url_origin,
    @string url_converted,
    @string lead_path
    @string lead_class
    @string heard_about,
    @string cta,
    @string cta_color,
    @string page,
    @string page_position*
    @blogname // not empty if source = 3
    ]
    * @return Response
    [
        @json ->success,code
        @json -> missing field(s),code
        @json -> invalid field(s),code
    ]
    */
    public function store(Request $request)
    {

        if ($request->has('token'))
        {

            /* ########################################################## */
            /*  ------  Check validations in fields that are closed ----- */
            /* ########################################################## */

            $validator = Validator::make($request->all(), [
                'token'				=> 'required|exists:lead_token_brands,token',
                'email'				=> 'required|email',
                'country_iso'		=> 'sometimes|exists:countries,iso|nullable',
                'country'			=> 'sometimes|exists:countries,name|nullable',
                'state'				=> 'sometimes|exists:country_states,name|nullable',
                'ip'				=> 'required|ip',
                'browser_language'	=> 'required',
                'source'			=>
                    [
                        'required',
                        Rule::in([1, 3]),
                    ],
                'form'				=> 'required|exists:forms,name',
                'lead_type'			=> 'required|exists:lead_types,name',
                'url_origin'		=> 'required|url',
                'url_converted'		=> 'required|url',
                'lead_path'			=> 'required',
                'cta'				=> 'required|exists:ctas,name',
                'cta_color'			=> 'required|exists:cta_colors,name',
                'page'				=> 'required|exists:form_pages,name',
                'page_position'		=> 'required|exists:form_page_positions,name'
            ]);

            if ($validator->passes())
            {
                try
                {
                    $this->geoip->setIP($request->ip);
                    $country_detected   = $this->geoip->getCountry();
                    $region_detected    = $this->geoip->getRegion();

                    $country_id         = 0;

                    if (isset($request->country))
                    {
                        $country = Country::where('name',$request->country)
                        ->first();

                        if (isset($country))
                        {
                            $country_id = $country->id;
                        }
                    }
                    else
                    {
                        $country = Country::where('iso',$request->country_iso)
                        ->first();

                        if (isset($country))
                        {
                            $country_id = $country->id;
                        }
                    }

                    if ($request->country == 'United States' || $request->country_iso == 'US' )
                    {
                        $state = Country_state::where('name',$request->state)
                        ->first();

                        $state = $state->id;
                    }
                    else
                    {
                        $state = null;
                    }

                    if ($request->source == 3)
                    {
                        $blog = Blog::where('name',$request->blog)
                            ->first();

                        if (!$blog)
                        {
                            $response= "Invalid blog: ". $request->blog;
                            $this->log($request,$response);
                            return response()->json($response, 400);
                        }
                        else
                        {
                            $sourceCategory     = $blog->id;
                            $sourceCategoryType = Blog::class;
                        }
                    }
                    else
                    {
                        $sourceCategory     = 2;
                        $sourceCategoryType = Website::class;
                    }

                    $tokenBrand = Lead_token_brand::where('token',$request->token)
                    ->first();

                    $form = Form::where('name',$request->form)
                    ->first();

                    $leadType = Lead_type::where('name',$request->lead_type)
                    ->first();

                    $cta = Cta::where('name',$request->cta)
                    ->first();

                    $cta_color = Cta_color::where('name',$request->cta_color)
                    ->first();

                    $page = Form_page::where('name',$request->page)
                    ->first();

                    $page_position = Form_page_position::where('name',$request->page_position)
                    ->first();

                    //Form Category
                    // declare variables just in case not defined
                    $interested_name;
                    $interested_category;
                    switch ($form->name)
                    {
                        case 'Catalogue':
                            $interested = Catalogue::where('name',$request->interested_name)
                            ->first();

                            if (!$interested)
                            {
                                $response = "Invalid interested_name for type[Catalogue]: ".$request->interested_name;
                                $this->log($request,$response);
                                return response()->json($response, 400);
                            }
                            else
                            {
                                $interested_name        = $interested->id;
                                $interested_category    = Catalogue::class;
                            }
                            break;

                        case 'Ebook':
                            $interested = Ebook::where('name',$request->interested_name)
                                ->first();

                            if (!$interested)
                            {
                                $response = "Invalid interested_name for type[Ebook]: ".$request->interested_name;
                                $this->log($request,$response);
                                return response()->json($response, 400);
                            }
                            else
                            {
                                $interested_name        = $interested->id;
                                $interested_category    = Ebook::class;
                            }
                            break;

                        case 'Infographic':
                            $interested = Infographic::where('name',$request->interested_name)
                                ->first();

                            if (!$interested)
                            {
                                $response = "Invalid interested_name for type[Infographics]: ".$request->interested_name;
                                $this->log($request,$response);
                                return response()->json($response, 400);
                            }
                            else
                            {
                                $interested_name        = $interested->id;
                                $interested_category    = Infographic::class;
                            }
                            break;

                        default:
                            $interested_name        = null;
                            $interested_category    = null;
                            break;
                    }

                    $lead = Lead::firstOrCreate(
                        [
                            'email'         => Str::lower($request->email)
                        ],
                        [
                            'first_name'    => title_case($request->first_name),
                            'last_name'     => title_case($request->last_name)
                        ]);

                    if ($request->has('first_name'))
                    {
                        $lead->first_name = title_case($request->first_name);
                        $lead->save();
                    }

                    if ($request->has('last_name'))
                    {
                        $lead->last_name = title_case($request->last_name);
                        $lead->save();
                    }

                    $lead_request                               = new Lead_request;
                    $lead_request->lead_id                      = $lead->id;
                    $lead_request->brand_id                     = $tokenBrand->brand_id;

                    $lead_request->country_id                   = $country_id;
                    $lead_request->state_id                     = $state;
                    $lead_request->city                         = $request->city;
                    $lead_request->country_detected             = $country_detected;
                    $lead_request->region_detected              = $region_detected;
                    $lead_request->browser_language             = $request->browser_language;

                    $lead_request->source_id                    = $request->source;
                    $lead_request->source_categoryable_id       = $sourceCategory;
                    $lead_request->source_categoryable_type     = $sourceCategoryType;
                    $lead_request->interested_nameable_id       = $form->id;
                    $lead_request->interested_nameable_type     = Form::class;
                    $lead_request->interested_categoryable_id   = $interested_name;
                    $lead_request->interested_categoryable_type = $interested_category;
                    $lead_request->referrer                     = $request->referrer;
                    $lead_request->lead_class_id                = null;
                    $lead_request->lead_type_id                 = $leadType->id;

                    $lead_request->lead_potencial               = $request->lead_potencial;
                    $lead_request->url_origin                   = $request->url_origin;
                    $lead_request->url_converted                = $request->url_converted;
                    $lead_request->lead_path                    = $request->lead_path;
                    $lead_request->heard_about                  = $request->heard_about;
                    $lead_request->more_info                    = $request->more_info;
                    $lead_request->cta_id                       = $cta->id;
                    $lead_request->cta_color_id                 = $cta_color->id;
                    $lead_request->form_page_id                 = $page->id;
                    $lead_request->form_page_position_id        = $page_position->id;

                    $lead_request->product_category             = $request->product_category;
                    $lead_request->product_type                 = $request->product_type;
                    $lead_request->product_name                 = $request->product_name;

                    if ($lead_request->save())
                    {

                        $contactInfo = Lead_detail::where("lead_id", $lead_request->lead_id)->first();

                        if (empty($contactInfo))
                        {
                            $contactInfo                = new Lead_detail;
                            $contactInfo->lead_id       = $lead_request->lead_id;
                            $contactInfo->job_position  = $request->jobPosition;
                            $contactInfo->industry_id   = $request->industry;
                            $contactInfo->company       = $request->company;
                            $contactInfo->address       = $request->address;
                            $contactInfo->zip_code      = $request->zipCode;
                            $contactInfo->phone         = $request->phone;
                            $contactInfo->mobile        = $request->mobile;
                            $contactInfo->website       = $request->website;
                            $contactInfo->save();
                        }
                        else
                        {
                            if (!empty($request->jobPosition))
                            {
                                $contactInfo->job_position  = $request->jobPosition;
                            }
                            if (!empty($request->company))
                            {
                                $contactInfo->company       = $request->company;
                            }
                            if (!empty($request->address))
                            {
                                $contactInfo->address       = $request->address;
                            }
                            if (!empty($request->phone))
                            {
                                $contactInfo->phone         = $request->phone;
                            }
                            if (!empty($request->mobile))
                            {
                                $contactInfo->mobile        = $request->mobile;
                            }
                            if (!empty($request->website))
                            {
                                $contactInfo->website       = $request->website;
                            }
                            $contactInfo->save();
                        }

                        $part_referrer = parse_url($request->referrer);
                        if (isset($part_referrer['query']))
                        {
                            $this->saveTrack($part_referrer,$lead_request->id);
                        }
                        else
                        {
                            $part_origin = parse_url($request->url_origin);
                            if (isset($part_origin['query']))
                            {
                                $this->saveTrack($part_origin,$lead_request->id);
                            }
                        }

                        return response()->json("success", 201);
                    }
                    else
                    {
                        return	response()->json("Invalid save BD");
                        $this->log($request,"Invalid save BD");
                    }
                }
                catch (\Exception $e)
                {
                    return response()->json('ERROR: '.$e, 500);
                    $this->log($request,$e);
                }
            }
            else
            {
                $errorMessage = array();
                foreach ($validator->errors()->getMessages() as $key => $value)
                {
                    $errorMessage[$key] = current($value);
                }
                $this->log($request,$errorMessage);
                return response()->json($errorMessage, 400);
            }
        }
    }

    private function log(Request $request, $error)
    {
        date_default_timezone_set('Europe/London');
        $data = date('Y-m-d');
        $time = date('h-A');
        Log::useDailyFiles(base_path() . '/storage/logs/'.$data.'/'.$time.'-info.log');
        Log::info($error);
        Log::info($request);
    }

    private function saveTrack(array $tracker, int $id)
    {
        parse_str($tracker['query'], $query);
        if (isset($query['utm_source']) && isset($query['utm_campaign']))
        {
            $tracker                    = new Lead_campaign;
            $tracker->lead_request_id   = $id;
            $tracker->source            = $query['utm_source'];
            $tracker->name              = $query['utm_campaign'];
            $tracker->medium            = isset($query['utm_medium']) ? $query['utm_medium'] : null;
            $tracker->term              = isset($query['utm_term']) ? $query['utm_term'] : null;
            $tracker->content           = isset($query['utm_content']) ? $query['utm_content'] : null;

            if (!$tracker->save())
            {
                $this->log($request,'error saving tracklink, not valid?');
            }
        }

    }

}
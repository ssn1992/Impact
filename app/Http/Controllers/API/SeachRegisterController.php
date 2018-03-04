<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Search_lead;

class SearchRegisterController extends Controller
{
    public function store(Request $request)
    {
        if ($request->has('token'))
        {

            $validator = Validator::make($request->all(), [
                'token'				=> 'required|exists:lead_token_brands,token',
                'email'				=> 'nullable|email',
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
            ]);

            if ($validator->passes())
            {
                try
                {
                    $this->geoip->setIP($request->ip);
                    $country_detected = $this->geoip->getCountry();
                    $region_detected = $this->geoip->getRegion();

                    if ($request->source==3)
                    {
                        $blog = Blog::where('name',$request->blog)
                            ->first();

                        if(!$blog)
                        {
                            $response= "Invalid blog: ".$request->blog;
                            $this->log($request,$response);
                            return response()->json($response, 400);
                        }
                        else
                        {
                            $sourceCategory     =   $blog->id;
                            $sourceCategoryType =   Blog::class;
                        }
                    }
                    else
                    {
                        $sourceCategory     =   3;
                        $sourceCategoryType =   Website::class;
                    }

                    if ($request->has('email'))
                    {
                        $lead = Lead::where('email',$request->email)
                        ->firstOrFail();

                         $country_id = 0;
                         if (isset($request->country))
                         {
                            $country = Country::where('name',$request->country)
                            ->first();

                            if (isset($country))
                            {
                                $country_id=$country->id;
                            }
                        }
                        else
                        {
                            $country = Country::where('iso',$request->country_iso)
                            ->first();

                            if (isset($country))
                            {
                                $country_id=$country->id;
                            }
                        }

                        if ($request->country == 'United States' || $request->country_iso =='US')
                        {
                            $state = Country_state::where('state',$request->state)
                                ->first();

                            $state= $state->id;
                        }
                        else
                        {
                            $state=null;
                        }

                        $search_lead = new Search_lead;
                        $search_lead->lead_id                   = $lead->id;
                        $search_lead->brand_id                  = $tokenBrand->brand_id;
                        $search_lead->country_id                = $country_id;
                        $search_lead->source_id                 = $request->source;
                        $search_lead->source_categoryable_type  = $sourceCategoryType;
                        $search_lead->source_categoryable_type  = $sourceCategoryType;
                        $search_lead->state_id                  = $state;
                        $search_lead->city                      = $request->city;
                        $search_lead->country_detected          = $country_detected;
                        $search_lead->region_detected           = $region_detected;
                        $search_lead->browser_language          = $request->browser_language;
                        $search_lead->search_parameter          = $request->search;
                        $search_lead->save();
                    }
                    else
                    {
                        $search_lead = new Search_lead;
                        $search_lead->lead_id                   = 0;
                        $search_lead->brand_id                  = $tokenBrand->brand_id;
                        $search_lead->source_id                 = $request->source;
                        $search_lead->source_categoryable_id    = $sourceCategory;
                        $search_lead->source_categoryable_type  = $sourceCategoryType;
                        $search_lead->country_detected          = $country_detected;
                        $search_lead->region_detected           = $region_detected;
                        $search_lead->browser_language          = $request->browser_language;
                        $search_lead->search_parameter          = $request->search;
                        $search_lead->save();
                    }
                }
                catch (\Exception $e)
                {
                    return response()->json(config('messages.code500'), 500);
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
}

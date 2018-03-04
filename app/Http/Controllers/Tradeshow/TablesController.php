<?php

namespace App\Http\Controllers\Tradeshow;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tradeshow;
use App\Models\Tradeshow_tradeshow_edition;
use App\Models\Lead_request;
use Carbon\carbon;
use App\Models\Brand_access;
use Auth;
class TablesController extends Controller
{
/**
	*		Recives Id, DateFrom and Date To(only years)
	*
	*		Send Information about the leads inside that interval
	*/
    public function listing(Request $request)
    {
        try {

            $request->fairsLocation = (is_null($request->fairsLocation)) ? "all" : $request->fairsLocation ;
            $request->fairsName = (is_null($request->fairsName)) ? "all" : $request->fairsName ;

            $access = Brand_access::select("brand_access")
            ->where('brand_id',Auth::User()->brand_id)
            ->get();

            $brandAccess = array();
            foreach ($access as $value)
            {
                array_push($brandAccess,$value->brand_access);
            }

            $leads = Lead_request::with(
                'lead',
                'lead_type',
                'brand',
                'source',
                'interested_categoryable',
                'interested_nameable',
                'source_categoryable')
                ->where([
                        ['interested_nameable_type',Tradeshow::class],
                        ['source_id', "=" , 8],
                        ['interested_nameable_id', (is_null($request->fairs) ? '!=' : '=') ,$request->fairs],
                        ["created_at",">=", $request->dateFrom],
                        ["created_at","<=",$request->dateTo],
                    ]
                )->whereIn("brand_id",$brandAccess)
                ->get();

            if ($leads->count() > 0)
            {
                $data = $leads->map(function ($lead) use ($request)
                {
                    if
                    (
                        (($lead->interested_categoryable->Tradeshow_edition->id == $request->fairsLocation)
                            ||
                            ($request->fairsLocation == "all"))
                        &&
                        (($lead->interested_categoryable->Tradeshow_time->id == $request->fairsName)
                            ||
                            ($request->fairsName == "all"))
                    )
                    {
                        return [
                            'id'                => $lead->id,
                            'Date'              => $lead->created_at->toDateTimeString(),
                            'FirstName'         => $lead->lead->first_name,
                            'LastName'          => $lead->lead->last_name,
                            'County'			=> $lead->country->name ,
                            'SF'                => (isset($lead->salesforce_id)) ? $lead->salesforce_id : false ,
                            'States'            => ($lead->state_id != null) ? $lead->state->name : "",
                            'Address'           => isset($lead->lead->details->address) ? $lead->lead->details->address: "",
                            'Zip Code'          => isset($lead->lead->details->zip_code) ? $lead->lead->details->zip_code: "" ,
                            'Phone'             => isset($lead->lead->details->phone) ? $lead->lead->details->phone: "",
                            'Mobile'            => isset($lead->lead->details->mobile) ? $lead->lead->details->mobile : "",
                            'Company'           => isset($lead->lead->details->company) ? $lead->lead->details->company: "",
                            'Job Title'         => isset($lead->lead->details->job_position) ? $lead->lead->details->job_position : "",
                            'Website'           => isset($lead->lead->details->website) ? $lead->lead->details->website : "",
                            'Email'             => $lead->lead->email,
                            'Brand'             => $lead->brand->name,
                            'Tradeshow'         => $lead->interested_nameable->name,
                            'Tradeshow Edition' => $lead->interested_categoryable->Tradeshow_edition->name,
                            'Tradeshow Time'    => $lead->interested_categoryable->Tradeshow_time->name .  " - " . Carbon::createFromFormat("Y-m-d",$lead->interested_categoryable->Tradeshow_time->dateFrom)->year,
                            'source Type'		=> isset($lead->source_categoryable->name) ? $lead->source_categoryable->name : "",
                        ];
                    }
                });
                return json_encode(["table" => [
                    'tableId'   => 'fair-table',
                    'tableName' => "Tradeshow Total",
                    'columns'   => array_keys($data->first()),
                    'data'      => $data
                    ]
                ]);
            }
            else
            {
                return json_encode(["table" => [
                    'tableId'   => 'fair-table',
                    'tableName' => "Tradeshow Total",
                    'columns'   => null,
                    'data'      => null
                    ]
                ]);
            }
        } catch (\Exeption $e) {
            return $e;
            return response()->json(config('messages.code500'), 500);
        }
    }

    public function client_common(Request $request)
    {
      	//crio mapa listagem leads nesta edição
          $leads = Lead_request::where('source_id', 8)
          ->where('interested_categoryable_type',Tradeshow_tradeshow_edition::class)
          ->with('interested_categoryable' ,function($q) use ($request)
          {
              $q->where('tradeshow_id', $request->fair)
                  ->where('tradeshow_edition_id', (is_null($request->fairsLocation) ? '!=' : '='), $request->fairsLocation)
                  ->where('tradeshow_time_id', (is_null($request->fairsName) ? '!=' : '='), $request->fairsName);
          })
        ->get();

        if (!empty($leads))
        {
            $leads = $leads->map(function ($lead)
            {
                return
                [
                    'Email'             => $lead->lead->email,
                    'Brand'             => $lead->brand->name,
                ];
            });

        $groupedLeads = $leads->groupBy('Email');

		$data = [];
        $raw = [];
		foreach ($groupedLeads as $key => $lead)
		{

            $brands="";
            $raw['Email'] = $key;

            foreach ($lead as $brand)
		    {
                $brands.= $brand['Brand'].", ";
            }
            $brands = substr($brands, 0, -2);
            $raw['Brands'] = $brands;
            array_push($data, $raw);
        };

		if ($leads->count() > 0)
            {
                return json_encode(["table" => [
                    'tableId'   => 'fair-table',
                    'tableName' => "Tradeshow Total",
                    'columns'   => array_keys($data->first()),
                    'data'      => $data
                    ]
                ]);
            }
            else
            {
                return json_encode(["table" => [
                    'tableId'   => 'fair-table',
                    'tableName' => "Tradeshow Total",
                    'columns'   => null,
                    'data'      => null
                    ]
                ]);
            }
        }
	}
}

<?php

namespace App\Http\Controllers\ManualImport;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lead_request;
use App\Models\User_lead;
use Auth;

class GraphsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
	/**
	 * Gets All leads crossed by me
     *
	 * @param Request -> dateFrom, dateTo, brand
	 * @return Json
	 */
    public function leads_created_by_user(Request $request)
    {

        if (is_null($request->brand)) {
            switch (Auth::user()->roles->first()->name) {
                case 'Admin':
                case 'Accounter':
                    $request->brand = null;
                    break;

                default:
                    $request->brand = Auth::user()->brand_id;
                    break;
            }
        }

        $leads = Lead_request::wherehas('user_lead')->where('brand_id', Auth::user()->brand_id)->get();

        if ($leads->count() > 0)
        {
            $leadsGrouped = $leads->groupBy("user_id");
            $data = array();
            $labels = array();

            $temp = $leadsGrouped->map(function($lead) use(&$data,&$labels){
                array_push($labels,$lead->first()->brand->name);
                array_push($data,$lead->count());
            });

            $total = $leads->count();
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Leads Imported | Total: $total",
                "data"      => [
                    "label"     => "Manual import",
                    "labels"    => $labels,
                    "data"      => $data,
                    ]
                ];

            return json_encode(["graph" => $datas]);
        }
        else
        {
            $data = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "No Leads Imported in These Dates",
                "data"      => null
            ];

            return json_encode(["graph" => $data]);
        }
    }

    public function leads_created_by_brand(Request $request)
    {
        if (is_null($request->brand)) {
            switch (Auth::user()->roles->first()->name) {
                case 'Admin':
                case 'Accounter':
                    $request->brand = null;
                    break;

                default:
                    $request->brand = Auth::user()->brand_id;
                    break;
            }
        }

        $leads = Lead_request::wherehas('user_lead')->get();

        if ($leads->count() > 0)
        {
            $leadsGrouped = $leads->groupBy("brand_id");
            
            $data = array();
            $labels = array();

            $temp = $leadsGrouped->map(function($lead) use(&$data,&$labels){
                array_push($labels,$lead->first()->brand->name);
                array_push($data,$lead->count());
            });

            $total = $leads->count();
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Leads Imported | Total: $total",
                "data"      => [
                    "label"     => "Cross found by me",
                    "labels"    => $labels,
                    "data"      => $data,
                    ]
                ];

            return json_encode(["graph" => $datas]);
        }
        else
        {
            $data = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "No Leads Imported in These Dates",
                "data"      => null
            ];

            return json_encode(["graph" => $data]);
        }
    }
}
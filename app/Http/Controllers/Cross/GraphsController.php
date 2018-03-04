<?php

namespace App\Http\Controllers\Cross;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Network_lead;
use App\Models\Network_cross;
use App\Models\Social_network_cross;
use App\Models\Brand;
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
     *
	 * @param Request -> dateFrom, dateTo, brand
	 * @return Json
	 */
    public function leads_by_me_found(Request $request)
    {
        $networks = Social_network_cross::All();

        $leads = Network_cross::with('network_lead')
        ->where([
            ["created_at", ">=", $request->dateFrom],
            ["created_at", "<=", $request->dateTo],
            ['brand_id', (is_null($request->brand_id) ? '!=' : '=') ,$request->brand_id],
            ['user_id',Auth::user()->id]
        ])
        ->get();

        if ($leads->count() > 0)
        {
            $labels = array();
            $data = array();

            $rawData = $networks->map(function ($value) use($leads,&$labels,&$data)
            {
                $leadsNumber = $leads
                ->whereIn('network_lead_state_id',[3,4])
                ->where("network_lead.social_network_id",$value->social_network_id)
                ->count();

                if ($leadsNumber > 0)
                {
                    array_push($labels,$value->social_network->name);
                    array_push($data,$leadsNumber);
                }
            });

            $total = array_sum($data);
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross found by me | Total: $total",
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
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross found by me | Total: 0",
                "data"      => null];

            return json_encode(["graph" => $datas]);
        }
    }


    public function leads_by_me_not_found(Request $request)
    {

        $networks = Social_network_cross::All();

        $leads = Network_cross::with('network_lead')
        ->where([
            ["created_at", ">=", $request->dateFrom],
            ["created_at", "<=", $request->dateTo],
            ['brand_id', (is_null($request->brand_id) ? '!=' : '=') ,$request->brand_id],
            ['user_id',Auth::user()->id]
        ])
        ->get();

        if ($leads->count() > 0)
        {

        $labels = array();
        $data   = array();

            $rawData = $networks->map(function ($value) use($leads,&$labels,&$data) {

                $leadsNumber = $leads
                ->where('network_lead_state_id',2)
                ->where("network_lead.social_network_id",$value->social_network_id)->count();
                if ($leadsNumber > 0)
                {
                    array_push($labels,$value->social_network->name);
                    array_push($data,$leadsNumber);
                }
            });

            $total = array_sum($data);
            $datas = [
                    "graphId"   => "cross-found-general-graph",
                    "graphName" =>  "Cross not found by me | Total: $total",
                    "data"      => [
                        "label"     => "Cross not found by me",
                        "labels"    => $labels,
                        "data"      => $data,
                        ]
                    ];
                return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross not found by me | Total: 0",
                "data"      => null
                ];
            return json_encode(["graph" => $datas]);
        }
    }


    public function leads_by_brand(Request $request)
    {

        $brands = Brand::all();

        $leads = Network_cross::with('network_lead')
        ->where([
            ["created_at", ">=", $request->dateFrom],
            ["created_at", "<=", $request->dateTo],
            ['brand_id', (is_null($request->brand_id) ? '!=' : '=') ,$request->brand_id],
        ])
        ->get();

        if (!empty($leads))
        {
        $labels = array();
        $data   = array();

        $rawData = $brands->map(function ($value) use($leads,&$labels,&$data)
        {

            array_push($labels,$value->name);
            array_push($data,$leads->where("brand_id", $value->id)->whereIn("network_lead_state_id",[2,3,4])->count());

        });
        $total = array_sum($data);

        $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross found by Brand | Total: $total",
                "data"      => [
                    "label"     => "Cross found by Brand",
                    "labels"    => $labels,
                    "data"      => $data,
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross found by Brand | Total: 0",
                "data"      => [
                    "label"     => "Cross found by Brand",
                    "labels"    => [],
                    "data"      => [],
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
    }

    public function leads_by_network(Request $request)
    {
        $networks = Social_network_cross::All();

        $leads = Network_cross::with('network_lead')
        ->where([
            ["created_at", ">=", $request->dateFrom],
            ["created_at", "<=", $request->dateTo],
            ['brand_id', (is_null($request->brand_id) ? '!=' : '=') ,$request->brand_id],
        ])
        ->get();

        if (!empty($leads))
        {
            $labels = array();
            $data   = array();

            $rawData = $networks->map(function ($value) use($leads,&$labels,&$data)
            {
                array_push($labels,$value->social_network->name);
                array_push($data,$leads->where("network_lead.social_network_id", $value->social_network_id)->whereIn("network_lead_state_id",[3,4])->count());
            });

            $total = array_sum($data);
            $datas = [
                    "graphId"   => "cross-found-general-graph",
                    "graphName" =>  "Cross found by Network | Total: $total",
                    "data"      => [
                        "label"     => "Cross found by Network",
                        "labels"    => $labels,
                        "data"      => $data,
                        ]
                    ];
                return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "cross-found-general-graph",
                "graphName" =>  "Cross found by Network | Total 0",
                "data"      => [
                    "label"     => "Cross found by Network",
                    "labels"    => [],
                    "data"      => [],
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
    }
}
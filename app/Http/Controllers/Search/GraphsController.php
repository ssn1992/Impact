<?php

namespace App\Http\Controllers\Search;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Search_lead;

class GraphsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function top_search_name(Request $request)
    {

        $topSearch = Search_lead::select('search_parameter', DB::raw('count(*) as total'))
        ->groupBy('search_parameter')
        ->where('brand_id','!=',0)
        ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
        ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
        ->limit(10)
        ->get();

        if ($topSearch->count() > 0)
        {
            $labels=[];
            $data=[];
            foreach ($topSearch as $values)
            {
                array_push($data,$values->total);
                array_push($labels,$values->name);
            }

            $total = array_sum($data);
            $datas = [
                "graphId"=> "top-search-name-graph",
                "graphName"=>  "Top 10 search",
                "data" => [
                    "labels"=> $labels,
                    "data"=> $data,
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "top-search-name-graph",
                "graphName" =>  "Top 10 Search",
                "data"      => null
            ];
            return json_encode(["graph" => $datas]);
        }
    }

    public function top_search_lead_name(Request $request)
    {

        $topSearch = Search_lead::select('search_parameter', DB::raw('count(*) as total'))
        ->groupBy('search_parameter')
        ->whereHas('lead')
        ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
        ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
        ->limit(10)
        ->get();

        if ($topSearch->count() > 0)
        {
            $labels =[];
            $data =[];
            foreach ($topSearch as $values)
            {
                array_push($data,$values->total);
                array_push($labels,$values->name);
            }

            $total = array_sum($data);
            $datas = [
                "graphId"   => "top-search-lead-name-graph",
                "graphName" =>  "Top 10 Search Lead",
                "data"      => [
                    "labels"    => $labels,
                    "data"      => $data,
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "top-search-lead-name-graph",
                "graphName" =>  "Top 10 Search Lead",
                "data"      => null
            ];
            return json_encode(["graph" => $datas]);
        }
    }
}

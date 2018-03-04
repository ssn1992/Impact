<?php

namespace App\Http\Controllers\Campaigns;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lead_campaign;
use DB;

class GraphsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function top_campaigns_name(Request $request)
    {

        $topCampaigns = Lead_campaign::select('name', DB::raw('count(*) as total'))->groupBy('name')
        ->whereHas('lead_request', function($q) use ($request)
        {
            $q->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
              ->whereBetween('created_at', [$request->dateFrom, $request->dateTo]);
        })
        ->limit(10)
        ->get();

        if ($topCampaigns->count() > 0)
        {
            $labels = [];
            $data   = [];

            foreach ($topCampaigns as $values)
            {
                array_push($data,$values->total);
                array_push($labels,$values->name);
            }

            $total = array_sum($data);
            $datas = [
                "graphId"   => "top-campaigns-name-graph",
                "graphName" =>  "Top 10 Campaigns",
                "data"      => [
                    "label"     => "Campaigns",
                    "labels"    => $labels,
                    "data"      => $data,
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
                "graphId"   => "top-campaigns-name-graph",
                "graphName" =>  "Top 10 Campaigns",
                "data"      => null
            ];
            return json_encode(["graph" => $datas]);
        }
    }
}

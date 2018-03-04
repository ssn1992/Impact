<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead_request;
use Auth;

class MapsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Gets All countries contablization for map and top 10
     * @param Request
     * @return Json
     */

    public function lead_map(Request $request)
    {
        try
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
            $leads = Lead_request::with('country')
            ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
            ->whereNotIn('country_id', [0])
            ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
            ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($leads->count() > 0)
        {
            $countedLeads   = $leads->groupBy('country_id');
            $table          = collect();
            $map            = collect();
            $counted        = 0;

            $data = $countedLeads->map(function ($lead) use($counted,$table,$map)
            {
                $counted  = $lead->count();
                $table->push([
                    'country' => $lead->first()->country->name,
                    'iso'     => strtolower($lead->first()->country->iso),
                    'value'   => $counted,
                ]);

                $map->put($lead[0]->country->iso, $counted);
            });

            $table = $table->sortByDesc("value")
            ->take(10)
            ->values()
            ->toArray();

            $data = array(
                'table' => $table,
                'map'   => $map,
            );

            return json_encode(["maps" => [
                'mapId'   => 'totalLeads-map',
                'mapName' => 'Top Leads Worldwide',
                'data'    => $data
                ],
            ]);
        }

        return json_encode(["maps" => [
            'mapId'   => 'totalLeads-map',
            'mapName' => 'Top Leads Uniques Worldwide',
            'data'    => null
        ],
        ]);
    }

    /**
     * Gets All countries uniques contablization for map and top 10
     * @param Request
     * @return Json
     */

    public function lead_map_uniques(Request $request)
    {
        try
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
            $leads = Lead_request::with('country')
            ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
            ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
            ->whereNotIn('country_id', [0])
            ->distinct('lead_id')
            ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($leads->count() > 0)
        {
            $countedLeads   = $leads->groupBy('country_id');
            $table          = collect();
            $map            = collect();
            $counted        = 0;

            $data = $countedLeads->map(function ($lead) use($counted,$table,$map)
            {
                $counted  = $lead->count();
                $table->push([
                    'country' => $lead->first()->country->name,
                    'value'   => $counted,
                    'iso'     => strtolower($lead->first()->country->iso),
                ]);

                $map->put($lead->first()->country->iso, $counted);
            });

            $table = $table->sortByDesc("value")
            ->take(10)
            ->values()
            ->toArray();

            $data=array(
            'table' => $table,
            'map'   => $map,
            );

            return response()->json(["maps" => [
                'mapId'   => 'totalLeads-map-uniques',
                'mapName' => 'Top Leads Uniques worldwide',
                'data'    => $data
                ],
            ]);
        }

        return response()->json(["maps" => [
            'mapId'   => 'totalLeads-map-unique',
            'mapName' => 'Top Leads Uniques Worldwide',
            'data'    => null
        ],
        ]);
    }
}

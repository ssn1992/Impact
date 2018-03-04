<?php

namespace App\Http\Controllers\Search;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Search_lead;

class TablesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        try
        {
            $search =  Search_lead::where('brand_id','!=', 0)
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($search->count() > 0)
        {
            $data = $search->map(function ($lead)
            {
                return [
                    'Date'               => $search->created_at->toDateTimeString(),
                    'Search'             => $search->parameter,
                    'Country Detected'   => $search->country_detected,
                    'Region Detected'    => $search->region_detected,
                    'Browser Language'   => $search->browser_language,

                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'search-table',
                'tableName' => 'Search Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'search-table',
            'tableName' => 'Search Table',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }

    public function index_leads(Request $request)
    {
        try
        {
            $search =  Search_lead::whereHas('lead')
                    ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                    ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                    ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($search->count() > 0)
        {
            $data = $search->map(function ($lead)
            {
                return [
                    'Date'               => $search->created_at->toDateTimeString(),
                    'Search'             => $search->parameter,
                    'First Name'         => ($search->lead->first_name!= null) ? $search->lead->first_name: "",
                    'Last Name'          => ($search->lead->last_name!= null) ? $search->lead->last_name: "",
                    'Email'              => $search->lead->email,
                    'Country'            => $search->lead->country->name,
                    'State'              => (empty($search->lead->state->name)) ? "N/A" : $search->lead->state->name,
                    'Country Detected'   => $search->country_detected,
                    'Region Detected'    => $search->region_detected,
                    'Browser Language'   => $search->browser_language,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'search-lead-table',
                'tableName' => 'Search with Lead Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'search-lead-table',
            'tableName' => 'Search with Lead Table',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }
}

<?php

namespace App\Http\Controllers\Campaigns;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lead_campaign;

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
            $campaign =  Lead_campaign::whereHas('lead_request', function($q) use ($request)
                {
                    $q->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                      ->whereBetween('created_at', [$request->dateFrom, $request->dateTo]);
                })
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($campaign->count() > 0)
        {
            $data = $campaign->map(function ($campaign)
            {

                return [
                    'Date'               => $campaign->lead_request->created_at->toDateTimeString(),
                    'Source'             => $campaign->source,
                    'Campaign'           => $campaign->name,
                    'Medium'             => $campaign->medium,
                    'Term'               => $campaign->term,
                    'Content'            => $campaign->content,
                    'FirstName'          => $campaign->lead_request->lead->first_name,
                    'LastName'           => $campaign->lead_request->lead->last_name,
                    'Email'              => $campaign->lead_request->lead->email,
                    'Brand'              => $campaign->lead_request->brand->name,
                    'Country'            => $campaign->lead_request->country->name,
                    'State'              => (empty($campaign->lead_request->state->name)) ? "" : $campaign->lead_request->state->name,
                    'Country Detected'   => $campaign->lead_request->country_detected,
                    'Region Detected'    => $campaign->lead_request->region_detected,
                    'Browser Language'   => $campaign->lead_request->browser_language,
                    'Source'             => $campaign->lead_request->source->name,
                    'Source Category'    => $campaign->lead_request->source_categoryable->name,
                    'Source SubCategory' => ($campaign->lead_request->source_id == 3) ? $campaign->lead_request->source_categoryable->lead_request->blog_category->name : "" ,
                    'Form'               => $campaign->lead_request->interested_nameable->name,
                    'Category'           => (isset($campaign->lead_request->interested_categoryable->name)) ? $campaign->lead_request->interested_categoryable->name : "" ,
                    'Form SubCategory'   => ($campaign->lead_request->interested_nameable_id == 24) ? $campaign->lead_request->interested_categoryable->ebook_category->name : "" ,
                    'Referrer'           => $campaign->lead_request->referrer,
                    'Origin'             => $campaign->lead_request->url_origin,
                    'Converted'          => $campaign->lead_request->url_converted,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'campaigns-table',
                'tableName' => 'Campaigns Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'campaigns-table',
            'tableName' => 'Campaigns Table',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }
}

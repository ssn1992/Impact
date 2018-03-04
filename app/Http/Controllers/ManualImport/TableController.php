<?php

namespace App\Http\Controllers\ManualImport;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\SalesForceAPI;
use Validator;
use Auth;
use App\Models\Cross_type;
use App\Models\Occupation;
use App\Models\Social_network_category;
use App\Models\Social_network_type;
use App\Models\Tradeshow_category;
use App\Models\Partner_brand;
use App\Models\Lead;
use App\Models\Social_network;
use App\Models\Lead_detail;
use App\Models\Advertising;
use App\Models\Email;
use App\Models\Platforms;
use App\Models\Tradeshow;
use App\Models\Direct_contact;
use App\Models\Showroom;
use App\Models\Lead_request;
use App\Models\Brand;
use App\Models\Source;
use App\Models\Source_category;
use App\Models\User_lead;
use Carbon\carbon;
use App\Services\GeoIP;
use DB;

class TableController extends Controller
{
    public function index(Request $request)
    {
        try
        {
            if (is_null($request->brand))
            {
                switch (Auth::user()->roles->first()->name)
                {
                    case 'Admin':
                    case 'Accounter':
                        $request->brand = null;
                        break;

                    default:
                        $request->brand = Auth::user()->brand_id;
                        break;
                }
            }
            $leads = Lead_request::with(
                'lead',
                'lead_type',
                'brand',
                'country',
                'state',
                'source',
                'source_categoryable',
                'cta',
                'cta_color',
                'form_page',
                'form_page_position',
                'user_lead')
                ->has('user_lead')
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->get();
        }
        catch (\Exeption $e)
        {
            return $e;
        }

        if ($leads->count() > 0)
        {
            $data = $leads->map(function ($lead)
            {
                return [
                    'id'                 => $lead->id,
                    'Date'               => $lead->created_at->toDateTimeString(),
                    'First Name'         => ($lead->lead->first_name!= null) ? $lead->lead->first_name: "",
                    'Last Name'          => ($lead->lead->last_name!= null) ? $lead->lead->last_name: "",
                    'Email'              => $lead->lead->email,
                    'Brand'              => $lead->brand->name,
                    'SF'                 => (isset($lead->salesforce_id)) ? $lead->salesforce_id : false ,
                    'Country'            => $lead->country->name,
                    'State'              => (empty($lead->state->name)) ? "N/A" : $lead->state->name,
                    'company'            => $lead->lead->details->company,
                    'Phone'              => isset($lead->lead->details->phone) ? $lead->lead->details->phone: "",
                    'Source'             => $lead->source->name,
                    'Source Category'    => $lead->source_categoryable->name,
                    'Blogs Category'     => ($lead->source_id == 3) ? $lead->source_categoryable->blog_category->name : "" ,
                    'Type'               => (isset($lead->interested_nameable->name)) ? $lead->interested_nameable->name : "" ,
                    'Category'           => (isset($lead->interested_categoryable->name)) ? $lead->interested_categoryable->name : "" ,
                    'Form SubCategory'   => ($lead->interested_nameable_id == 24) ? $lead->interested_categoryable->ebook_category->name : "" ,
                    'User'               => $lead->user_lead->user->name,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'manual-import-leads-table',
                'tableName' => 'Leads Manual Import',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'manual-import-leads-table',
            'tableName' => 'Leads Manual Import',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }
}
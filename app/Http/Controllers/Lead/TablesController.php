<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead_request;
use App\Models\Form;
use Auth;


class TablesController extends Controller
{
    /**
     * Gets All leads information uniques
     * @param Request
     * @return Json
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function lead_table(Request $request)
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
                'form_page_position')
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->where('source_id','!=',8)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json($e, 500);
        }

        if ($leads->count() > 0)
        {
            $data = $leads->map(function($lead)
            {
                return [
                    'Date'               => $lead->created_at->toDateTimeString(),
                    'First Name'         => ($lead->lead->first_name!= null) ? $lead->lead->first_name: "",
                    'Last Name'          => ($lead->lead->last_name!= null) ? $lead->lead->last_name: "",
                    'Email'              => $lead->lead->email,
                    'Brand'              => $lead->brand->name,
                    'Country'            => $lead->country->name,
                    'State'              => (empty($lead->state->name)) ? "N/A" : $lead->state->name,
                    'Country Detected'   => $lead->country_detected,
                    'Region Detected'    => $lead->region_detected,
                    'Browser Language'   => $lead->browser_language,
                    'Source'             => $lead->source->name,
                    'Source Category'    => $lead->source_categoryable->name,
                    'Blogs Category'     => ($lead->source_id == 3) ? $lead->source_categoryable->blog_category->name : "" ,
                    'Type'               => ($lead->source_id == 1 || $lead->source_id == 3 || $lead->source_id == 6 || $lead->source_id == 8 || $lead->source_id == 10 || $lead->source_id == 11) ? $lead->interested_nameable->name : "",
                    'Category'           => (isset($lead->interested_categoryable->name)) ? $lead->interested_categoryable->name : "" ,
                    'Form SubCategory'   => ($lead->interested_nameable_id == 24) ? $lead->interested_categoryable->ebook_category->name : "" ,
                    'Referrer'           => $lead->referrer,
                    'Origin'             => $lead->url_origin,
                    'Converted'          => $lead->url_converted,
                    'Heard About'        => $lead->heard_about,
                    'More Info'          => $lead->more_info,
                    'Phone'              => isset($lead->lead->details->phone) ? $lead->lead->details->phone: "",
                    'Company'            => isset($lead->lead->details->company) ? $lead->lead->details->company: "",
                    'Product Category'   => isset($lead->product_category) ? $lead->product_category: "",
                    'Product Type'       => isset($lead->product_type) ? $lead->product_type: "",
                    'Product Name'       => isset($lead->product_name) ? $lead->product_name: "",
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'totalLeads',
                'tableName' => 'Total Leads',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'totalLeads',
            'tableName' =>'Total Leads',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }

    /**
     * Gets All leads information uniques
     * @param Request
     * @return Json
     */

    public function lead_table_uniques(Request $request)
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
            $leads =  Lead_request::with(
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
                'form_page_position')
                ->whereDoesntHave('lead', function($q) use ($request)
                {
                    $q->where('email', 'like', '%teste%');
                })
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->where('source_id','!=',8)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json($e, 500);
        }

        if ($leads->count() > 0)
        {
            $leads=$leads->unique('lead_id');

            $data = $leads->map(function ($lead)
            {

                return [
                    'Date'               => $lead->created_at->toDateTimeString(),
                    'First Name'         => ($lead->lead->first_name!= null) ? $lead->lead->first_name: "",
                    'Last Name'          => ($lead->lead->last_name!= null) ? $lead->lead->last_name: "",
                    'Email'              => $lead->lead->email,
                    'Brand'              => $lead->brand->name,
                    'Country'            => $lead->country->name,
                    'State'              => (empty($lead->state->name)) ? "N/A" : $lead->state->name,
                    'Country Detected'   => $lead->country_detected,
                    'Region Detected'    => $lead->region_detected,
                    'Browser Language'   => $lead->browser_language,
                    'Source'             => $lead->source->name,
                    'Source Category'    => $lead->source_categoryable->name,
                    'Blogs Category'     => ($lead->source_id == 3) ? $lead->source_categoryable->blog_category->name : "" ,
                    'Type'               => ($lead->source_id == 1 || $lead->source_id == 3 || $lead->source_id == 6 || $lead->source_id == 8 || $lead->source_id == 10 || $lead->source_id == 11) ? $lead->interested_nameable->name : "",
                    'Category'           => (isset($lead->interested_categoryable->name)) ? $lead->interested_categoryable->name : "" ,
                    'Form SubCategory'   => ($lead->interested_nameable_id == 24) ? $lead->interested_categoryable->ebook_category->name : "" ,
                    'Referrer'           => $lead->referrer,
                    'Origin'             => $lead->url_origin,
                    'Converted'          => $lead->url_converted,
                    'Heard About'        => $lead->heard_about,
                    'More Info'          => $lead->more_info,
                    'Phone'              => isset($lead->lead->details->phone) ? $lead->lead->details->phone: "",
                    'Company'            => isset($lead->lead->details->company) ? $lead->lead->details->company: "",
                    'Product Category'   => isset($lead->product_category) ? $lead->product_category: "",
                    'Product Type'       => isset($lead->product_type) ? $lead->product_type: "",
                    'Product Name'       => isset($lead->product_name) ? $lead->product_name: "",
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'totalLeads-table-uniques',
                'tableName' => 'Total Leads Uniques',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'totalLeads-table-uniques',
            'tableName' =>'Total Leads Uniques',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }

    public function form_table(Request $request)
    {
        try
        {
            $leads =  Lead_request::with(
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
                'interested_nameable')
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->where('interested_nameable_type', Form::class)
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json($e, 500);
        }

        if ($leads->count() > 0)
        {

            $leads  = $leads->groupBy('interested_nameable_id');

            $info   = collect();

            $data   = $leads->map(function($value,$key) use(&$info)
            {
                $info->push([
                    "name" => $value->first()->interested_nameable->name,
                    "count" => sizeof($value)
                ]);
            });

            return response()->json(["table" => [
                'tableId'   => 'leads-forms-table',
                'tableName' => 'Total Leads by Form',
                'columns'   => array_keys($info->first()),
                'data'      => $info
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'leads-forms-table',
            'tableName' => 'Total Leads by Form',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }
}
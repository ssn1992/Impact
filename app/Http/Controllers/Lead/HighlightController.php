<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Lead_request;
use App\Models\Budget;
use App\Models\Brand;
use DateTime;
use Auth;

class vars
{
    const COMERCIAL = 2;
    const GENERAL = 1;
}

class HighlightController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
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

        $id_brand = $request->brand;
        $dateFrom = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateFrom);
        $dateTo   = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateTo);

        if ($dateFrom < $dateTo)
        {
            try
            {
                if ($id_brand != null)
                {
                    $budget = Budget::where([
                        ["year",">=", $dateFrom->year ],
                        ["year","<=", $dateTo->year ],
                        ["brand_id",$id_brand]])->get();
                }
                else
                {
                    $budget = Budget::where([
                        ["year",">=", $dateFrom->year ],
                        ["year","<=", $dateTo->year ]])->get();
                }

                if ($id_brand == null)
                {
                    $leadsNow = Lead_request::with('lead')->where(
                        [["created_at", ">=", $dateFrom],
                        ["created_at", "<=", $dateTo],
                        ["source_id","!=",8]])
                        ->get();
                }
                else
                {
                    $leadsNow = Lead_request::with('lead')->where(
                        [["created_at", ">=", $dateFrom],
                        ["created_at", "<=", $dateTo],
                        ["brand_id", $id_brand],
                        ["source_id","!=",8]])
                        ->get();
                }

                // Discard tests emails from collection
                $leadTemp = collect();
                $data = $leadsNow->map( function($item) use(&$leadTemp){
                    $temp =  (preg_match('/teste/', $item->lead->email));
                    if (!$temp) {
                        $leadTemp->push($item);
                    }
                });

                $leadsNowWithWeeks = $leadsNow->map(function ($lead)
                {
                    $currentDate = Carbon::createFromFormat("Y-m-d H:i:s",$lead->created_at);
                    $data =
                        [
                            "id"            => $lead->id,
                            "lead_id"       => $lead->lead_id,
                            "lead_type_id"  => $lead->lead_type_id,
                            "year"          => $currentDate->year,
                            "week"          => $currentDate->weekOfYear,
                        ];

                    if ($currentDate->dayOfWeek     == Carbon::FRIDAY
                        || $currentDate->dayOfWeek  == Carbon::SATURDAY
                        || $currentDate->dayOfWeek  == Carbon::SUNDAY
                        )
                    {
                        $WeeksOnCurrentYear = $this->get_iso_weeks_in_year($currentDate->year-1);

                        if ($data["week"] == 1)
                        {
                            $data["week"] = $WeeksOnCurrentYear;
                        }
                        else
                        {
                            $data["week"] = $data["week"] - 1;
                        }
                    }

                    return $data;
                });

                if (count($leadsNow) > 0)
                {
                    $leadsTotal     = $leadsNow->count();
                    $leadsUnique    = count($leadTemp->unique("lead_id"));
                    $leadsComercial = count($leadsNow->where('lead_type_id', vars::COMERCIAL));
                    $leadsGeneral   = count($leadsNow->where('lead_type_id', vars::GENERAL));

                    if ($dateFrom->year != $dateTo->year)
                    {
                        $diferenceYears = $dateFrom->diffInYears($dateTo);
                        $dateFromOld    = $dateFrom->subYears($diferenceYears);
                        $dateToOld      = $dateTo->subYears($diferenceYears);

                        $percentages    = $this->leads_calculation($id_brand,$dateFromOld,$dateToOld,$leadsTotal,$leadsUnique,$leadsComercial,$leadsGeneral);
                    }
                    elseif ($dateFrom->month != $dateTo->month)
                    {
                        $diferenceMonths = $dateTo->diffInMonths($dateFrom);

                        $dateFromOld     = $dateFrom->subMonths($diferenceMonths);
                        $dateToOld       = $dateTo->subMonths($diferenceMonths);

                        $percentages     = $this->leads_calculation($id_brand,$dateFromOld,$dateToOld,$leadsTotal,$leadsUnique,$leadsComercial,$leadsGeneral);
                    }
                    else
                    {
                        $diferenceDays  = ($dateTo->diffInDays($dateFrom) != 0) ? $dateTo->diffInDays($dateFrom) : 1 ;
                        $dateFromOld    = $dateFrom->subDays($diferenceDays);
                        $dateToOld      = $dateTo->subDays($diferenceDays);


                        $percentages    = $this->leads_calculation($id_brand,$dateFromOld,$dateToOld,$leadsTotal,$leadsUnique,$leadsComercial,$leadsGeneral);
                    }

                    if (count($budget) > 0)
                    {
                        $priceTotalLeads      = ($leadsTotal > 0) ? $this->price_calculation(1, $id_brand, $request->dateFrom, $request->dateTo, $leadsNowWithWeeks) : 0;

                        $priceUniqueLeads     = ($leadsUnique > 0) ? $this->price_calculation(2, $id_brand, $request->dateFrom, $request->dateTo, $leadsNowWithWeeks) : 0;

                        $priceComerciaisLeads = ($leadsComercial > 0) ? $this->price_calculation(3, $id_brand, $request->dateFrom, $request->dateTo, $leadsNowWithWeeks) : 0;

                        $priceGeneralLeads    = ($leadsGeneral > 0) ? $this->price_calculation(4, $id_brand, $request->dateFrom, $request->dateTo, $leadsNowWithWeeks) : 0;
                    }
                    else
                    {
                        $priceTotalLeads = 0;
                        $priceUniqueLeads = 0;
                        $priceComerciaisLeads = 0;
                        $priceGeneralLeads = 0;
                    }

                        $leads = (object)
                    [
                        'leadsTotal'        => $leadsTotal,
                        'leadsUnique'       => $leadsUnique,
                        'leadsComercial'    => $leadsComercial,
                        'leadsGeneral'      => $leadsGeneral,
                    ];

                    $leadsPrices = (object)
                    [
                        'priceTotalLeads'       => $priceTotalLeads,
                        'priceUniqueLeads'      => $priceUniqueLeads,
                        'priceComerciaisLeads'  => $priceComerciaisLeads,
                        'priceGeneralLeads'     => $priceGeneralLeads,
                    ];

                    $highlights = $this->return_data($leads,$leadsPrices,$percentages);
                    return json_encode($highlights);

                }
                else
                {

                    $highlights = $this->Empty_array();
                    return json_encode($highlights);
                }
            }
            catch (\Exception $e)
            {
                return $e;
                return response()->json($e, 500);
            }
        }
        else
        {
            return response()->json('End Date > Start Date', 400);
        }
    }

    public function return_data($leads,$leadsPrices,$percentages)
    {

        $totalLead = array(
            'label'         => "Total Leads",
            'value'         => $leads->leadsTotal,
            'cost'          => $leadsPrices->priceTotalLeads,
            'progression'   => $percentages->leadsTotalPercentage["flag"],
            'percentage'    => round($percentages->leadsTotalPercentage["percentage"]),
        );

        $totalLeadUniques = array(
            'label'         => "Total Leads Unique",
            'value'         => $leads->leadsUnique,
            'cost'          => $leadsPrices->priceUniqueLeads,
            'progression'   => $percentages->leadsUniquePercentage["flag"],
            'percentage'    => round($percentages->leadsUniquePercentage["percentage"]),
        );

        $totalComercialLeads = array(
            'label'         => "Total Comercial Leads",
            'value'         => $leads->leadsComercial,
            'cost'          => $leadsPrices->priceComerciaisLeads,
            'progression'   => $percentages->leadsComercialPercentage["flag"],
            'percentage'    => round($percentages->leadsComercialPercentage["percentage"]),
        );

        $totalGeneralLeads = array(
            'label'         => "Total General Leads",
            'value'         => $leads->leadsGeneral,
            'cost'          => $leadsPrices->priceGeneralLeads,
            'progression'   => $percentages->leadsGeneralPercentage["flag"],
            'percentage'    => round($percentages->leadsGeneralPercentage["percentage"]),
        );

        $data = array(
            'totalLead'             => $totalLead,
            'totalLeadUniques'      => $totalLeadUniques,
            'totalComercialLeads'   => $totalComercialLeads,
            'totalGeneralLeads'     => $totalGeneralLeads,
        );

        $highlightsId = array(
            'highlightsId' => "leads-highlights",
        );

        $highlights = array("highlights" =>[
            "data"          => $data,
            "highlightsId"  => $highlightsId
            ]);

        return $highlights;
    }

    public function leads_calculation($id_brand,$dateStart,$dateStop,$leadsTotal,$leadsUnique,$leadsComercial,$leadsGeneral)
    {
        try
        {

            if ($id_brand == null)
            {
                $leadsOld = Lead_request::where(
                    [["created_at", ">=", $dateStart],
                        ["created_at", "<=", $dateStop],
                        ["source_id","!=",8]])->get();
            }
            else
            {
                $leadsOld = Lead_request::where(
                    [["created_at", ">=", $dateStart],
                        ["created_at", "<=", $dateStop],
                        ["brand_id", $id_brand],
                        ["source_id","!=",8]])->get();
            }

            // Discard tests emails from collection
            $leadTemp = collect();
            $data = $leadsOld->map( function($item) use(&$leadTemp){
                $temp =  (preg_match('/teste/', $item->lead->email));
                if (!$temp) {
                    $leadTemp->push($item);
                }
            });

            $leadsTotalOld     = $leadsOld->count();
            $leadsUniqueOld    = count($leadTemp->unique("lead_id"));
            $leadsComercialOld = count($leadsOld->where('lead_type_id', vars::COMERCIAL));
            $leadsGeneralOld   = count($leadsOld->where('lead_type_id', vars::GENERAL));

            $leadsTotalPercentage     = $this->percentage_calculation($leadsTotalOld, $leadsTotal);
            $leadsUniquePercentage    = $this->percentage_calculation($leadsUniqueOld, $leadsUnique);
            $leadsComercialPercentage = $this->percentage_calculation($leadsComercialOld, $leadsComercial);
            $leadsGeneralPercentage   = $this->percentage_calculation($leadsGeneralOld, $leadsGeneral);

            $data = (object)
            [
                'leadsTotalOld'             => $leadsTotalOld,
                'leadsUniqueOld'            => $leadsUniqueOld,
                'leadsComercialOld'         => $leadsComercialOld,
                'leadsGeneralOld'           => $leadsGeneralOld,
                //------------------------------------------------------------
                'leadsTotalPercentage'      => $leadsTotalPercentage,
                'leadsUniquePercentage'     => $leadsUniquePercentage,
                'leadsComercialPercentage'  => $leadsComercialPercentage,
                'leadsGeneralPercentage'    => $leadsGeneralPercentage,
            ];
            return $data;
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
    }

    public function percentage_calculation($old,$actual)
    {
        if ($actual > 0)
        {
            $leadsPercentage = (($old * 100)/$actual);

            if ($leadsPercentage == 0
                || $leadsPercentage - 100 == 0
                || 100 - $leadsPercentage == 0
            )
            {
                $leadsPercentage = 0;
                $leadsFlag = null;

            }
            elseif ($leadsPercentage >= 100)
            {
                $leadsPercentage = $leadsPercentage - 100;
                $leadsFlag = false;
            }
            elseif ($leadsPercentage < 100)
            {
                $leadsPercentage = 100 - $leadsPercentage;
                $leadsFlag = true;
            }
        }
        else
        {
            $leadsPercentage = 0;
            $leadsFlag = null;
        }

        $data = array
        (
            'percentage'    => $leadsPercentage,
            'flag'          => $leadsFlag,
        );

        return $data;
    }

    public function price_calculation($type,$brand,$dateStart,$dateStop,$leads)
    {
        try
        {
            $grouped    = $leads->groupBy("year");
            $sumTotal   = [];
            $dateFrom   = Carbon::createFromFormat("Y-m-d H:i:s",$dateStart);
            $dateTo     = Carbon::createFromFormat("Y-m-d H:i:s",$dateStop);

            if(is_null($brand))
            {
                $prices = Budget::whereBetween("year",[$dateFrom->year,$dateTo->year])->get();
            }
            else
            {
                $prices = Budget::whereBetween("year",[$dateFrom->year,$dateTo->year])->where("brand_id",$brand)->get();
            }

            $data = $grouped->map(function ($yearValue, $year) use($grouped,&$sumTotal,$prices,&$sum,$type)
            {
                $groupedByWeek = $grouped[$year]->groupBy("week");

                $data = $groupedByWeek->map(function ($weekValue, $week) use(&$groupedByWeek,$year,$prices,&$sumTotal,&$sum,$type)
                {

                    $priceForWeek = $prices->where("week",$week)->where("year",$year)->sum("price");

                    switch ($type)
                    {
                        case '1':
                            $countedLeads = count($weekValue);
                            break;

                        case '2':
                            $countedLeads = count($weekValue->unique("lead_id"));
                            break;

                        case '3':
                            $countedLeads = count($weekValue->where('lead_type_id', vars::COMERCIAL));
                            break;

                        case '4':
                            $countedLeads = count($weekValue->where('lead_type_id', vars::GENERAL));
                            break;
                    }

                    $sum = $priceForWeek/$countedLeads;
                    array_push($sumTotal,$sum);
                });
            });

            $priceTotal = round(array_sum($sumTotal)/count($sumTotal),2);

            return $priceTotal;
        }
        catch (\Exception $e)
        {
            return response()->json(config('messages.code500'), 500);
        }
    }

    function get_iso_weeks_in_year($year)
    {
        $date = new DateTime;
        $date->setISODate($year, 53);
        return ($date->format("W") === "53" ? 53 : 52);
    }

    public function Empty_array()
    {
        $leads = (object)[
            'leadsTotal'        => 0,
            'leadsUnique'       => 0,
            'leadsComercial'    => 0,
            'leadsGeneral'      => 0,
        ];

        $leadsPrices = (object)[
            'priceTotalLeads'       => 0,
            'priceUniqueLeads'      => 0,
            'priceComerciaisLeads'  => 0,
            'priceGeneralLeads'     => 0,
        ];

        $percentages = (object)[
            'leadsTotalPercentage' => [
                'percentage'    => 0,
                'flag'          => null
            ],
            'leadsUniquePercentage' => [
                'percentage'    => 0,
                'flag'          => null
            ],
            'leadsComercialPercentage' => [
            'percentage'    => 0,
                'flag'     => null
            ],
            'leadsGeneralPercentage' => [
                'percentage'    => 0,
                'flag'          => null
            ],
        ];

        $highlights = $this->return_data($leads,$leadsPrices,$percentages);
        return $highlights;
    }
}
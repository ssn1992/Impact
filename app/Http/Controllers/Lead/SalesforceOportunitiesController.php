<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead_request;
use App\Models\Brand;
use Auth;
use App\Services\SalesForceAPI;
use carbon\Carbon;


class SalesforceOportunitiesController extends Controller
{
    protected $sf;

    public function __construct()
    {
        $this->middleware('auth');
        $this->sf = resolve(SalesForceAPI::class);
    }

    /**
     * Gets All leads from day and their conversion opportunities
     * @param Request
     * @return Json
     */

    public function get_leads_oportunities (Request $request)
    {
        try
        {
            $userBrand=Brand::find(Auth::user()->brand_id);
            $leads = Lead_request::with(
                'lead',
                'brand',
                'country',
                'state',
                'source',
                'source_categoryable')
                ->where('brand_id', (is_null($request->brand) ? '!=' : '=') ,$request->brand)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->distinct('lead_id')
                ->get();
        }
        catch (\Exeption $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($leads->count() > 0)
        {
            $totalOpportunities = [];
            $chunks = $leads->chunk(150);
            $accountsSF = "";
            $dateSF     = Carbon::parse($request->dateFrom)->toDateString().'T00:00:00Z';

            foreach($chunks as $chunk)
            {
                foreach($chunk as $lead)
                {
                    $accountsSF = $accountsSF."'".$lead->lead->email."', ";
                }

                $accountsSF = substr( $accountsSF, 0, -2);

                $soql_query = "SELECT Account.Name,
                (SELECT Contact.Email FROM Contacts where Contact.Email  IN ($accountsSF) LIMIT 1),
                (SELECT Opportunity.Name, Opportunity.StageName, Opportunity.Proforma_Total_Amount__c, Opportunity.CreatedDate FROM Opportunities where Opportunity.StageName
                IN ('Closed Won','Closed Lost', 'Official Quote') and Opportunity.Brand__c = '$userBrand->name' and Opportunity.CreatedDate >= $dateSF)
                from Account
                WHERE Account.Id
                IN (SELECT Contact.accountId
                    FROM Contact
                    WHERE Contact.Email
                    IN ($accountsSF))";

                try
                {
                    $response = $this->sf->Query($soql_query);
                }
                catch (\Exception $e)
                {
                    return response()->json(config('messages.code500'), 500);
                }

                if ($response)
                {

                    foreach ($response['records'] as $acc)
                    {
                        $Opportunities = [];
                        $Opportunities['Name'] = $acc['Name'];

                        foreach ($acc['Contacts']['records'] as $contact)
                        {
                            $Opportunities['Email'] = $contact['Email'];
                        }

                        if (isset($acc['Opportunities']))
                        {

                            foreach ($acc['Opportunities']['records'] as $opp)
                            {
                                $Opportunities['OpName']    = $opp['Name'];
                                $Opportunities['OpStage']   = $opp['StageName'];
                                $Opportunities['OpAmount']  = $opp['Proforma_Total_Amount__c'];
                                $Opportunities['OpDate']    = $opp['CreatedDate'];
                                array_push($totalOpportunities,$Opportunities);
                            }
                        }
                    }
                }
                else
                {
                    return response()->json(["table" => [
                        'tableId'   => 'opportunities-table',
                        'tableName' =>'Total Opportunities',
                        'columns'   => null,
                        'data'      => null
                    ]
                    ]);
                }
            }
            if (!empty($totalOpportunities))
            {
                $data = collect($totalOpportunities);

                return response()->json(["table" => [
                    'tableId'   => 'opportunities-table',
                    'tableName' => 'Total Opportunities',
                    'columns'   => array_keys($data[0]),
                    'data'      => $data
                    ]
                ]);
            }
            else
            {
                return response()->json(["table" => [
                    'tableId'   => 'opportunities-table',
                    'tableName' =>'Total Opportunities',
                    'columns'   => null,
                    'data'      => null
                    ]
                ]);
            }
        }
    }
}
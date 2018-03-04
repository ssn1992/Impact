<?php

 namespace App\Http\Controllers\Cross;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead_request;
use App\Models\Brand_access;
use App\Models\Social_network_cross;
use App\Models\Network_cross;
use App\Models\User;
use Auth;
use Mockery\Exception;

class TablesController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
	}

	/**
	 * Gets All leads information
	 * @param Request
	 * @return Json
	 */

	public function lead_table(Request $request)
	{
		try
		{
            $socialNetworks = Social_network_cross::all();

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
                'networks_lead',
                'brand',
                'country',
                'source')
                ->whereDoesntHave('lead', function ($q) use ($request) {
                    $q->where('email', 'like', '%teste%');
                })
                ->where('brand_id', (is_null($request->brand) ? '!=' : '='), $request->brand)
                ->whereBetween('created_at', [$request->dateFrom, $request->dateTo])
                ->get();


            if ($leads->count() > 0) {
                $leads = $leads->unique('lead_id');
				$data = $leads->map(function ($lead) use ($socialNetworks)
				{
                    $dateTemp = $lead->created_at->toDateTimeString();

                    $result = [
                        'id'         	=> $lead->lead_id,
                        'Date'       	=> $dateTemp,
                        'First Name' 	=> ($lead->lead->first_name != null) ? $lead->lead->first_name : "",
                        'Last Name'  	=> ($lead->lead->last_name != null) ? $lead->lead->last_name : "",
                        'email'      	=> $lead->lead->email,
						'country'    	=> $lead->country->name,
						'company'    	=> isset($lead->lead->details->company) ? $lead->lead->details->company: "",
						'source'     	=> ($lead->source->name != null) ? $lead->source->name : "",
						'Interested in'	=> isset($lead->interested_in) ? $lead->interested_in : "",
						'+ Info'		=> isset($lead->more_info) ? $lead->more_info : "",
                        'type'       	=> isset($lead->interested_nameable->name) ? $lead->interested_nameable->name : "",
                        'networks'   	=> [],
                    ];

					$networksLists = $socialNetworks->map(function ($networksList) use ($lead)
					{

                        $oneNetwork = $lead->networks_lead;
                        $oneNetwork = $oneNetwork
                            ->where("social_network_id", $networksList->social_network_id)
							->first();

						if (empty($oneNetwork))
						{
                            return [
                                "networkId" => $networksList->social_network_id,
                                "name" => strtolower($networksList->social_network->name),
                                "link" => null,
                                "statusId" => 2,
                            ];
						}
						elseif (
						($oneNetwork->network_lead->where("brand_id","!=",Auth::user()->brand_id)->count() > 0)
						&&
						($oneNetwork->network_lead->where("brand_id","=",Auth::user()->brand_id)->count() == 0))
						{

							return [
								"networkId"	=> $networksList->social_network_id,
								"name"		=> strtolower($networksList->social_network->name),
								"link"		=> $oneNetwork->link,
								"statusId" 	=> 1,
							];

						}
						else
						{
							return [
                                "networkId"	=> $networksList->social_network_id,
                                "name" 		=> strtolower($networksList->social_network->name),
                                "link" 		=> $oneNetwork->link,
                                "statusId" 	=> $oneNetwork->network_lead->where("brand_id","=",Auth::user()->brand_id)->first()->network_lead_state->id,
                            ];
                        }
					});

                    $networksAll['networksList'] = $networksLists->toArray();

                    $result['networks'] = $networksAll;

                    return $result;
				});
                return response()->json(["table" => [
                    'tableId' 	=> 'totalCross-table',
                    'tableName' => 'Total Cross',
                    'columns' 	=> array_keys($data->first()),
                    'data' 		=> $data
                ]
                ]);
			}
			else
			{
                return response()->json(["table" => [
                    'tableId' 	=> 'totalCross-table',
                    'tableName' => 'Total Cross',
                    'columns' 	=> null,
                    'data' 		=> null
                ]
                ]);
            }
		}
		catch (\Exception $e)
		{
	        return response()->json($e, 500);
        }
	}

	public function leads_found_by_team_members(Request $request)
	{

		$socialNetworks = Social_network_cross::all();

		$leads = Network_cross::with('network_lead')
		->where([
			["created_at", ">=", $request->dateFrom],
			["created_at", "<=", $request->dateTo],
			['brand_id', (is_null($request->brand_id) ? '!=' : '='), $request->brand_id],
		])
		->get();

		if (!$leads->isEmpty())
		{
			$leadsGroupedByUser = $leads->groupBy("user_id");

			$data = $leadsGroupedByUser->map( function($value, $key) use(&$leads,$socialNetworks)
			{
				$returnArray = collect();

				$returnArray->put('Name', User::find($key)->name);

				$rawData = $socialNetworks->map( function($network) use(&$returnArray,$socialNetworks,$key,$leads)
				{
					$name = $network->social_network->name;

					$countedByNetwork = $leads->where("network_lead_id", $network->social_network_id)
					->where("user_id", $key)
					->count();

					$returnArray->put("$name",$countedByNetwork);
				});

				$returnArray->put('Total', $leads->where("user_id", $key)
				->groupBy("lead_id")
				->count());

				return $returnArray->toArray();
			});
			return response()->json(["table" => [
				'tableId'   => 'totalCross-table',
				'tableName' => 'Total Cross',
				'columns'   => array_keys($data->first()),
				'data'      => $data
				]
			]);
		}
		else
		{
			return response()->json(["table" => [
				'tableId'   => 'totalCross-table',
				'tableName' => 'Total Cross',
				'columns'   => null,
				'data'      => null
				]
			]);
		}
	}

	public function leads_found_by_me(Request $request)
	{

		$socialNetworks = Social_network_cross::all();

		$leads = Network_cross::with('network_lead')
		->where([
			["created_at", ">=", $request->dateFrom],
			["created_at", "<=", $request->dateTo],
			['brand_id', (is_null($request->brand_id) ? '!=' : '='), $request->brand_id],
			['user_id', Auth::User()->id],
		])
		->get();

		if (!$leads->isEmpty())
		{
			$leadsGroupedByUser = $leads->groupBy("user_id");

			$data = $leadsGroupedByUser->map(function ($value,$key) use(&$leads,$socialNetworks)
			{
				$returnArray = collect();

				$returnArray->put('Name',User::find($key)->name);

				$rawData = $socialNetworks->map(function ($network) use(&$returnArray,$socialNetworks,$key,$leads)
				{
					$name = $network->social_network->name;

					$countedByNetwork = $leads->where("network_lead_id",$network->social_network_id)
					->where("user_id",$key)
					->count();

					$returnArray->put("$name",$countedByNetwork);
				});

				$returnArray->put('Total',$leads->where("user_id",$key)->groupBy("lead_id")
				->count());

				return $returnArray->toArray();
			});

			return response()->json(["table" => [
				'tableId'	=>	'totalCross-table',
				'tableName'	=>	'Total Cross',
				'columns'	=>	array_keys($data->first()),
				'data'		=>	$data
				]
			]);
		}
		else
		{
			return response()->json(["table" => [
				'tableId'	=>	'totalCross-table',
				'tableName'	=>	'Total Cross',
				'columns'	=>	null,
				'data'		=>	null
				]
			]);
		}
	}
}
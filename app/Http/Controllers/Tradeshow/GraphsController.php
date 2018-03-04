<?php

namespace App\Http\Controllers\Tradeshow;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Tradeshow_tradeshow_edition;
use App\Models\Tradeshow_time;
use App\Models\Lead_request;
use App\Models\Lead_class;
use App\Models\Brand;
use Carbon\carbon;
use Validator;


class GraphsController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
	}

	public function graph(Request $request)
	{
        $request->fairsLocation	= (is_null($request->fairsLocation)) ? "all" : $request->fairsLocation ;
        $request->fairsName 	= (is_null($request->fairsName)) ? "all" : $request->fairsName ;
        $dateFrom				= Carbon::createFromFormat("Y-m-d H:i:s",$request->dateFrom);
        $dateTo					= Carbon::createFromFormat("Y-m-d H:i:s",$request->dateTo);

        $leads = Lead_request::with(
            'lead',
            'lead_type',
            'brand',
            'source',
            'interested_categoryable',
            'interested_nameable',
            'source_categoryable')
            ->where([
                ['interested_nameable_type',"App\Models\Tradeshow"],
                ['source_id', "=" , 8],
                ['interested_nameable_id', (is_null($request->fair) ? '!=' : '=') ,$request->fair],
                ["created_at",">=", $request->dateFrom],
                ["created_at","<=",$request->dateTo],
            ])->get();

		if($leads->count() >0)
		{
			$leads = $leads->filter(function ($value, $key) use($request) {

					return
						(($value->interested_categoryable->Tradeshow_edition->id == $request->fairsLocation)
						||
						($request->fairsLocation == "all"))
					&&
						(($value->interested_categoryable->Tradeshow_time->id == $request->fairsName)
						||
						($request->fairsName == "all"));
			});

			$data = $leads->map(function ($lead) use ($request)
			{
				if
				(
					(($lead->interested_categoryable->Tradeshow_edition->id == $request->fairsLocation)
						||
						($request->fairsLocation == "all"))
					&&
					(($lead->interested_categoryable->Tradeshow_time->id == $request->fairsName)
						||
						($request->fairsName == "all"))
				)
				{

					return [
						'brand'		=> $lead->brand->name,
                        "dateYear"	=> Carbon::createFromFormat("Y-m-d H:i:s",$lead->created_at)->year,
                        "dateMonth"	=> Carbon::createFromFormat("Y-m-d H:i:s",$lead->created_at)->format('F'),
                        "dateDay"	=> Carbon::createFromFormat("Y-m-d H:i:s",$lead->created_at)->format('d'),
					];
				}
			});

			if ($dateFrom->year != $dateTo->year)
			{
                $leadOrded 	= $data->sortByDesc('dateYear');
                $leadOrded 	= $leadOrded->groupBy("dateYear");
			}
			elseif ($dateFrom->month != $dateTo->month)
			{
                $leadOrded 	= $data->sortByDesc('dateMonth');
                $leadOrded 	= $leadOrded->groupBy("dateMonth");
			}
			else
			{
                $leadOrded 	= $data->sortByDesc('dateDay');
                $leadOrded 	= $leadOrded->groupBy("dateDay");
            }

			$leadByBrand 	= $data->groupBy("brand");
			$data 			= array();
			$labels 		= array();

			foreach ($leadOrded as $key => $value)
			{
				array_push($data,count($value));
				array_push($labels,$key);
			}

			$dataSetYears 	= [
				"label"		=> "Top Contacts",
				"data"		=>$data,
				"labels"	=>$labels,
			];

			$data 			= array();
			$labels 		= array();

			foreach ($leadByBrand as $key => $value)
			{
				array_push($data,count($value));
				array_push($labels,$key);
			}

			$dataSetBrands 	= [
				"label"		=> "Top Brands",
				"data"		=>$data,
				"labels"	=>$labels,
			];

			$graph 			= array(
				"graphId"	=> "fairs-graph",
				"graphName"	=> "Fairs",
				"data" 		=> [
					"dataSetBrands"	=>	$dataSetBrands,
					"dataSetYears" 	=> 	$dataSetYears
				]
			);

		}
		else
		{
			$graph 			= array(
				"graphId"	=> "fairs-graph",
				"graphName"	=> "Fairs",
				"data" 		=> null
			);
		}

		return response()->json(['graph' => $graph]);
	}

	public function fairs_comparison_graph(Request $request)
	{
		$validator = Validator::make($request->all(), [
			"fair1"			=> "nullable|exists:tradeshows,id",
			"fairLocation1"	=> "nullable|exists:tradeshow_editions,id",
			"fairName1"		=> "nullable|exists:tradeshow_times,id",

			"fair2"			=> "nullable|exists:tradeshows,id",
			"fairLocation2"	=> "nullable|exists:tradeshow_editions,id",
			"fairName2"		=> "nullable|exists:tradeshow_times,id",
		]);


		if ($validator->passes())
		{

			$fair1 = Tradeshow_tradeshow_edition::where([
				["tradeshow_id", $request->fair1],
				['tradeshow_edition_id',$request->fairLocation1],
				['tradeshow_times_id', $request->fairName1]
			])->first();

			$fair2 = Tradeshow_tradeshow_edition::where([
				['tradeshow_id', $request->fair2],
				['tradeshow_edition_id',$request->fairLocation2],
				['tradeshow_times_id', $request->fairName2]
			])->first();

			$fair1Leads	= Lead_request::where([
				['interested_nameable_type',"App\Models\Tradeshow"],
				['source_id', "=" , 8],
				['interested_nameable_id',$fair1->Tradeshow->id],
				["created_at",">=", $fair1->Tradeshow_time->dateFrom],
				["created_at","<=",$fair1->Tradeshow_time->dateTo],
			])->get();

			$fair2Leads	= Lead_request::where([
				['interested_nameable_type',"App\Models\Tradeshow"],
				['source_id', "=" , 8],
				['interested_nameable_id',$fair2->Tradeshow->id],
				["created_at",">=", $fair2->Tradeshow_time->dateFrom],
				["created_at","<=",$fair2->Tradeshow_time->dateTo],
			])->get();

			$countFair1 = $fair1Leads->count();
			$countFair2 = $fair2Leads->count();

			$dataFair1 = array(
				'label'				=> "$fair1->Tradeshow->name",
				"data"				=> $countFair1
			);
			$dataFair2 = array(
				'label'				=> "$fair2->Tradeshow->name",
				"data"				=> $countFair2
			);
			$data = array(
				'Fair 1'		=> $dataFair1,
				'Fair 2'		=> $dataFair2,
			);
			$graph = array(
				"graph" => [
					"data"			=> $data,
					"graphId"		=> "tradeshow-leads",
					"graphName"		=> "Leads Comparison"
				]);

			return json_encode($graph);
		}
		else
		{
			return response()->json(config('messages.code500'), 500);
		}
	}


	public function job_type_graph(Request $request)
	{

		$validator = Validator::make($request->all(), [
			"fair1"			=> "required|exists:tradeshows,id",
			"fairLocation1"	=> "required|exists:tradeshow_editions,id",
			"fairName1"		=> "required|exists:tradeshow_times,id",

			"fair2"			=> "required|exists:tradeshows,id",
			"fairLocation2"	=> "required|exists:tradeshow_editions,id",
			"fairName2"		=> "required|exists:tradeshow_times,id",
		]);

		if ($validator->passes())
		{

			$tradeshow1 = Tradeshow_tradeshow_edition::where([
				["tradeshow_id", $request->fair1],
				['tradeshow_edition_id',$request->fairLocation1],
				['tradeshow_times_id', $request->fairName1]
			])->first();

			$tradeshow2 = Tradeshow_tradeshow_edition::where([
				['tradeshow_id', $request->fair2],
				['tradeshow_edition_id',$request->fairLocation2],
				['tradeshow_times_id', $request->fairName2]
			])->first();

			$fair1Leads	= Lead_request::where([
				['interested_nameable_type',"App\Models\Tradeshow"],
				['source_id', "=" , 8],
				['interested_nameable_id',$tradeshow1->Tradeshow->id],
				["created_at",">=", $tradeshow1->Tradeshow_time->dateTo],
				["created_at","<=",$tradeshow1->Tradeshow_time->dateFrom],
			])->get();

			$fair2Leads	= Lead_request::where([
				['interested_nameable_type',"App\Models\Tradeshow"],
				['source_id', "=" , 8],
				['interested_nameable_id',$tradeshow2->Tradeshow->id],
				["created_at",">=", $tradeshow2->Tradeshow_time->dateTo],
				["created_at","<=",$tradeshow2->Tradeshow_time->dateFrom],
			])->get();

			$fair1Leads = $fair1Leads->groupBy("details.job_position");
			$fair2Leads = $fair2Leads->groupBy("details.job_position");

			$labels 					= collect();
			$tradeshow1RawData 			= collect();
			$tradeshow2RawData 			= collect();
			$tradeshow1ValidatedData 	= collect();
			$tradeshow2ValidatedData 	= collect();

			/**
			 *
			 * Counts how much people are in selected job
			 * it add's te job title to the label
			 *
			 */
			$data = $fair1Leads->map(function ($item, $key) use(&$tradeshow1RawData,&$labels)
			{
				$tradeshow1RawData->put("$key", $item->count());
				$labels->push($key);
			});

			/**
			 *
			 * Counts how much peaple are in selected job
			 * in this case if the label doesnt exist in the collection
			 * 	it creates one.
			 *
			 */

			$data = $fair2Leads->map(function ($item, $key) use(&$tradeshow2RawData,&$labels)
			{
				if (!$labels->contains($key)) {
					$labels->push($key);
				}
				$tradeshow2RawData->put("$key", $item->count());
			});

			/**
			 *
			 * Organizes the colections by the label
			 * if the job position doesnt exist in the collection its
			 * created and added a 0
			 *
			 */

			$data = $labels->map(function ($item, $key) use(&$tradeshow2RawData,$tradeshow1RawData,&$tradeshow1ValidatedData,&$tradeshow2ValidatedData)
			{
				if ($tradeshow1RawData->has($item))
				{
					$tradeshow1ValidatedData->push($tradeshow1RawData[$item]);
				}
				else
				{
					$tradeshow1ValidatedData->push(0);
				}

				if ($tradeshow2RawData->has($item))
				{
					$tradeshow2ValidatedData->push($tradeshow2RawData[$item]);
				}
				else
				{
					$tradeshow2ValidatedData->push(0);
				}
			});

			$dataFair1 = [
				'label'				=> $tradeshow1->Tradeshow->name,
				"data"				=> $tradeshow1ValidatedData,
			];

			$dataFair2 = [
				'label'				=> $tradeshow2->Tradeshow->name,
				"data"				=> $tradeshow2ValidatedData,
			];

			$data = [
				'labels'		=> $labels,
				'Fair 1'		=> $dataFair1,
				'Fair 2'		=> $dataFair2,
			];

			$graph = [
				"graph" => [
					"data"			=> $data,
					"graphId"		=> "Jobs-Graph",
					"graphName"		=> "Jobs Graph"
				]];

			return $graph;
		}
		else
		{
			return response()->json(config('messages.code500'), 500);
		}
	}


    public function client_classification(Request $request)
    {

		$leads = Lead_request::where('source_id', 8)
		->where('interested_categoryable_type',Tradeshow_tradeshow_edition::class)
		->with('interested_categoryable' ,function($q) use ($request)
		{
			$q->where('tradeshow_id', $request->fair)
				->where('tradeshow_edition_id', (is_null($request->fairsLocation) ? '!=' : '='), $request->fairsLocation)
				->where('tradeshow_times_id', (is_null($request->fairsName) ? '!=' : '='), $request->fairsName);
		})
		->where('lead_class_id', '!=', null)
		->get();


		if (!empty($leads))
        {
			$leadClass 		= Lead_class::all();
			$groupedLeads	= $leads->groupBy('lead_class_id');

			$labels = array();
			$data   = array();

			foreach ($leadClass as $class)
			{
				array_push($labels,$class->name);

				if (isset($groupedLeads[$class->id]))
				{
					array_push($data,$groupedLeads[$class->id]->count());
				}
				else
				{
					array_push($data,0);
				}

			};

			$datas = [
					"graphId"   => "leads-types-graph",
					"graphName" =>  "Leads Types",
					"data"      => [
						"label"     => "Types",
						"labels"    => $labels,
						"data"      => $data,
						]
					];
				return json_encode(["graph" => $datas]);
        }
        else
        {
            $datas = [
				"graphId"   => "leads-types-graph",
                "graphName" =>  "Leads Types",
                "data"      => [
                    "label"     => "Types",
                    "labels"    => [],
                    "data"      => [],
                    ]
                ];
            return json_encode(["graph" => $datas]);
        }
	}
}
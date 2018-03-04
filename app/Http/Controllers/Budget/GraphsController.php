<?php

namespace App\Http\Controllers\Budget;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Budget;
use App\Models\Brand;
use DateTime;

class GraphsController extends Controller
{
    public function main_graph(Request $request)
    {
        try
        {
            $budgetRaw = Budget::where("year",$request->year)->get();
            if ($budgetRaw->count()>0)
            {
                $brands = Brand::all();
                $storedData = [];
                $sumData = [];
                $data = $brands->map( function($brand) use($budgetRaw,&$storedData,&$sumData)
                {
                    $budgetSliced = $budgetRaw->where("brand_id",$brand->id);
                    $array = [];
                    $arrayValues = [];
                    $i = 0;
                    if($budgetSliced->count()>0)
                    {
                        $data = $budgetSliced->map(function($budget) use(&$storedData,$brand,&$array,&$arrayValues,&$sumData,&$i)
                        {
                            array_push($arrayValues,$budget->price);

                            if (array_key_exists($i,$sumData) == false) {
                                array_push($sumData,$budget->price);
                            }
                            else
                            {

                                $sumData[$i] = $sumData[$i] + $budget->price;
                            }
                            $i++;
                        });

                        $array =
                            [
                                "label"	=>	$brand->name,
                                "data"	=>	$arrayValues,
                            ];

                        array_push($storedData,$array);
                    }
                });

                $totalData	=	[];
                $labels= [];

                $data = $this->getIsoWeeksInYear($request->year);

                for ($i=1; $i <= $data; $i++)
                {
                    array_push($labels,$i);
                    $sumData[$i -1 ] = round($sumData[$i - 1] / $data);
                }

                $array =
                    [
                        "label"	=>	"Average Prices",
                        "data"	=>	$sumData,
                    ];
                array_unshift($storedData,$array);

                $graph = array(
                    "graph" =>
                        [
                            "labels"		=> $labels,
                            "data"			=> $storedData,
                            "graphId"		=> "budget-graph",
                            "graphName"		=> "Budget Changes Graph"
                        ]);
                return json_encode($graph);
            }
            else
            {
                $graph = array(
                    "graph" =>
                        [
                            "data"			=>	null,
                            "graphId"		=>	"budget-graph",
                            "graphName"		=>	"Budget Changes Graph"
                        ]);
                return json_encode($graph);
            }
        }
        catch (\Exception $e)
        {
            return response()->json(config('messages.code500'), 500);
        }
    }

    function getIsoWeeksInYear($year)
	{
		$date = new DateTime;
		$date->setISODate($year, 53);
		return ($date->format("W") === "53" ? 53 : 52);
	}
}

<?php

namespace App\Http\Controllers\Budget;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Budget;
use App\Services\GeoIP;
use DateTime;

class OperationsController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
    }

	public function budget_create(Request $request)
	{
		$this->validate($request, [
			"years"		=> "required",
			"budget"	=> "required",
			"brands"	=> "required",
		]);

		try
		{
			$uniqueYears = Budget::where('brands',$request->brands)
			->where('years',$request->years)
			->first();

			if ($uniqueYears->count() > 0)
			{
				return response()->json('Year '.$request->years.' Already filled', 400);
			}
			else
			{
				$data		= $this->getIsoWeeksInYear($request->years);
				$monthly	= round($request->budget / $data, 2);

				for ($i=1; $i<=$data; $i++)
				{
					$table				= new Budget;
					$table->year		= $request->years;
					$table->week		= $i;
					$table->price		= $monthly;
					$table->brand_id	= $request->brands;
					$table->save();
				}
				activity()
					->withProperties([
						'ip'      => \Request::ip(),
						'country' => $this->geoip->getCountry(),
						'region'  => $this->geoip->getRegion()
					])
					->log('Created '.$table->price.' for '.$table->brand->name.' in '.class_basename($table));

					return response()->json(config('messages.code200'), 200);
			}
		}
		catch(\Exeption $e)
		{
			return response()->json(config('messages.code500'), 500);
		}
    }

	private function getIsoWeeksInYear($year)
	{
		$date = new DateTime;
		$date->setISODate($year, 53);
		return ($date->format("W") === "53" ? 53 : 52);
	}

	public function budget_edit(Request $request)
	{
		try
		{
			if ($request->weekFrom == $request->weekTo)
			{
				$budget = Budget::where("week", $request->weekFrom)
				->where("year",$request->years)
				->where("brand_id",$request->brands)
				->first();

				$price = $this->calcBudget($request->budget, $budget->price);

				$budget->price = $price;
				$budget->save();
			}
			else
			{
				$budget = Budget::whereBetween("week", [$request->weekFrom, $request->weekTo])
				->where("year", $request->years)
				->where("brand_id", $request->brands)
				->get();

				foreach ($budget as $key => $value)
				{
					$price = $this->calcBudget($request->budget, $value->price);

					$value->price = $price;
					$value->save();
				}
			}
			activity()
					->withProperties([
						'ip'      => \Request::ip(),
						'country' => $this->geoip->getCountry(),
						'region'  => $this->geoip->getRegion()
					])
					->log('Updated '.$table->price.' for '.$table->brand->name.' in '.class_basename($table));
		}
		catch(\Exeption $e)
		{
			return response()->json(config('messages.code500'), 500);
		}

    }

    private function calcBudget($budget,$price)
	{
		if (substr($budget, 0, 1) == "+")
		{
			$price = $price + intval(substr($budget, 1, strlen($budget)));
		}
		elseif (substr($budget, 0, 1) == "-")
		{
			$price = $price - intval(substr($budget, 1, strlen($budget)));

			if ($price < 0)
			{
                $price = 0 ;
            }
		}
		elseif (is_numeric(substr($budget, 0, 1)))
		{
			$price = intval($budget);
		}
		else
		{
			return response()->json(config('messages.code500'), 500);
		}
		return $price;
    }


}

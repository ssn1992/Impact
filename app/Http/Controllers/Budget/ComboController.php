<?php

namespace App\Http\Controllers\Budget;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Budget;

class ComboController extends Controller
{
	public function price(Request $request)
	{
		$budget = Budget::where("year",$request->year)
		->where("week",$request->week)
		->where("brand_id",$request->brand)
		->first()->price;

		if ($budget != "")
		{
            return json_encode(['budgetWeek' => $budget]);
		}
		else
		{
			return response()->json(config('messages.code500'), 500);
		}
    }

    public function get_current_years()
    {
		$uniqueYears = Budget::select("year")
		->groupBy('year')
		->get();

		$data = $uniqueYears->map( function($year)
		{
            return $year->year;
        });

        return json_encode(["years"=> ['data' => $data]]);
    }
}

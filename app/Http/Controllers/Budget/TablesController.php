<?php

namespace App\Http\Controllers\Budget;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Budget;

class TablesController extends Controller
{
    public function budget_table(Request $request)
    {

        $budgetRaw = Budget::with("brand")
        ->where("year",$request->year)
        ->get();

        if ($budgetRaw->count() > 0)
        {
            $data = $budgetRaw->map(function ($budget)
            {
                return [
                    "Date"      => $budget->created_at->toDateTimeString(),
                    "Brand"     => $budget->brand->name,
                    'Week'      => $budget->week,
                    'Price'     => $budget->price,
                ];
            });
            return response()->json(["table" => [
                'tableId'   => 'totalLeads',
                'tableName' => "Budget",
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }
        else
        {
            return response()->json(["table" => [
                'tableId'   => 'totalLeads',
                'tableName' =>'Budget',
                'columns'   => null,
                'data'      => null
                ]
            ]);
        }
    }



}

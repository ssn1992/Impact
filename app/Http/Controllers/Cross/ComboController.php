<?php

namespace App\Http\Controllers\Cross;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Network_lead_state;
use App\Models\Brand_access;
use Auth;


class ComboController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function status_list()
	{
        $allStates = Network_lead_state::all();
        $data = collect();

        foreach ($allStates as $key => $value)
        {
            $data->push([
                "value" => $value->id,
                "label" => $value->name
                ]);
        }

		return json_encode(['status' => ['data' => $data]]);
    }


    public function access_list()
	{
        $data = Brand_access::with('brand')
        ->where('brand_id', Auth::User()->brand_id)
        ->get();

        $Brands = collect();

        $Brands = $data->map(function ($brand)
        {
            return [
                "value" => $brand->brand->id,
                "label" => $brand->brand->name
                ];
        });

        $Brands->prepend([
            "value"     =>  null,
            "label"     =>  "AllBrands"
        ]);

		return json_encode(['status' => ['data' => $Brands]]);
    }
}
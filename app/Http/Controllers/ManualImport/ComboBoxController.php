<?php

namespace App\Http\Controllers\ManualImport;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lead_mkt_type;
use App\Models\Lead_role;
use Carbon\carbon;

class ComboBoxController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
    }

    public function mkt_type(Request $request)
    {

        $AllMKT_type = Lead_mkt_type::all();

        $data = $AllMKT_type->map(function ($mkt)
		{
			return [
                "value"=>$mkt->id,
                "label"=>$mkt->name,
			];
        });

		if ($data->count()<1)
		{
            $data[] = [
				"value" => null,
				"label"	=> "No Records"
			];
		}

    	return json_encode(['mkt_type' => ['data' => $data]]);
    }

    public function lead_role(Request $request)
    {

        $lead_role = Lead_role::all();

        $data = $lead_role->map(function ($mkt)
		{
			return [
                "value"=>$mkt->id,
                "label"=>$mkt->name,
			];
        });

		if ($data->count()<1)
		{
            $data[] = [
				"value" => null,
				"label"	=> "No Records"
			];
		}

    	return json_encode(['lead_role' => ['data' => $data]]);
    }
}
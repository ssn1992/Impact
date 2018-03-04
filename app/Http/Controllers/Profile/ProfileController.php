<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        try
        {
            $leadInfo = Lead::with('lead_request','lead_detail','company')
                ->where("id",$request->id)
                ->first();

            $leadDetails = [

            ];

            return json_encode(['lead' => ['data' => $leadDetails]]);
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
    }

    public function edit()
    {

    }

    public function update()
    {

    }

}
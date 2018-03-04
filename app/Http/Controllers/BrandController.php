<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;
use Auth;
class BrandController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function brands()
    {
        $role       = Auth::user()->getRoleNames()->first();
        $brands     = [];
        $brandsAll  = Brand::where('id', '!=', Auth::user()->brand_id )->get();

        if ($role == 'Admin' || $role == 'Accounter')
        {
            $brands[0] = array("value" => null, "label" => "All Brands");
        }
        else
        {
            $brands[0] = array("value" => Auth::user()->brand_id, "label" => Auth::user()->brand->name);
        }

            foreach ($brandsAll as $key => $value)
            {
                array_push($brands, [
                    "value" => $value->id,
                    "label" => $value->name
                ]);
            }

        return response()->json(['brands' => ['data' => $brands]]);
    }

    public function brands_only()
    {

        $role       = Auth::user()->getRoleNames()->first();
        $brands     = [];
        $brandsAll  = Brand::where('id', '!=', Auth::user()->brand_id)->get();
        $brands[0] = array("value" => Auth::user()->brand_id, "label"=>Auth::user()->brand->name);


            foreach ($brandsAll as $key => $value)
            {
                array_push($brands, [
                    "value" => $value->id,
                    "label" => $value->name
                ]);
            }

        return response()->json(['brands' => ['data' => $brands]]);
    }
}

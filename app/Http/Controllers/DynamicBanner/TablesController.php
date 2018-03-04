<?php

namespace App\Http\Controllers\DynamicBanner;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Dinamic_banner_image;
use App\Models\Dinamic_banner_clicks;
use App\Models\Dinamic_banner_category;
use App\Models\Brand;

use Auth;


class TablesController extends Controller
{
    /**
     * Gets All Dynamic Banners information
     * @param Request
     * @return Json
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function table(Request $request)
    {
        try
        {

            $imagesRaw  = Dinamic_banner_image::all();
            $categories = Dinamic_banner_category::all();

            if ($imagesRaw->count() > 0)
            {

                $imageData = $imagesRaw->map(function($image)
                {
                    $clicks = 0;
                    foreach ($image->dinamic_banner_click as $key => $clickSum)
                    {
                        $clicks = $clicks + $clickSum->clicks;
                    }

                    $details = $image;
                    $details['keywords_ids']    = json_decode($image->keyword);
                    $details['cat_ids']         = json_decode($image->category);

                    return
                    [
                        "id"            =>  $image->id,
                        'Date'          =>  $image->created_at->toDateTimeString(),
                        //"Brand"         =>  $image->brand->name,
                        "Brand"         =>  Brand::where('id', $image->brand_id)->first()->name,
                        "Name"          =>  $image->name,
                        "keywords"      =>  json_decode($image->keyword),
                        "clicks"        =>  $clicks,
                        "category"      =>  Dinamic_banner_category::whereIn('id', json_decode($image->category))->get(),
                        "url_redirect"  =>  $image->url_redirect,
                        "image"         =>  $image->link_image,
                        "Actions"       =>  $details
                    ];
                });

                return response()->json(["table" => [
                    'tableId'   => 'totalBanners',
                    'tableName' => 'Banners',
                    'columns'   => array_keys($imageData->first()),
                    'data'      => $imageData
                ]]);
            }

            return response()->json(["table" => [
                'tableId'   => 'totalBanners',
                'tableName' =>'Banners',
                'columns'   => null,
                'data'      => null
            ]]);

        }
        catch (\Exeption $e)
        {
            return response()->json($e, 500);
        }
    }
}

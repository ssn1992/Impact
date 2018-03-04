<?php

namespace App\Http\Controllers\DynamicBanner;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Dinamic_banner_image;
use App\Models\Dinamic_banner_clicks;
use App\Models\Dinamic_banner_category;
use Illuminate\Support\Facades\Validator;


class OperationsController extends Controller
{
	public function data_sender(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'token' => 'required|exists:lead_token_brands,token',
		]);

		if($validator->passes())
		{
			$imagesRaw = Dinamic_banner_image::all();
			$imageData = $imagesRaw->map(function($image){
				return[
					"id"			=>$image->id,
					"keyword"		=>$image->keyword,
					"linkImage"		=>$image->link_image,
					"urlRedirect"	=>$image->url_redirect,
					"category"		=>$image->category,
				];
			});
			
			$categoryRaw  = Dinamic_banner_category::all();
			$categoryData = $categoryRaw->map(function($category){
				return[
					"id"			=>	$category->id,
					"name"			=>	$category->name,
				];
			});
			
			$data = [
				"imageData"			=>	$imageData,
				"categoryData"		=>	$categoryData,
			];

			return json_encode($data);
		}
		else
		{
			return json_encode("ErrorTokenMissing");
		}
	}




	public function data_receiver(Request $request)
	{
		$validator = Validator::make($request->all(), [
			'token' => 'required|exists:lead_token_brands,token',
		]);
		if($validator->passes())
		{
			if (isset($request->click)) {

				$impactClicks = Dinamic_banner_clicks::all();
				
				foreach ($request->click as $key => $value) 
				{
					$temp = $impactClicks->where("date",$value['date'])->where("dinamic_banner_image_id",$value["banner_dinamico_id"])->first();
					
					if (is_null($temp)) 
					{
						$table = new Dinamic_banner_clicks;
						$table->dinamic_banner_image_id	=	$value["banner_dinamico_id"];
						$table->clicks					=	$value["clicks"];
						$table->placements				=	$value["placements"];
						$table->date					=	$value["date"];
						$table->save();
					}
					else
					{
						$temp->clicks					=	$value["clicks"];
						$temp->placements				=	$value["placements"];
						$temp->save();
					}
				}
				return "success";
			}
			return "NoItensAdded";
		}
		else
		{
			return "ErrorTokenMissing";
		}
	}

    public function categoriesList()
    {
        $categories = Dinamic_banner_category::all();

        $data = $categories->map(function ($cat)
        {
            return
                [
                    'value' => $cat->id,
                    'label' => $cat->name,
                ];
        });

        return json_encode(['cat' => ['data' => $data]]);
    }

    public function store (Request $request)
    {
        try
        {
            $this->validate($request, [
                "url"          => "required",
                "brand"        => "required",
                "cat"          => "required",
                "name"         => "required",
                "imageLink"    => "required",
                "keywords"     => "required",
            ]);

            $banner = new Dinamic_banner_image;

            $banner->url_redirect = $request->url;
            $banner->brand_id     = $request->brand;
            $banner->name         = $request->name;
            $banner->category     = json_encode($request->cat);
            $banner->link_image   = $request->imageLink;
            $banner->keyword      = json_encode($request->keywords);
            $banner->save();

            return response()->json(config('messages.code200'), 200);
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
    }

    public function update (Request $request)
    {
        try
        {
            $this->validate($request, [
                "url"          => "required",
                "brand"        => "required",
                "name"         => "required",
                "cat"          => "required",
                "imageLink"    => "required",
                "keywords"     => "required",
            ]);

            $banner = Dinamic_banner_image::findOrFail($request->id);

            $banner->url_redirect = $request->url;
            $banner->brand_id     = $request->brand;
            $banner->name         = $request->name;
            $banner->category     = json_encode($request->cat);
            $banner->link_image   = $request->imageLink;
            $banner->keyword      = json_encode($request->keywords);
            $banner->save();

            return response()->json(config('messages.code200'), 200);
        }
        catch (\Exception $e)
        {
            return response()->json($e, 500);
        }
    }

    public function delete(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"   => "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Dinamic_banner_image::find($request->id)->delete();
                $table = Dinamic_banner_clicks::where('dinamic_banner_image_id', $request->id)->delete();

                return response()->json(config('messages.code200'), 200);
            }
            catch (\Exception $e)
            {
                return response()->json($e, 500);
            }
        }
        else
        {
            $errorMessage = array();
            foreach ($validator->errors()->getMessages() as $key => $value)
            {
                $errorMessage[$key] = current($value);
            }

            return response()->json($errorMessage, 400);
        }
    }

    public function graphTopClicks ()
    {

        $clicks = array();

        $labels = array();

        // Get top 3 banners clicks
        $banners = Dinamic_banner_clicks::with('dinamic_banner_image')
                                          ->orderBy('clicks', 'DESC')
                                          ->take(5)
                                          ->get();

        foreach ($banners as $banner)
        {
            array_push($clicks,$banner->clicks);
            array_push($labels, $banner->dinamic_banner_image->name);
        }

        $graph = array(
            "graph" => [
                "graphId"   => "top-banners-clicks-graph",
                "graphName" => "Top Clicked Banners",
                "data"      => [
                    "label"     => "Top Clicked Banners",
                    "labels"    => $labels,
                    "data"      => $clicks,
                ]
            ]
        );

        return response()->json($graph);
    }
}

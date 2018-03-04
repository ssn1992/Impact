<?php

namespace App\Http\Controllers;
use App\Models\Brand_access;
use App\Models\Brand;
use App\Models\Cross;
use App\Models\Cross_type;
use App\Models\Social_network;
use App\Models\Social_network_category;
use Illuminate\Http\Request;
use App\Models\Source;
use App\Models\Lead_type;
use App\Models\Advertising;
use App\Models\Email;
use App\Models\Partner_brand;
use App\Models\Direct_contact;
use App\Models\MoodBoard;
use App\Models\Trend;
use App\Models\Platforms;
use App\Models\Showroom;
use App\Models\Tradeshow_category;
use App\Models\Social_network_type;
use App\Models\SocialNetwork_subType;
use App\Models\Tradeshow;
use App\Models\Tradeshow_edition;
use App\Models\Tradeshow_time;
use App\Models\Phone;
use App\Models\Occupation;
use App\Models\Blog;
use App\Models\Blog_category;
use App\Models\Level;
use App\Models\Ebook;
use App\Models\Ebook_category;
use Auth;

class ComboBoxController extends Controller
{
    public function source()
    {
        $rawData = Source::whereNotIn('id', [1, 3])->get();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });

        return json_encode(['sources' => ['data' => $data]]);
    }

    public function lead_type()
    {
        $rawData = Lead_type::where('id', '!=', 2)->get();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['leadTypes' => ['data' => $data]]);
    }

    public function source_category(Request $request)
    {
        $rawData = collect();

        switch ($request->id)
        {
            case 2:
                $rawData = Advertising::all();
                break;

            case 4:
                $rawData = Email::all();
                break;

            case 6:
                $rawData = Social_network_category::all();
                break;

            case 7:
                $rawData = Partner_brand::all();
                break;

            case 8:
                $rawData = Tradeshow_category::all();
                break;

            case 9:
                $rawData = Direct_contact::all();
                break;

            case 11:
                $rawData = Cross_type::all();
                break;

            case 5:
                $rawData = Platforms::all();
                break;

            case 10:
                $rawData = Showroom::all();
                break;
        }

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });

        return json_encode(['sourceTypes' => ['data' => $data]]);
    }

    public function source_types(Request $request)
    {
        switch ($request->id)
        {
            case 6:
                $rawData = Social_network::all();
                break;
            case 8:
                 $rawData = Tradeshow::all();
                break;
            case 9:
                $rawData = Phone::all();
                break;
            case 10:
                $rawData = Brand::all();
                break;
        }

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });

        return json_encode(['type' => ['data' => $data]]);
    }

    public function source_sub_types(Request $request)
    {
        switch ($request->id)
        {
            case 6:
                $rawData = SocialNetwork_subType::all();
                break;
        }

        $data = $rawData->map(function ($value) {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });

        return json_encode(['subType' => ['data' => $data]]);
    }

    public function tradeshow_cat()
    {
        $rawData = Tradeshow_category::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });

        return json_encode(['tradeshowCat' => ['data' => $data]]);
    }

    public function phone()
    {
        $rawData = Phone::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['phone' => ['data' => $data]]);
    }

    public function industry()
    {
        $rawData = Occupation::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['industry' => ['data' => $data]]);
    }

    public function blog_list()
    {
        $rawData = Blog::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->id,
                'label'  =>  $value->name,
            ];
        });

        return json_encode(['blogs' => ['data' => $data]]);
    }

    public function blog_category_list()
    {
        $rawData = Blog_category::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->id,
                'label'  =>  $value->name,
            ];
        });

        return json_encode(['blogCategory' => ['data' => $data]]);
    }

    public function level_list()
    {
        $rawData = Level::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->id,
                'label'  =>  $value->name,
            ];
        });

        return json_encode(['level' => ['data' => $data]]);
    }

    public function ebooks_list()
    {
        $rawData = Ebook::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->id,
                'label'  =>  $value->name,
            ];
        });

        return json_encode(['blogsCategory' => ['data' => $data]]);
    }

    public function ebook_categories_list()
    {
        $rawData = Ebook_category::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->id,
                'label'  =>  $value->name,
            ];
        });

        return json_encode(['ebookCategory' => ['data' => $data]]);
    }

    public function brand_access_list()
    {
        $userBrand =  Auth::user()->brand_id;

        $rawData = Brand_access::where("brand_id", $userBrand)->get();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'  =>  $value->brand_access_model->id,
                'label'  =>  $value->brand_access_model->name,
            ];
        });

        return json_encode(['brandAccess' => ['data' => $data]]);
    }

    public function tradeshows()
    {
        $rawData = Tradeshow::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['tradeshows' => ['data' => $data]]);
    }

    public function tradeshow_editions()
    {
        $rawData = Tradeshow_edition::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['tradeshows' => ['data' => $data]]);
    }

    public function tradeshow_times()
    {
        $rawData = Tradeshow_time::all();

        $data = $rawData->map(function ($value)
        {
            return [
                'value'    =>  $value->id,
                'label'    =>  $value->name,
            ];
        });
        return json_encode(['tradeshows' => ['data' => $data]]);
    }
}

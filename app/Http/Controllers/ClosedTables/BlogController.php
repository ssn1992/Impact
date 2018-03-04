<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Blog;
use App\Models\Blog_category;
use App\Services\GeoIP;

class BlogController extends Controller
{
    protected $geoip;
    /** 
     * Create the event listener. 
     * 
     * @return void 
     */ 
    public function __construct() 
    { 
        $this->middleware('auth');
        $this->geoip = resolve(GeoIP::class);
        $this->geoip->setIP(\Request::ip());
    } 

    public function blog_create(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            "name"          =>  "required",
            "brand"         =>  "required|integer",
            "blogCategory"  =>  "required|integer",
            "level"         =>  "required|integer"
        ]);

        if($validator->passes())
        {
            try
            {
                $table                      = new Blog;
                $table->name                = $request->name;
                $table->brand_id            = $request->brand;
                $table->blog_category_id    = $request->blogCategory;
                $table->level_id            = $request->level;
                $table->save();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Added '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);
            }
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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

    public function blog_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"            =>  "required",
            "name"          =>  "required",
            "brand"         =>  "required|integer",
            "blogCategory"  =>  "required|integer",
            "level"         =>  "required|integer"
        ]);
    
        if ($validator->passes()) {
            try
            {
                $table                      = Blog::find($request->id);
                $table->name                = $request->name;
                $table->brand_id            = $request->brand;
                $table->blog_category_id    = $request->blogCategory;
                $table->level_id            = $request->level;
                $table->save();
                
                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Updated '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);
            } 
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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

    public function blog_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);
    
        if ($validator->passes()) {

            try {
                $table = Blog::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);

            } 
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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

    public function blog_category_create(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            "name"      =>      "required",
        ]);

        if($validator->passes())
        {
            try 
            {
                $table          = new Blog_category;
                $table->name    = $request->name;
                $table->save();
                
                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Added '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);
            }
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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

    public function blog_category_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);
    
        if ($validator->passes())
        {
            try
            {
                $table          = Blog_category::find($request->id);
                $table->name    = $request->name;
                $table->save();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Updated '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);
            }
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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


    public function blog_category_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>      "required",
        ]);
    
        if ($validator->passes())
        {
            try
            {
                $table = Blog_category::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$table->name.' in '.class_basename($table));

                return response()->json(config('messages.code200'), 200);

            } 
            catch (\Exception $e)
            {
                return response()->json(config('messages.code500'), 500);
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
    //*************************************************************
    //******************** Blog Table *****************************
    //*************************************************************
    public function blog_table()
    {
        $rawData = Blog::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'             =>  $value->id,
                    'name'           =>  $value->name,
                    'brand'          =>  $value->brand->name,
                    'blog category'  => $value->blog_category->name,
                    'created_at'     =>  $value->created_at->toDateTimeString(),
                    'updated_at'     =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-blog',
                'tableName' => 'Table Blog',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-blog',
            'tableName' => 'Table Blog',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function blog_category_table()
    {
        $rawData = Blog_category::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'         =>  $value->id,
                    'name'       =>  $value->name,
                    'created_at' =>  $value->created_at->toDateTimeString(),
                    'updated_at' =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-blog-category',
                'tableName' => 'Table Blog Category',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-blog',
            'tableName' => 'Table Blog Category',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}

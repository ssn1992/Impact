<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Brand_access;
Use App\Models\Brand;
use App\Models\Lead_token_brand;
use App\Services\GeoIP;
class BrandsController extends Controller
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

    public function brand_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"            => "required",
            "abbr"            => "required",
            "nameSalesforce"  => "required",
        ]);

        if($validator->passes())
        {
            try
            {
                $table                  = new Brand;
                $table->name            = $request->name;
                $table->abbr            = $request->abbr;
                $table->name_salesforce = $request->nameSalesforce;
                $table->save();

                $token                  = new Lead_token_brand;
                $token->token           = str_random(32);
                $token->brand_id        = $table->id;
                $token->save();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Added '.$table->name.' in '.class_basename($table));

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Added '.$token->name.' in '.class_basename($token));

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
        
    public function brand_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"                =>  "required",
            "name"              =>  "required",
            "abbr"              =>  "required",
            "nameSalesforce"    =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = Brand::find($request->id);
                $table->name            = $request->name;
                $table->abbr            = $request->abbr;
                $table->name_salesforce = $request->nameSalesforce;
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

    public function brand_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>      "required",
        ]);

        if ($validator->passes())
        {
            try 
            {
                $table = Brand::find($request->id);
                $table->delete();
                
                $token = Lead_token_brand::where("brand_id",$request->id)->get();
                $token->delete();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$table->name.' in '.class_basename($table)); 

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$token->name.' in '.class_basename($token));

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

    public function brand_access_create(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            "brands"        =>"required",
            "brandsAccess"  =>"required",
        ]);

        if($validator->passes())
        {
            try
            {
                $table                  = new Brand_access;
                $table->brand_id        = $request->brands;
                $table->brand_access    = $request->brandsAccess;
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

    public function brand_access_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"              =>  "required",
            "name"            =>  "required",
            "abbr"            =>  "required",
            "nameSalesforce"  =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = Brand::find($request->id);
                $table->name            = $request->name;
                $table->abbr            = $request->abbr;
                $table->name_salesforce = $request->nameSalesforce;
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

    public function brand_access_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Brand_access::find($request->id);
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

    public function brand_table()
    {
        try {

            $rawData = Brand::all();

            if ($rawData->count() > 0) {

                $data = $rawData->map(function ($value) {
                    return [
                        'id'              => $value->id,
                        'name'            => $value->name,
                        'name_salesforce' => $value->name_salesforce,
                        'token'           => (isset($value->token->token)) ? $value->token->token : "" ,
                        'created_at'      => $value->created_at->toDateTimeString(),
                        'updated_at'      => $value->updated_at->toDateTimeString(),
                    ];
                });

                return response()->json(["table" => [
                    'tableId'   => 'table-brands',
                    'tableName' => 'Table Brands',
                    'columns'   => array_keys($data->first()),
                    'data'      => $data
                    ]
                ]);
            }

            return response()->json(["table" => [
                'tableId'   => 'table-brands',
                'tableName' => 'Table Brands',
                'columns'   => null,
                'data'      => null
                ]
            ]);

        } catch (\Exception $e) {
            return $e;
        }
    }

    public function brand_access_table()
    {
        $rawData = Brand_access::with("brand", "brand_access_model")->get();

        if ($rawData->count() > 0)
        {
            $data = $rawData->map(function ($value)
            {
                return [
                    'id'              =>  $value->id,
                    'brand'           =>  $value->brand->name,
                    'brand_access'    =>  $value->brand_access_model->name,
                    'created_at'      =>  $value->created_at,
                    'updated_at'      =>  $value->updated_at,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-brands-access',
                'tableName' => 'Table Brands Access',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-brands-access',
            'tableName' => 'Table Brands Access',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}
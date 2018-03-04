<?php

namespace App\Http\Controllers\ClosedTables;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Social_network;
use App\Models\Social_network_category;
use App\Http\Controllers\Controller;
use App\Services\GeoIP;

class SocialNetworkController extends Controller
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
    
    public function social_network_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  => "required",
            "level" => "required"
        ]);
         
        if($validator->passes())
        {
            try
            {
                $table              = new Social_network;
                $table->name        = $request->name;
                $table->level_id    = $request->level;
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

    public function social_network_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        => "required",
            "name"      => "required",
            "level"     => "required"
        ]);

        if ($validator->passes())
        {
            try
            {
                $table              = Social_network::find($request->id);
                $table->name        = $request->name;
                $table->level_id    = $request->level;
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

    public function social_network_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);

        if ($validator->passes())
        {

            try
            {
                $table = Social_network::find($request->id);
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

    public function social_network_categories_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Social_network_category;
                $table->name    = $request->name;
                $table->save();

                activity() 
                ->withProperties([ 
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
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

    public function social_network_categories_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table =   Social_network_category::find($request->id);
                $table->name              = $request->name;
                $table->save();

                activity()
                ->withProperties([
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
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
    
    public function social_network_category_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {

            try
            {
                $table = Social_network_category::find($request->id);
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

    public function social_network_table()
    {
        $rawData = Social_network::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'         =>  $value->id,
                    'name'       =>  $value->name,
                    'level'      =>  $value->Social_network_level->name,
                    'created_at' =>  $value->created_at->toDateTimeString(),
                    'updated_at' =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-social-network',
                'tableName' => 'Table Social Network',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-social-network',
            'tableName' => 'Table Social Network',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function social_network_category_table()
    {
        $rawData = Social_network_category::all();

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
                'tableId'   => 'table-social-network-category',
                'tableName' => 'Table Social Network Category',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-social-network-category',
            'tableName' => 'Table Social Network Category',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}

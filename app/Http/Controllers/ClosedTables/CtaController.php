<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Cta;
use App\Models\Cta_color;
use App\Services\GeoIP;

class CtaController extends Controller
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




    /**
     * ------------------------- CTA 
     */
    public function cta_create(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Cta;
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

    public function cta_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"                =>  "required",
            "name"              =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Cta::find($request->id);
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

    public function cta_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);

        if ($validator->passes()) 
        {
            try
            {
                $table = Cta::find($request->id);
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

    public function cta_table()
    {
        $rawData = Cta::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'              =>  $value->id,
                    'name'            =>  $value->name,
                    'created_at'      =>  $value->created_at->toDateTimeString(),
                    'updated_at'      =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-cta',
                'tableName' => 'Table cta',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-cta',
            'tableName' => 'Table cta',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }



    /**
     * -----------------------CTA Color
     */
    public function cta_color_create(Request $request)
    {        
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Cta_color;
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

    public function cta_color_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"                =>  "required",
            "name"              =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Cta_color::find($request->id);
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

    public function cta_color_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);

        if ($validator->passes()) 
        {
            try
            {
                $table = Cta_color::find($request->id);
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

    public function cta_color_table()
    {
        $rawData = Cta_color::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'              =>  $value->id,
                    'name'            =>  $value->name,
                    'created_at'      =>  $value->created_at->toDateTimeString(),
                    'updated_at'      =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-cta-color',
                'tableName' => 'Table Cta Color',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-cta-color',
            'tableName' => 'Table Cta Color',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}

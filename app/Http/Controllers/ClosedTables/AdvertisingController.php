<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Advertising;
use App\Services\GeoIP;

class AdvertisingController extends Controller
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

    public function advertising_create(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "name"      =>      "required",
        ]);
    
        if ($validator->passes())
        {
            try 
            { 
                $table                  = new Advertising;
                $table->name            = $request->name;
                $table->name_salesforce = $request->nameSalesforce;
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

    public function advertising_edit(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "id"    => "required",
            "name"  => "required",
        ]);
    
        if ($validator->passes())
        {
            try 
            {

                $table = Advertising::find($request->id);
                $table->name            = $request->name;
                $table->name_salesforce = $request->nameSalesforce;
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

    public function advertising_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);
        if ($validator->passes())
        {
            try
            {
                $table = Advertising::find($request->id);
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
    
    public function advertising_table()
    {
        $rawData = Advertising::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'              => $value->id,
                    'name'            => $value->name,
                    'name_salesforce' => $value->name_salesforce,
                    'created_at'      => $value->created_at->toDateTimeString(),
                    'updated_at'      => $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-advertising',
                'tableName' => 'Table Advertising',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-advertising',
            'tableName' => 'Table Advertising',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

}
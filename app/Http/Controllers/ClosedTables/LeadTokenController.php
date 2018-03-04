<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Lead_token_brand;
use App\Services\GeoIP;
use Mockery\Exception;

class LeadTokenController extends Controller
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

    public function lead_token_brand_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "tokenLead" =>"required",
            "brand"     =>"required"
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table              = new Lead_token_brand;
                $table->token       = $request->tokenLead;
                $table->brand_id    = $request->brand;
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

    public function lead_token_brand_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"            =>  "required",
            "tokenLead"     =>  "required",
            "brand"         =>  "required"
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Lead_token_brand::find($request->id);
                $table->name    = $request->name;
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

    public function lead_token_brand_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {

            try
            {
                $table = Lead_token_brand::find($request->id);
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

    public function lead_token_brand_table()
    {
        try {
            $rawData = Lead_token_brand::all();

            if ($rawData->count() > 0) {

                $data = $rawData->map(function ($value) {
                    return [
                        'id' => $value->id,
                        'token' => $value->token,
                        'brand' => (isset($value->brand->name)) ? $value->brand->name : "" ,
                        'created_at' => $value->created_at->toDateTimeString(),
                        'updated_at' => $value->updated_at->toDateTimeString(),
                    ];
                });

                return response()->json(["table" => [
                    'tableId' => 'lead-token-table',
                    'tableName' => 'Lead Token',
                    'columns' => array_keys($data->first()),
                    'data' => $data
                ]
                ]);
            }

            return response()->json(["table" => [
                'tableId' => 'lead-token-table',
                'tableName' => 'Lead Token',
                'columns' => null,
                'data' => null
            ]
            ]);

        } catch (\Exception $e) {
            return $e;
        }
    }
}

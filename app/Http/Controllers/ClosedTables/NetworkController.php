<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Network;
use App\Models\Network_category;
use App\Models\Network_lead_state;
use App\Services\GeoIP;

class NetworkController extends Controller
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

    public function network_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"     => "required",
            "level_id" => "required"
        ]);

        if($validator->passes())
        {
            try
            {
                $table              = new Network;
                $table->name        = $request->name;
                $table->level_id    = $request->level_id;
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

    public function network_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
            "level_id"  =>  "required"
        ]);

        if ($validator->passes())
        {
            try
            {
                $table              = Network::find($request->id);
                $table->name        = $request->name;
                $table->level_id    = $request->level_id;
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

    public function network_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {

            try
            {
                $table = Network_lead_state::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
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

    public function network_lead_state_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Network_lead_state;
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

    public function network_lead_state_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Network::find($request->id);
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

    public function network_lead_state_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Network_lead_state::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
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

    public function network_category_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Network_category;
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
    
    public function network_category_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Network::find($request->id);
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

    public function network_category_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {

            try
            {
                $table = Network_lead_state::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
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
    

    public function network_table()
    {
        $rawData = Network::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'    =>  $value->id,
                    'name'  =>  $value->name,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'totalLeads-table-uniques',
                'tableName' => 'Total Leads Uniques',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'totalLeads-table-uniques',
            'tableName' =>'Total Leads Uniques',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function network_lead_state_table()
    {
        $rawData = Network_lead_state::all();

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
                'tableId'   => 'table-network-lead-state',
                'tableName' => 'Table Network Lead State',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-network-lead-state',
            'tableName' => 'Table Network Lead State',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function network_category_table()
    {
        $rawData = Network_category::all();

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
                'tableId'   => 'table-network-category',
                'tableName' => 'Table Category',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-network-category',
            'tableName' => 'Table Category',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}

<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use App\Models\Tradeshow_time;
use App\Models\Tradeshow_tradeshow_edition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Tradeshow;
use App\Models\Tradeshow_edition;
use App\Services\GeoIP;

class TradeshowController extends Controller
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
            $this->geoip=resolve(GeoIP::class);
            $this->geoip->setIP(\Request::ip());
        } 

        public function tradeshow_create(Request $request)
        {        

            $validator = Validator::make($request->all(), [
                "name"      =>      "required",
            ]);
        
            if ($validator->passes())
            {
                try
                {
                    $table                  = new Tradeshow;
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

        public function tradeshow_edit(Request $request)
        {        

            $validator = Validator::make($request->all(), [
                "id"    =>  "required",
                "name"  =>  "required",
            ]);
        
            if ($validator->passes())
            {
                try
                {
                    $table                  = Tradeshow::find($request->id);
                    $table->name            = $request->name;
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

        public function tradeshow_delete(Request $request)
        {
            $validator = Validator::make($request->all(), [
                "id"    =>  "required",
            ]);
        
            if ($validator->passes())
            {
                try
                {
                    $table = Tradeshow::find($request->id);
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

        public function tradeshow_table()
        {
            $rawData = Tradeshow::all();

            if ($rawData->count() > 0)
            {

                $data = $rawData->map(function ($value)
                {
                    return [
                        'id'                =>  $value->id,
                        'name'              =>  $value->name,
                        'name_salesforce'   =>  $value->name_salesforce,
                        'created_at'        =>  $value->created_at->toDateTimeString(),
                        'updated_at'        =>  $value->updated_at->toDateTimeString(),
                    ];
                });

                return response()->json(["table" => [
                    'tableId'   => 'table-tradeshow',
                    'tableName' => 'Table Tradeshow',
                    'columns'   => array_keys($data->first()),
                    'data'      => $data
                    ]
                ]);
            }

            return response()->json(["table" => [
                'tableId'   => 'table-tradeshow',
                'tableName' => 'Table Tradeshow',
                'columns'   => null,
                'data'      => null
                ]
            ]);
        }




    /*****************************
     * Tradeshow edition
     */

    public function tradeshow_edition_create(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "name"      =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = new Tradeshow_edition;
                $table->name            = $request->name;
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

    public function tradeshow_edition_edit(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
            "name"  =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = Tradeshow_edition::find($request->id);
                $table->name            = $request->name;
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

    public function tradeshow_edition_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Tradeshow_edition::find($request->id);
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

    public function tradeshow_edition_table()
    {
        $rawData = Tradeshow_edition::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'                =>  $value->id,
                    'name'              =>  $value->name,
                    'created_at'        =>  $value->created_at->toDateTimeString(),
                    'updated_at'        =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-tradeshow-edition',
                'tableName' => 'Table Tradeshow Edition',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-tradeshow-edition',
            'tableName' => 'Table Tradeshow Edition',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }


    /*****************************
     * Tradeshow Time
     */

    public function tradeshow_time_create(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "name"      =>      "required",
            "dateFrom"  =>      "required",
            "dateTo"    =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = new Tradeshow_time;
                $table->name            = $request->name;
                $table->dateTo          = $request->dateTo;
                $table->dateFrom        = $request->dateFrom;
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

    public function tradeshow_time_edit(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
            "name"      =>      "required",
            "dateFrom"  =>      "required",
            "dateTo"    =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                  = Tradeshow_time::find($request->id);
                $table->name            = $request->name;
                $table->dateTo          = $request->dateTo;
                $table->dateFrom        = $request->dateFrom;
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

    public function tradeshow_time_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Tradeshow_time::find($request->id);
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

    public function tradeshow_time_table()
    {
        $rawData = Tradeshow_time::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'                =>  $value->id,
                    'name'              =>  $value->name,
                    'dateTo'            =>  $value->dateTo,
                    'dateFrom'          =>  $value->dateFrom,
                    'created_at'        =>  $value->created_at->toDateTimeString(),
                    'updated_at'        =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-tradeshow-time',
                'tableName' => 'Table Tradeshow Time',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-tradeshow-time',
            'tableName' => 'Table Tradeshow Time',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }




    /*****************************
     * Tradeshow Join's
     */

    public function tradeshow_tradeshow_edition_create(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                "tradeshow" => "required|exists:tradeshows,id",
                "tradeshowEdition" => "required|exists:tradeshow_editions,id",
                "tradeshowTime" => "required|exists:tradeshow_times,id",
                "active" => "required",
            ]);

            if ($validator->passes()) {
                try {
                    $table = new Tradeshow_tradeshow_edition;
                    $table->tradeshow_id = $request->tradeshow;
                    $table->tradeshow_edition_id = $request->tradeshowEdition;
                    $table->tradeshow_time_id = $request->tradeshowTime;
                    $table->active = $request->active;
                    $table->save();

                    activity()
                        ->withProperties([
                            'ip' => \Request::ip(),
                            'country' => $this->geoip->getCountry(),
                            'region' => $this->geoip->getRegion()
                        ])
                        ->log('Added ' . $table->name . ' in ' . class_basename($table));

                    return response()->json(config('messages.code200'), 200);
                } catch (\Exception $e) {
                    return $e;
                    return response()->json(config('messages.code500'), 500);
                }
            } else {
                $errorMessage = array();
                foreach ($validator->errors()->getMessages() as $key => $value) {
                    $errorMessage[$key] = current($value);
                }

                return response()->json($errorMessage, 400);
            }
        } catch (\Exception $e) {
            return $e;
        }
    }

    public function tradeshow_tradeshow_edition_edit(Request $request)
    {        

        $validator = Validator::make($request->all(), [
            "id"                    => "required",
            "tradeshowId"           => "required|exists:tradeshows,id",
            "tradeshowEditionId"    => "required|exists:tradeshow_editions,id",
            "tradeshowTimesId"      => "required|exists:tradeshow_times,id",
            "active"                => "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table                          = Tradeshow_tradeshow_edition::find($request->id);
                $table->tradeshow_id            = $request->tradeshowId;
                $table->tradeshow_edition_id    = $request->tradeshowEditionId;
                $table->tradeshow_times_id      = $request->tradeshowTimesId;
                $table->active                  = $request->active;
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

    public function tradeshow_tradeshow_edition_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"                    => "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Tradeshow_tradeshow_edition::find($request->id);
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

    public function tradeshow_tradeshow_edition_table()
    {
        $rawData = Tradeshow_tradeshow_edition::with(['Tradeshow_time'])->get();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'                    => $value->id,
                    "Tradeshow"             => $value->Tradeshow->name,
                    "Tradeshow Edition"     => $value->Tradeshow_edition->name,
                    "Date From"             => $value->Tradeshow_time->dateFrom,
                    "Date To"               => $value->Tradeshow_time->dateTo,
                    "Active"                => (bool)$value->active,
                    'Created At'            => $value->created_at->toDateTimeString(),
                    'Updated At'            => $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'table-tradeshow',
                'tableName' => 'Table Tradeshow',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'table-tradeshow',
            'tableName' => 'Table Tradeshows',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function tradeshow_tradeshow_edition_active(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                "active" => "required",
            ]);

            if ($validator->passes()) {

                try {
                    $table         = Tradeshow_tradeshow_edition::where('id', $request->id)->first();
                    $table->active = $request->active;
                    $table->save();

                    return response()->json(config('messages.code200'), 200);
                } catch (\Exception $e) {
                    return $e;
                    return response()->json(config('messages.code500'), 500);
                }
            } else {
                $errorMessage = array();
                foreach ($validator->errors()->getMessages() as $key => $value) {
                    $errorMessage[$key] = current($value);
                }

                return response()->json($errorMessage, 400);
            }
        } catch (\Exception $e) {
            return $e;
        }
    }
}
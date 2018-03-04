<?php

namespace App\Http\Controllers\ClosedTables;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Form;
use App\Models\Form_category;
use App\Models\Form_page_position;
use App\Models\Form_page;
use App\Services\GeoIP;

class FormController extends Controller
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
        $this->geoip->setIP(\Request::ip());;
    } 

    public function form_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);

        if($validator->passes())
        {
            try
            {
                $table          = new Form;
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

    public function form_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Form::find($request->id);
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

    public function form_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>      "required",
        ]);

        if ($validator->passes()) 
        {
            try
            {
                $table = Form::find($request->id);
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

    public function form_categories_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);

        if($validator->passes())
        {
            try
            {
                $table          = new Form_category;
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

    public function form_categories_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
            "name"  =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Form_category::find($request->id);
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

    public function form_categories_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Form_category::find($request->id);
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

    public function form_page_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>      "required",
        ]);

        if($validator->passes())
        {
            try
            {
                $table          = new Form_page;
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
    
    public function form_page_edit(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id"        =>  "required",
            "name"      =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Form_page::find($request->id);
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

    public function form_page_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes()) {

            try {
                $table = Form_page::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'        => \Request::ip(),
                    'country'   => $this->geoip->getCountry(),
                    'region'    => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$table->name.' in '.class_basename($table)); 

                return response()->json("success", 200);

            } catch (\Exception $e) {

                return response()->json($e, 500);
            }
        }
    }

    public function form_page_position_create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"  =>  "required",
        ]);
        
        if($validator->passes())
        {
            try
            {
                $table          = new Form_page_position;
                $table->name    = $request->name;
                $table->save();

                activity() 
                ->withProperties([ 
                    'Name'      => $table->name, 
                    'IP'        => \Request::ip(),  
                ]) 
                ->log('Added '. get_class($table)); 

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

    public function form_page_position_edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
            "name"  =>  "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table          = Form_page_position::find($request->id);
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

    public function form_page_position_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"    =>  "required",
        ]);

        if ($validator->passes()) {

            try {
                $table = Form_page_position::find($request->id);
                $table->delete();

                activity() 
                ->withProperties([ 
                    'ip'      => \Request::ip(),
                    'country' => $this->geoip->getCountry(),
                    'region'  => $this->geoip->getRegion()
                ]) 
                ->log('Deleted '.$table->name.' in '.class_basename($table)); 

                return response()->json("success", 200);

            } catch (\Exception $e) {

                return response()->json($e, 500);
            }
        }
    }

    public function form_table()
    {
        $rawData = Form::all();

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
                'tableId'   => 'form-table',
                'tableName' => 'Form Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'form-table',
            'tableName' => 'Form Table',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function form_page_table()
    {
        $rawData = Form_page::all();

        if ($rawData->count() > 0)
        {

            $data = $rawData->map(function ($value)
            {
                return [
                    'id'           =>  $value->id,
                    'name'         =>  $value->name,
                    'created_at'   =>  $value->created_at->toDateTimeString(),
                    'updated_at'   =>  $value->updated_at->toDateTimeString(),
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'form-page-table',
                'tableName' => 'Form Page Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'form-page-table',
            'tableName' => 'Form Page Table',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }

    public function form_page_position_table()
    {
        $rawData = Form_page_position::all();

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
                'tableId'   => 'form-page-position-table',
                'tableName' => 'Form Page Position Table',
                'columns'   => array_keys($data->first()),
                'data'      => $data
                ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'form-page-position-table',
            'tableName' => 'Form Page Position Table',
            'columns'   => null,
            'data'      => null
            ]
        ]);
    }
}

<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead_request;
use carbon\Carbon;
use App\Models\Brand;
use Auth;

class GraphsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /*
    *   $brand              -> Comes from FrontEnd with the id of the brand
    *   $dateFrom           -> Comes from FrontEnd with the date Start in a string
    *   $dateTo             -> Comes from FrontEnd with the date Stop in a string
    *   $SetNowData     -> Data that comes from the function using the dates
    *                           provided
    *   $SetPastData    -> Data that comes from the function using the difference
    *                           provided
    *   $diff               -> Used to store the difference between the 2 dates
    *   $dataNew            -> Used to store the data organized
    *   $dataOld            -> Used to store the data organized
    *   $labels             -> Used to store the labels to the $dataNew and $dataOld
    *                           this position are organized with Arrays by positions
    *   $data               -> Used to put together the arrays $dataNew,$dataOld and
    *                           $labels
    *   $graph              -> Stores the $data and puts the ids required to FrontEnd
    */
    public function index(Request $request)
    {
    /*
    * Date Creation and calling the function with that dates
    *
    */
        if (is_null($request->brand)) {
            switch (Auth::user()->roles->first()->name) {
                case 'Admin':
                case 'Accounter':
                $request->brand = null;
                break;

                default:
                $request->brand = Auth::user()->brand_id;
                break;
            }
        }
        $brand          = $request->brand;
        $dateFrom       = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateFrom);
        $dateTo         = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateTo);
        /*The false and true are equivalent to get unique data and to get 5 or take all */
        $SetNowData     = $this->lead_typeable($brand,$dateFrom,$dateTo,false,false);
        /*
        * The Diff uses a if to get the value but if the value is 0 and this only
        * happens when the its the same day on the dates but its needed to be 1 to
        * check the previus day
        */
        $diff           = ($dateFrom->diffInDays($dateTo) > 0 ) ? $dateFrom->diffInDays($dateTo) : 1 ;
        $dateFrom       = $dateFrom->subDays($diff);
        $dateTo         = $dateTo->subDays($diff);
        /*The false and true are equivalent to get unique data and to get 5 or take all */
        $SetPastData    = $this->lead_typeable($brand,$dateFrom,$dateTo,false,true);

        /*
        * If there is no data from today it sends a empty array even if there is data
        *
        */
        if ($SetNowData == null)
        {
            $graph = array(
                "graph" => [
                    "data"      => null,
                    "graphId"   => "totalLeads-graph",
                    "graphName" => "Top Total Website Leads"
                ]);
            return response()->json($graph);
        }
        else
        {
            if ($SetPastData == null)
            {
                $SetPastData = [];
            }

            /*
            *   To check if every key exists on the old date if doesnt exist it creates
            *   with the value 0
            */
            foreach ($SetNowData as $key => $value)
            {
                if (array_key_exists($key, $SetPastData) == false)
                {
                    $SetPastData[$key] = 0;
                }
            }

            $dataNew = array();
            $dataOld = array();
            $labels  = array();

            /*
            *   To order the old dates because it can be complety diferent from the
            *   actual data
            */
            foreach ($SetNowData as $key => $value)
            {
                array_push($dataNew,$value);
                array_push($dataOld,$SetPastData[$key]);
                array_push($labels,$key);
            }
            /*
            *   Formating the Data to send to Front End
            */
            $dataSetNow = array(
                'label' => "Top 5 now",
                "data"  => $dataNew
            );
            $dataSetPast = array(
                'label' => "Top 5 past",
                "data"  => $dataOld
            );
            $data = array(
                'labels'        => $labels,
                'dataSetNow'    => $dataSetNow,
                'dataSetPast'   => $dataSetPast,
            );
            $graph = array(
                "graph" => [
                    "data"      => $data,
                    "graphId"   => "totalLeads-graph",
                    "graphName" => "Top Total Website Leads"
                ]);
            return response()->json($graph);
        }
    }

    /*
    *   Required:   $brand              -> Brand ID
    *               $dateFrom           -> Start date
    *               $dateTo             -> Stop date
    *               $uniques            -> True or False to get uniques
    *               $takeAll            -> True or False to get All or take only 5
    *
    *   Vars used inside:   $leads      -> Get all the data between the dates
    *                       $bulkData   -> Gets the mapped array with all the types
    *
    *   Returns:    $data               -> return to the function caller
    */
    private function lead_typeable($brand,$dateFrom,$dateTo,$uniques = false,$takeAll = false)
    {
        /*
        *   Gets the current info of dates provided
        */
        if ($uniques) {
            $leads = Lead_request::with("interested_nameable")
                ->where([
                    ["created_at", ">=", $dateFrom],
                    ["created_at", "<=", $dateTo],
                    ['brand_id', (is_null($brand) ? '!=' : '='),
                        $brand]
                ])->whereIn('source_id', [1, 3])
                ->whereDoesntHave('lead', function ($q) {
                    $q->where('email', 'like', 'teste%');
                })
                ->get();
        } else {

            $leads = Lead_request::with("interested_nameable")
                ->where([
                    ["created_at", ">=", $dateFrom],
                    ["created_at", "<=", $dateTo],
                    ['brand_id', (is_null($brand) ? '!=' : '='),
                        $brand]
                ])->whereIn('source_id', [1, 3])
                ->get();
        }

        if (count($leads) > 0)
        {
            if ($uniques)
                $leads = $leads->groupBy('lead_id');

            /*
            *   Maps the current array to get the name of the type
            */
            $bulkData = $leads->map(function($lead) use($uniques)
            {

                if ($uniques)
                {
                    return ['Type' => $lead->first()->interested_nameable->name];
                }
                else
                {
                    return ['Type' => $lead->interested_nameable->name];
                }
            });

            $bulkData = $bulkData->groupBy("Type");
            $data = array();
            /*
            *   gets the count of the types and add's it to a new array with the index
            *   of that count
            */
            foreach ($bulkData as $key => $value)
            {
                $data[$key] = (count($value));
            }

            /*
            *   Sorts the data to get the highests values first
            */
            arsort($data);
            /*
            *   if thake all is true it does nothing but if its false  will cut the
            *   array in the first 5 elements.
            */
            ($takeAll) ? null : $data = array_slice($data, 0, 5, true)  ;
        }
        else
        {
            $data = null;
        }
        return $data;
    }

    /*
    *   $brand              -> Comes from FrontEnd with the id of the brand
    *   $dateFrom           -> Comes from FrontEnd with the date Start in a string
    *   $dateTo             -> Comes from FrontEnd with the date Stop in a string
    *   $SetNowData     -> Data that comes from the function using the dates
    *                           provided
    *   $SetPastData    -> Data that comes from the function using the difference
    *                           provided
    *   $diff               -> Used to store the difference between the 2 dates
    *   $dataNew            -> Used to store the data organized
    *   $dataOld            -> Used to store the data organized
    *   $labels             -> Used to store the labels to the $dataNew and $dataOld
    *                           this position are organized with Arrays by positions
    *   $data               -> Used to put together the arrays $dataNew,$dataOld and
    *                           $labels
    *   $graph              -> Stores the $data and puts the ids required to FrontEnd
    */
    public function index_uniques(Request $request)
    {
        if (is_null($request->brand)) {
            switch (Auth::user()->roles->first()->name) {
                case 'Admin':
                case 'Accounter':
                $request->brand = null;
                break;

                default:
                $request->brand = Auth::user()->brand_id;
                break;
            }
        }
    /*
    * Date Creation and calling the function with that dates
    *
    */
        $brand      = $request->brand;
        $dateFrom   = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateFrom);
        $dateTo     = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateTo);
        /*The false and true are equivalent to get unique data and to get 5 or take all */
        $SetNowData = $this->lead_typeable($brand, $dateFrom,$dateTo,true,false);
        /*
        * The Diff uses a if to get the value but if the value is 0 and this only
        * happens when the its the same day on the dates but its needed to be 1 to
        * check the previus day
        */
        $diff       = ($dateFrom->diffInDays($dateTo) > 0 ) ? $dateFrom->diffInDays($dateTo) : 1 ;
        $dateFrom   = $dateFrom->subDays($diff);
        $dateTo     = $dateTo->subDays($diff);
        /*The false and true are equivalent to get unique data and to get 5 or take all */
        $SetPastData    = $this->lead_typeable($brand,$dateFrom , $dateTo,true,true);

        /*
        * If there is no data from today it sends a empty array even if there is data
        *
        */
        if ($SetNowData == null)
        {
            $graph = array(
                "graph" => [
                    "data"      => null,
                    "graphId"   => "totalLeads-graph",
                    "graphName" => "Top Total Website Leads Uniques"
                ]);
            return response()->json($graph);
        }
        else
        {
            /*
            *   if there is no data from yesterday it creates a empty array.
            */
            if ($SetPastData == null)
            {
                $SetPastData = [];
            }

            /*
            *   To check if every key exists on the old date if doesnt exist it creates
            *   with the value 0
            */
            foreach ($SetNowData as $key => $value)
            {
                if (array_key_exists($key, $SetPastData) == false)
                {
                    $SetPastData[$key] = 0;
                }
            }

            $dataNew    = array();
            $dataOld    = array();
            $labels     = array();


            /*
            *   To order the old dates because it can be complety diferent from the
            *   actual data
            */
            foreach ($SetNowData as $key => $value)
            {
                array_push($dataNew,$value);
                array_push($dataOld,$SetPastData[$key]);
                array_push($labels,$key);
            }


            /*
            *   Formating the Data to send to Front End
            */
            $dataSetNow = array(
                'label' => "Top 5 now",
                "data"  => $dataNew
            );
            $dataSetPast = array(
                'label' => "Top 5 past",
                "data"  => $dataOld
            );
            $data = array(
                'labels'        => $labels,
                'dataSetNow'    => $dataSetNow,
                'dataSetPast'   => $dataSetPast,
            );
            $graph = array(
                "graph" => [
                    "data"      => $data,
                    "graphId"   => "totalLeads-graph",
                    "graphName" => "Top Total Website Leads Uniques"
                ]);
            return response()->json($graph);
        }
    }

}
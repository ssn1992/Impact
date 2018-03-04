<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use Carbon\Carbon;

class LogController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'isAdmin']);
    }

    public function index(Request $request)
    {
		//$dateFrom = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateFrom);
		//$dateTo   = Carbon::createFromFormat("Y-m-d H:i:s",$request->dateTo);

        $dateFrom = Carbon::createFromDate(2018, 1, 1, 'America/Toronto');
        $dateTo   = Carbon::createFromDate(2018, 1, 9, 'America/Toronto');

        try
        {
            $permissions = Activity::with('causer')
            ->where([
                ["created_at",">=", $dateFrom],
                ["created_at","<=", $dateTo]
            ])->get();

            if ($permissions->count() > 0)
            {

                $data = $permissions->map(function ($m)
                {
                    return [
                        "Id"            => $m->id,
                        "Date"          => $m->created_at->toDateTimeString(),
                        "Causer"        => $m->causer->name,
                        "Action"   		=> $m->description,
                        "IP"     		=> $m->getExtraProperty('ip'),
                        "Country"       => $m->getExtraProperty('country'),
                        "Region"        => $m->getExtraProperty('region'),
                        "Active"        => (bool)true,
                    ];
                });

                return response()->json(["table" => [
                    'tableId'   => 'logs-table',
                    'tableName' => 'Logs',
                    'columns'   => array_keys($data->first()),
                    'data'      => $data
                ]
                ]);

            } else {

                return response()->json(["table" => [
                    'tableId'   => 'logs-table',
                    'tableName' => 'Logs',
                    'columns'   => null,
                    'data'      => null
                ]]);
            }
        }

        catch (\Exception $e)
        {
            return response()->json(config('messages.code500'), 500);
        }
    }

}
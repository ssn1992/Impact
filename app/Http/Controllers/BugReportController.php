<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bug_report;
use Illuminate\Support\Facades\Validator;
use App\Mail\Report;
use App\Mail\ReportResolved;
use Auth;
Use Mail;

class BugReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function report_create(Request $request)
    {

        $this->validate($request, [
        "bug"     => "required",
        "tittle"  => "required",
        ]);

        $table                  = new Bug_report;
        $table->user_id         =  Auth::user()->id;
        $table->bug_description = $request->bug;
        $table->admin_response  = 'In approval';
        $table->tittle          = $request->tittle;
        $table->email           = Auth::user()->email;
        $table->status          = 0;
        $table->save();
        $content =
        [
            'id'            => Auth::user()->id,
            'name'          => Auth::user()->name,
            'brand'         => Auth::user()->brand->name,
            'roles'         => Auth::user()->getRoleNames()->first(),
            'permissions'   => Auth::user()->getAllPermissions()->first()->name,
            'tittle'        => $request->tittle,
            'text'          => $request->bugReport,
        ];

        Mail::to(config('mail.admin'))->send(new Report($content));

        return response()->json(config('messages.code200'), 200);
    }

    public function report_edit(Request $request)
    {
        try
        {
          $table                 = Bug_report::find($request->id);
          $table->status         = (bool)$request->status;
          $table->admin_response = $request->adminResponse;
          $table->save();

        }
        catch (\Exception $e)
        {
            return response()->json(config('messages.code500'), 500);
        }

        if ($table->status == 1)
        {
            $content =
                [
                    'tittle'         => $table->tittle,
                    'admin_response' => $table->admin_response,
                    'status'         => 'Fixed',
                ];

            $receiverAddress = $table->email;

            Mail::to($receiverAddress)->send(new ReportResolved($content));
        }

        return response()->json(config('messages.code200'), 200);
  }

    public function table_delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id"        =>      "required",
        ]);

        if ($validator->passes())
        {
            try
            {
                $table = Bug_report::find($request->id);
                $table->delete();

                return response()->json(config('messages.code200'), 200);

            }
            catch (\Exception $e)
            {

                return response()->json(config('messages.code500'), 500);
            }
        }
    }

    public function table_list(Request $request)
    {
        $reports = Bug_report::take(200)->get();

        if ($reports->count() > 0)
        {
            $data = $reports->map(function ($report)
            {
                return [
                'Bug'           => $report->bug_description,
                'id'            => $report->id,
                'User Id'       => $report->user->id,
                'User Name'     => $report->user->name,
                'Brand'         => $report->user->brand->name,
                'Roles'         => $report->user->getRoleNames()->first(),
                'Permissions'   => $report->user->getAllPermissions()->first()->name,
                'Title'         => $report->tittle,
                'Admin Answer'  => $report->admin_response,
                'Status'        => ($report->status == 0) ? "Waiting" : "Fixed",
                'Created At'    => $report->created_at->toDateTimeString(),
                'Fixed At'      => ($report->status == 0) ? "Not fixed" : $report->updated_at->toDateTimeString() ,
                ];
            });

            return response()->json(["table" => [
            'tableId'   => 'bug-report-table',
            'tableName' => 'Bug Reports',
            'columns'   => array_keys($data->first()),
            'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
        'tableId'   => 'bug-report-table',
        'tableName' => 'Bug Reports',
        'columns'   => null,
        'data'      => null
        ]
        ]);
    }

    public function table_client_list(Request $request)
    {
        $reports = Bug_report::take(200)->get();

        if ($reports->count() > 0)
        {
            $data = $reports->map(function ($report)
            {
                return [
                    'Bug'           => $report->bug_description,
                    'User Name'     => $report->user->name,
                    'Brand'         => $report->user->brand->name,
                    'Title'         => $report->tittle,
                    'Admin Answer'  => $report->admin_response,
                    'Status'        => ($report->status == 0) ? "Waiting" : "Fixed",
                    'Created At'    => $report->created_at->toDateTimeString(),
                    'Fixed At'      => ($report->status == 0) ? "Not fixed" : $report->updated_at->toDateTimeString() ,
                ];
            });

            return response()->json(["table" => [
                'tableId'   => 'bug-report-client-table',
                'tableName' => 'Bug Reports',
                'columns'   => array_keys($data->first()),
                'data'      => $data
            ]
            ]);
        }

        return response()->json(["table" => [
            'tableId'   => 'bug-report-client-table',
            'tableName' => 'Bug Reports',
            'columns'   => null,
            'data'      => null
        ]
        ]);
    }

    public function show_update_data(Request $request)
    {

        $bugInfo = Bug_report::where("id",$request->id)->first();

        $bugDetails = [
            "adminResponse" => $bugInfo->admin_response,
            "status" 		=> (bool)$bugInfo->status,
        ];

        return json_encode(['editBug' => $bugDetails]);
    }
}
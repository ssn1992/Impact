<?php

namespace App\Http\Controllers\FullContact;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class FullContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type'  => 'required|string',
            'param' => 'required|string',
        ]);

        if ($validator->passes())
        {
            switch($request->type)
            {
                case 'email':
                    $fullcontact = FullContact::lookupByEmail( $request->param );

                case 'twitter':
                    $fullcontact = FullContact::lookupByTwitter( $request->param );

                case 'phone':
                $fullcontact = FullContact::lookupByPhone( $request->param );

                default:
                    $fullcontact = null;
            }
            if (!is_empty($fullcontact))
            {
                $data = [
                    "data" => $fullcontact
                ];

            }
            else
            {
                $data = [
                    "data" => null
                ];
            }
        }
    }
}
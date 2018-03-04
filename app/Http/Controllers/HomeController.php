<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function homeRedirect ()
    {
        switch (Auth::user()->getRoleNames()->first())
        {
            case "Admin":
                return view('leads.dashboard');
                break;

            case "Accounter":
                return view('leads.dashboard');
                break;

            case "WebPR":
                return view('leads.dashboard');
                break;

            case "Marketer":
                return view('leads.leads');
                break;

            case "Ambassador":
                return view('fairs.fairs');
                break;

            case "Guest":
                return view('leads.leads');
                break;


            default: return view('leads.leads');
        }
    }
}

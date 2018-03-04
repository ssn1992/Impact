<?php

namespace App\Http\Controllers\Cross;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\Cross;

class OperationsController extends Controller
{
	use Cross;

	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Save The Newtwork where the lead has been found
	 *
	 * @param Request
	 * @return Json
	 */

	public function store(Request $request)
	{
		$this->cross($request);
		return response()->json(config('messages.code200'), 200);
	}
}

<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register','API\LeadRegisterController@store');
Route::post('register/search','API\SearchRegisterController@store');
Route::post('sendbanners','DynamicBanner\OperationsController@data_sender');
Route::post('recivecounts','DynamicBanner\OperationsController@data_receiver');
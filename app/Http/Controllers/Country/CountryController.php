<?php

namespace App\Http\Controllers\Country;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\Country_state;

class CountryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function country()
    {
        $allCountries = Country::where('id', '!=',0)->get();

        $data = $allCountries->map(function ($country)
        {
            return
                [
                    'value' => $country->id,
                    'label' => $country->name,
                    'iso'   => strtolower($country->iso),
                ];
        });

        return json_encode(['contries' => ['data' => $data]]);
    }

    public function state()
    {
        $allStates = Country_state::all();

        $states = $allStates->map(function ($state)
        {
            return
                [
                    'value' => $state->id,
                    'label' => $state->name,
                    'iso'   => strtolower($state->iso),
                ];
        });

        return json_encode(['states' => ['data' => $states]]);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Country_continent extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
     public function country()
    {
        return $this->hasMany('App\Models\Country');
    }
}

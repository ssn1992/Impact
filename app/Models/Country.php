<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Country extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
     public function continent()
    {
        return $this->hasOne('App\Models\Country_Continent');
    }
}

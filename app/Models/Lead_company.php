<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead_company extends Model
{
    protected $dates = ['deleted_at'];

    public function details()
     {
         return $this->hasOne('App\Models\Lead_detail');
     }

     public function country()
     {
        return $this->belongsTo('App\Models\Country');
     }

     public function state()
     {
        return $this->belongsTo('App\Models\Country_state');
     }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_lead extends Model
{
    public function lead_request()
    {
        return $this->belongsTo('App\Models\Lead_request');
    }
    
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}

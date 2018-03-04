<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Social_network extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function Social_network_level()
    {
        return $this->belongsTo('App\Models\Level','level_id','id');
    }
}

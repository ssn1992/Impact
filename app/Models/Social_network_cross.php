<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Social_network_cross extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function social_network()
    {
        return $this->belongsTo('App\Models\Social_network');
    }
}

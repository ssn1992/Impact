<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Network_lead extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function social_network()
    {
        return $this->belongsTo('App\Models\Social_network');
    }

    public function brand()
    {
        return $this->hasOne('App\Models\Brand');
    }

    public function user()
    {
        return $this->hasOne('App\Models\User');
    }

    public function lead()
    {
        return $this->hasOne('App\Models\Lead');
    }

    public function network_lead()
    {
        return $this->hasMany('App\Models\Network_cross');
    }

}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Network_cross extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function network_lead()
    {
        return $this->belongsTo('App\Models\Network_lead');
    }

    public function network_lead_state()
    {
        return $this->belongsTo('App\Models\Network_lead_state');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
    
    public function brand ()
    {
        return $this->belongsTo('App\Models\Brand');
    }
}

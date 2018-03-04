<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Network_lead_state extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
   public function network_lead_state()
    {
        return $this->hasny('App\Models\Network_lead_states');
    }
}

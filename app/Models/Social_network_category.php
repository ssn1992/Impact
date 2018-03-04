<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Social_network_category extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
        public function category()
    {
        return $this->hasOne('App\Models\Social_network');
    }
}

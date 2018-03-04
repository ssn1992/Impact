<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Source_category extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
     public function source()
    {
        return $this->hasOne('App\Source');
    }
}

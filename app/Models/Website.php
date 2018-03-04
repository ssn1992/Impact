<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Website extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function form()
    {
        return $this->hasOne('App\Models\Form');
    }
}

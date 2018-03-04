<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Direct_contact extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function phone()
    {
        return $this->hasOne('App\Models\Phone');

    }
}

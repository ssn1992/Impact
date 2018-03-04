<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Budget extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function brand()
    {
        return $this->belongsTo('App\Models\Brand');
    }
}

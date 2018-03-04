<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Brand_access extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    public function brand ()
    {
        return $this->belongsTo('App\Models\Brand');
    }

    public function brand_access_model()
    {
        return $this->belongsTo('App\Models\Brand','brand_access','id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tradeshow extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function Tradeshow_category()
    {
        return $this->hasOne('App\Models\Tradeshow_category');
    }

    public function Tradeshow_edition()
    {
        return $this->belongstomany("App\Models\Tradeshow_edition");
    }

}

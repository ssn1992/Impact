<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tradeshow_time extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function Tradeshow_time()
    {
        return $this->belongsto("App\Models\Tradeshow_time");
    }
}

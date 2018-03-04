<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead_campaign extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function lead_request()
    {
        return $this->belongsTo('App\Models\Lead_request');
    }
}

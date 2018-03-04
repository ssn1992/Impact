<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Search_lead extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function lead()
    {
        return $this->belongsTo('App\Models\Lead');
    }

}
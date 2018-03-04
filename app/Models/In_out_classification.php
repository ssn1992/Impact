<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class In_out_classification extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function type_nameable()
    {
        return $this->morphTo();
    }

    public function type_classification_id()
    {
        return $this->belongsTo('App\Models\Type_classification');
    }
}
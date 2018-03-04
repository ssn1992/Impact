<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Brand extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function token()
    {
        return $this->hasOne('App\Models\Lead_token_brand');
    }
}

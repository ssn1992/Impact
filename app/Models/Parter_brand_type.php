<?php

namespace Models\App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Parter_brand_type extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    //
}

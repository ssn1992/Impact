<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Form_page_position extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    //
}

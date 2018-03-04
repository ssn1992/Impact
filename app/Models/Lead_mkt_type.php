<?php

namespace App;

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead_mkt_type extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
}
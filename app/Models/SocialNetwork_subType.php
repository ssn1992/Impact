<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SocialNetwork_subType extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    

}

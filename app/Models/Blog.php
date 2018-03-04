<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Blog extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    public function brand()
    {
        return $this->belongsTo('App\Models\Brand');
    }

    public function blog_category()
    {
        return $this->belongsTo('App\Models\Blog_category');
    }

}

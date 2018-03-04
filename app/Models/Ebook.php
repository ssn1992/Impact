<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Ebook extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function category()
    {
        return $this->belongsTo('App\Models\Ebook_category','id',"ebook_category_id");
    }

    public function ebook_category()
    {
        return $this->belongsTo('App\Models\Ebook_category');
    }

    public function brand()
    {
        return $this->belongsTo('App\Models\Brand');
    }
}

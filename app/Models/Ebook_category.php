<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Ebook_category extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function category()
    {
        return $this->hasone('App\Models\Ebook');
    }
}

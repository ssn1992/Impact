<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Form extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function catalogues()
    {
        return $this->hasOne('App\Catalogue');
    }
    
    public function press()
    {
        return $this->hasOne('App\Press');
    }

    public function ebook()
    {
        return $this->hasOne('App\Ebook');
    }

    public function infographic()
    {
        return $this->hasOne('App\Infographic');
    }
}

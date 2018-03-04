<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dinamic_banner_image extends Model
{
    protected $connection = 'banners';

    public function brand ()
    {
        return $this->belongsTo('App\Models\Brand');
    }

    public function dinamic_banner_click ()
    {
        return $this->hasMany('App\Models\Dinamic_banner_clicks');
    }
}

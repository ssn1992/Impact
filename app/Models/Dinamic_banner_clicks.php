<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dinamic_banner_clicks extends Model
{
    protected $connection = 'banners';

    public function dinamic_banner_image()
    {
        return $this->belongsTo('App\Models\Dinamic_banner_image');
    }
}

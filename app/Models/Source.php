<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Source extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    public function catalogue()
    {
        return $this->hasOne('App\Models\Catalogue');
    }

    public function direct_contact()
    {
        return $this->hasOne('App\Models\Direct_contact');
    }

    public function website()
    {
        return $this->hasOne('App\Models\Website');
    }

    public function advertising()
    {
        return $this->hasOne('App\Models\Advertising');
    }

    public function blog()
    {
        return $this->hasOne('App\Models\Blog');
    }

    public function email()
    {
        return $this->hasOne('App\Models\Email');
    }

    public function platform()
    {
        return $this->hasOne('App\Models\Platform');
    }

    public function showroom()
    {
        return $this->hasOne('App\Models\Showroom');
    }

    public function cross()
    {
        return $this->hasOne('App\Models\Cross');
    }

    public function social_network()
    {
        return $this->hasOne('App\Models\Social_network');
    }
    
    public function partner_brand()
    {
        return $this->hasOne('App\Models\Brand');
    }

    public function tradeshow()
    {
        return $this->hasOne('App\Models\Tradeshow');
    }

}

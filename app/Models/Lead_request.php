<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Lead_request extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];


     public function lead()
     {
        return $this->belongsTo('App\Models\Lead');
     }
     public function details()
     {
         return $this->hasOne('App\Models\Lead_detail','lead_id',"lead_id");
     }

     public function country()
     {
        return $this->belongsTo('App\Models\Country');
     }

     public function state()
     {
        return $this->belongsTo('App\Models\Country_state');
     }

     public function brand()
     {
        return $this->belongsTo('App\Models\Brand');
     }

     public function source()
     {
        return $this->belongsTo('App\Models\Source');
     }

    public function source_categoryable()
    {
        return $this->morphTo();
    }

    public function interested_nameable()
    {
        return $this->morphTo();
    }

    public function interested_categoryable()
    {
        return $this->morphTo();
    }

    public function blog()
    {
        return $this->morphTo();
    }

    public function lead_class()
    {
        return $this->belongsTo('App\Models\Lead_class');
    }

    public function lead_type()
    {
        return $this->belongsTo('App\Models\Lead_type');
    }

    public function cta()
    {
        return $this->belongsTo('App\Models\Cta');
    }

    public function cta_color()
    {
        return $this->belongsTo('App\Models\Cta_color');
    }

    public function form_page()
    {
        return $this->belongsTo('App\Models\Form_page');
    }

    public function form_page_position()
    {
        return $this->belongsTo('App\Models\Form_page_position');
    }

    public function networks_lead()
    {
        return $this->hasMany('App\Models\Network_lead', 'lead_id', 'lead_id');
    }

    public function user_lead()
    {
        return $this->hasone('App\Models\User_lead');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lead_detail extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = ['job_position', 'company', 'phone', 'mobile', 'website', 'address'];

    public function lead()
    {
        return $this->belongsTo('App\Models\Lead');
    }

    public function industry()
    {
        return $this->belongsTo('App\Models\Occupation');
    }

    public function company()
    {
        return $this->belongsTo('App\Models\Lead_company');
    }

    public function lead_mkt_type()
    {
        return $this->belongsTo('App\Models\Lead_mkt_type');
    }

    public function lead_role()
    {
        return $this->belongsTo('App\Models\Lead_role');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Lead extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $fillable = ['first_name', 'last_name', 'email'];

    public function details()
    {
        return $this->hasOne('App\Models\Lead_detail',"lead_id");
    }

    public function requests()
    {
        return $this->hasMany('App\Models\Lead_request','lead_id');
    }

    public function networks()
    {
        return $this->hasMany('App\Models\Network_lead','lead_id');
    }
}

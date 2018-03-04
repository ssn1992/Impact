<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;


class User extends Authenticatable
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'brand_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    /*
    * This provides the same functionality as before but now you don't need to write
    * the bcrypt function when dealing with the password field in subsequent controllers
    *
    */
    public function setPasswordAttribute($password)
    {   
        $this->attributes['password'] = $password;
    }

    public function brand ()
    {
        return $this->belongsTo('App\Models\Brand');
    }
}

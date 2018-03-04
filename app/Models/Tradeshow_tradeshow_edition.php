<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tradeshow_tradeshow_edition extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    
    protected $table = "tradeshow_tradeshow_edition";


    public function Tradeshow()
    {
        return $this->belongsto("App\Models\Tradeshow");
    }
    public function Tradeshow_edition()
    {
        return $this->belongsto("App\Models\Tradeshow_edition");
    }
    public function Tradeshow_time()
    {
        return $this->belongsto("App\Models\Tradeshow_time");
    }

    public function Tradeshow_campaign()
    {
        return $this->hasone("App\Models\Tradeshow_campaign","tradeshow_tradeshow_edition_id");
    }
}

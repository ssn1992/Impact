<?php 
 
namespace App\Listeners; 
 
use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Services\GeoIP;
 
class LogSuccessfullLogin 
{ 
    protected $geoip;
    /** 
     * Create the event listener. 
     * 
     * @return void 
     */ 
    public function __construct() 
    { 
        $this->geoip=resolve(GeoIP::class);
        $this->geoip->setIP(\Request::ip());
    } 
 
    /** 
     * Handle the event. 
     * 
     * @param  Login  $event 
     * @return void 
     */ 
    public function handle(Login $event) 
    {
        activity()
        ->withProperties([
            'ip'      => \Request::ip(),
            'country' => $this->geoip->getCountry(),
            'region'  => $this->geoip->getRegion()
        ])
        ->log('Logged In');
    } 
}
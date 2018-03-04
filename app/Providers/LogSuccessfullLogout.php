<?php 
 
namespace App\Listeners; 
 
use Illuminate\Auth\Events\Logout;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Services\GeoIP;

class LogSuccessfullLogout 
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
     * @param  Logout  $event 
     * @return void 
     */ 
    public function handle(Logout $event) 
    { 
        activity()
        ->withProperties([
            'ip'      => \Request::getClientIp(),
            'country' => $this->geoip->getCountry(),
            'region'  => $this->geoip->getRegion()
        ]) 
        ->log('Logged Out');
    } 
} 

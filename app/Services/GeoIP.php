<?php

namespace App\Services; 

class GeoIp
{
    protected $service;
    protected $Country;
    protected $Region;

    public function __construct($service)
    {
        $this->service=$service;
    }

    private function geoIP($ip)
    {
        
        $clientResponse =json_decode( 
            file_get_contents($this->service["url"].$ip));
        if($clientResponse)
        {
            $this->Country=$clientResponse->country_name;
            $this->Region=$clientResponse->region_name;
        }
        else 
        {
            $this->Country=null;
            $this->Region=null;
        }
    }

    public function setIP($ip)
    {
        $this->geoIP($ip);
    }

    public function getCountry()
    {
        return $this->Country;
    }

    public function getRegion()
    {
        return $this->Region;
    }
}
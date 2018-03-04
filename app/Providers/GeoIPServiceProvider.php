<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\GeoIP;

class GeoIPServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(GeoIP::class, function ()
        {
            
            return new GeoIP(config('services.geoip'));
            
        });
    }
}

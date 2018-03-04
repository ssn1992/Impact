<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\SalesForceAPI;

class SalesForceServiceProvider extends ServiceProvider
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
        $this->app->singleton(SalesForceAPI::class, function ()
        {
            
            return new SalesForceAPI(config('services.salesforce'));
            
        });
    }
}

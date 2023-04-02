<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\LoggerService;

class FacadeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('LOG',function($app){
            return new LoggerService();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

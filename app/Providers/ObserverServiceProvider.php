<?php

namespace App\Providers;

use App\Models\Album;
use App\Models\DevBlog;
use App\Models\Device;
use App\Models\DeviceMicro;
use App\Models\DeviceType;
use App\Models\DeviceUser;
use App\Models\Image;
use App\Models\Micro;
use App\Models\MicroParam;
use App\Models\ParamType;
use App\Observers\GlobalObserver;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        self::registerGlobalObserver();
    }

    private static function registerGlobalObserver()
    {
        /** @var \Illuminate\Database\Eloquent\Model[] $MODELS */
        $MODELS = [
            DeviceType::class,
            Device::class,
            Album::class,
            Image::class,
            DevBlog::class,
            DeviceMicro::class,
            DeviceUser::class,
            Micro::class,
            MicroParam::class,
            ParamType::class,
        ];

        foreach ($MODELS as $MODEL) {
            $MODEL::observe(GlobalObserver::class);
        }
    }
}

<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class LOG extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'LOG';
    }
}

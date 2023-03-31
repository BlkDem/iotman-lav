<?php

namespace App\Services;
use Illuminate\Support\Facades\Response;
use App\Models\Micro;

class LoggerService
{
    public function logger()
    {
        // dd('logger');
        $res = Micro::all();
        return $res;
    }

    public function setLog($cathegory='cat', $value=0) {
        return "$cathegory . ' - ' . $value";
    }
}

<?php

namespace App\Services;
use Illuminate\Support\Facades\Response;
use App\Models\Logger;
use Illuminate\Support\Facades\Auth;

class LoggerService
{
    public function logger()
    {
        $res = Logger::all();
        return $res;
    }

    // public function setLog($cathegory='cat', $value=0) {
    //     return "$cathegory . ' - ' . $value";
    // }

    public function setLog($cathegory='cat', $value='', $level=0) {
        //return "$cathegory . ' - ' . $value";
        $logRecord["log_level"] = $level;
        $logRecord["log_category"] = $cathegory;
        $logRecord["log_instance"] = Auth::id();
        $logRecord["log_data"] = $value;
        // dd($logRecord);
        $newLog = Logger::create($logRecord);
        info($newLog);
    }
}

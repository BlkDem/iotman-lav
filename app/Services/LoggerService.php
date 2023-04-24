<?php

namespace App\Services;
use Illuminate\Support\Facades\Response;
use App\Models\Logger;
use Illuminate\Support\Facades\Auth;

class LoggerService
{
    //tmp method to be deleted!
    public function logger()
    {
        $res = Logger::all();
        return $res;
    }

    public function setLog($cathegory='cat', $value='', $level=0) {
        $logRecord["log_level"] = $level;
        $logRecord["log_category"] = $cathegory;
        $logRecord["log_instance"] = Auth::id();
        $logRecord["log_data"] = $value;
        $newLog = Logger::create($logRecord);
        info($newLog);
    }
}

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

    /**
     * setLog - writting loggers data
     *
     * @param  mixed $cathegory - event category
     * @param  mixed $value - event value (model data includs original)
     * @param  mixed $level - log level 0/1/2 => info / warning / error
     * @return void
     */
    public function setLog($cathegory='cat', $value=null, $level=0) {

        //get auth user
        $user = Auth::id();

        //prepare data for log
        $res = $value;
        $res["user"] = $user; //user
        $res["table"] = $value->getTable(); //model table name
        $res["original"] = $value->getOriginal(); //original data for recover

        $logRecord["log_level"] = $level;
        $logRecord["log_category"] = $cathegory;
        $logRecord["log_instance"] = "GlobalObserver";
        $logRecord["log_data"] = $res;

        $newLog = Logger::create($logRecord);

        return $newLog;
    }
}

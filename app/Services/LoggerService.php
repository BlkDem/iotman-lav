<?php

namespace App\Services;

use App\Models\Logger;
use Error;
use Illuminate\Support\Facades\Auth;

class LoggerService
{
    // tmp method to be deleted!
    public function logger()
    {
        $res = Logger::all();

        return $res;
    }

    /**
     * setLog - writting loggers data
     *
     * @param  mixed  $cathegory  - event category
     * @param  mixed  $value  - event value (model data includs original)
     * @param  mixed  $level  - log level 0/1/2 => info / warning / error
     * @return void
     */
    public function setLog($category = 'cat', $value = null, $instance = 'GlobalObserver', $level = 0)
    {

        try {
            // get authentificated user id - we neen to know who are the bad guy ))
            $user = Auth::id();

            // prepare data for log
            $res = $value;

            $res['user'] = $user; // user
            $res['table'] = (is_array($value)) ? $value : $value->getTable(); // model table name
            $res['original'] = (is_array($value)) ? $value : $value->getOriginal(); // original data for recover

            // fill the record struct
            $logRecord['log_level'] = $level;
            $logRecord['log_category'] = $category;
            $logRecord['log_instance'] = $instance;
            $logRecord['log_data'] = $res;

            return Logger::create($logRecord);

        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function setPatchLog($category, $value, $table, $instance = 'GlobalObserver', $level = 0)
    {

        try {
            // get authentificated user id - we neen to know who are the bad guy ))
            $user = Auth::id();

            // prepare data for log
            $res = $value;

            $res['user'] = $user; // user
            $res['table'] = $table; // model table name

            // fill the record struct
            $logRecord['log_level'] = $level;
            $logRecord['log_category'] = $category;
            $logRecord['log_instance'] = $instance;
            $logRecord['log_data'] = $res;

            // dd($logRecord);
            return Logger::create($logRecord);

        } catch (\Exception $e) {
            throw $e;
        }
    }
}

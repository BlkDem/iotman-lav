<?php

namespace App\Http\Controllers\Helpers;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class ServerStatusController extends BaseController
{
    public function getServerLoad(){

        $serverload = array();

        // DIRECTORY_SEPARATOR checks if running windows
        if(DIRECTORY_SEPARATOR != '\\')
        {
            if(function_exists("sys_getloadavg"))
            {
                // sys_getloadavg() will return an array with [0] being load within the last minute.
                $serverload = sys_getloadavg();
                $serverload[0] = round($serverload[0], 4);
            }
            else if(@file_exists("/proc/loadavg") && $load = @file_get_contents("/proc/loadavg"))
            {
                $serverload = explode(" ", $load);
                $serverload[0] = round($serverload[0], 4);
            }
            if(!is_numeric($serverload[0]))
            {
                if(@ini_get('safe_mode') == 'On')
                {
                    // return "Unknown";
                }

                // Suhosin likes to throw a warning if exec is disabled then die - weird
                if($func_blacklist = @ini_get('suhosin.executor.func.blacklist'))
                {
                    if(strpos(",".$func_blacklist.",", 'exec') !== false)
                    {
                        return "Unknown";
                    }
                }
                // PHP disabled functions?
                if($func_blacklist = @ini_get('disable_functions'))
                {
                    if(strpos(",".$func_blacklist.",", 'exec') !== false)
                    {
                        return "Unknown";
                    }
                }

                $load = @exec("uptime");
                $load = explode("load average: ", $load);
                $serverload = explode(",", $load[1]);
                if(!is_array($serverload))
                {
                    return "Unknown";
                }
            }
        }
        else
        {
            return "Unknown";
        }

        $returnload = trim($serverload[0]);

        return $returnload;
    }
}

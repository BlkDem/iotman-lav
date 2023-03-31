<?php

namespace App\Http\Controllers;

use App\Facades\LOG;

class LoggerController extends Controller
{
    public function getLog() {
        // dd(Logger::logger());

        return response()->json(LOG::setLog(), 200);
        // return response()->json(LOG::logger(), 200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;

class RootController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {

        /*$devices = Device::all();
        foreach ($devices as $item){
            $item->DeviceType;
        }
        return view('index', ['items' => $devices]);*/

        return view('index');
    }
}

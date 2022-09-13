<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DeviceUsersView;

class DeviceUsersViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devicesUserDataSet = DB::table('Device_DeviceTypes_UserDevices')->get();
        if ($devicesUserDataSet->count() == 0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);    
        }
        return response()->json(['data' => $devicesUserDataSet], 200);
    }

    public function show($id)
    {
        $devicesUserDataSet = DB::table('Device_DeviceTypes_UserDevices')->find($id);
        return (is_null($devicesUserDataSet))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json(['data' => $devicesUserDataSet], 200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;
use Exception;

class DeviceController extends Controller
{
    public function devices()
    {
        $devicesDataSet = Device::get();
        if ($devicesDataSet->count==0)
        {
            return response()->json("No Records Found", 200);    
        }
        return response()->json($devicesDataSet, 200);
    }

    public function devices_byId($id)
    {
        $deviceRecord = Device::find($id);
        if (is_null($deviceRecord))
        {
            return response()->json("Record $id Not Found", 200);    
        }
        return response()->json($deviceRecord, 200);
    }

    public function devices_create(Request $request)
    {
        try {
            $newDevice = Device::create($request->all());
            return response()->json($newDevice, 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function devices_update(Request $request, Device $updateDevice)
    {
        try {
            $updateDevice->update($request->all());
            return response()->json($updateDevice, 200);
        }
        catch (Exception $e) {
            return response()->json('Updating Record Error: ' . $e, 400);
        }
    }

    public function devices_delete(Request $request, Device $deleteDevice)
    {
        try {
            $deleteDevice->delete($request->all());
            return response()->json('Device ' . $deleteDevice . ' Deleted', 204);
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }    
    }
}

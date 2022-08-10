<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeviceType;

class DeviceTypeController extends Controller
{
    public function device_types(){        
        return response()->json(DeviceType::get(), 200);
    }

    public function device_types_byId($id){        
        return response()->json(DeviceType::find($id), 200);
    }
    
    public function device_types_create(Request $request){
        $newDeviceType = DeviceType::create($request->all());
        return response()->json($newDeviceType, 201);
    }

    public function device_types_update(Request $request, DeviceType $updateDeviceType){
        $updateDeviceType->update($request->all());
        return response()->json($updateDeviceType, 200);
    }

    public function device_types_delete(Request $request, DeviceType $deleteDeviceType){
        $deleteDeviceType->delete($request->all());
        return response()->json('', 204);
    }
}


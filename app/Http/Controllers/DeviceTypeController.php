<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeviceType;
use App\Http\Middleware\ValidatorRules;
use Exception;

class DeviceTypeController extends Controller
{
    public function index(){        
        return response()->json(['data' => DeviceType::orderBy('device_type_name', 'desc')->get()], 200);
        // return response()->json(['data' => DeviceType::get()], 200);
        //return response()->json(DeviceType::get(), 200);
    }

    public function show($id){        
        return (is_null(DeviceType::find($id)))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json(['data' => DeviceType::find($id)], 200);
    }
    
    public function store(Request $request){
        $validator = ValidatorRules::MakeValidate($request, 'device_types'); 
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } 
        try {
            $newDeviceType = DeviceType::create($request->all());
            return response()->json($newDeviceType, 201);    
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, DeviceType $updateDeviceType){
        $validator = ValidatorRules::MakeValidate($request, 'device_types'); 
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } 
        try {
            $updateDeviceType->update($request->all());
            return response()->json($updateDeviceType, 200);        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400); 
        }
    }

    public function destroy(Request $request, DeviceType $deleteDeviceType){
        $deleteDeviceType->delete($request->all());
        return response()->json('', 204);
    }
}


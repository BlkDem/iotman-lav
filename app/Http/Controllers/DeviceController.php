<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;
use App\Http\Middleware\ValidatorRules;
//use Illuminate\Support\Facades\Validator;
use Exception;

class DeviceController extends Controller
{
    public function index()
    {
        $devicesDataSet = Device::get();
        if ($devicesDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);    
        }
        return response()->json($devicesDataSet, 200);
    }

    public function show($id)
    {
        return (is_null(Device::find($id)))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json(Device::find($id), 200);
    }

    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'devices');  
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }           
        try {
            $newDevice = Device::create($request->all());
            return response()->json($newDevice, 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, Device $updateDevice)
    {
        $validator = ValidatorRules::MakeValidate($request, 'devices'); 
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }  
        try {
            $updateDevice->update($request->all());
            return response()->json($updateDevice, 200);
        }
        catch (Exception $e) {
            return response()->json('Updating Record Error: ' . $e, 400);
        }
    }

    public function destroy(Request $request, Device $deleteDevice)
    {
        try {
            return ($deleteDevice->delete($request->all()) !== null)? 
                response()->json(null, 204)
                : 
                response()->json('Error deleting', 200);
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }    
    }
}

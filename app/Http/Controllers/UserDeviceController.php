<?php

namespace App\Http\Controllers;

use App\Models\UserDevice;
use Exception;
use App\Http\Middleware\ValidatorRules;
use Illuminate\Http\Request;

class UserDeviceController extends Controller
{
    public function user_devices()
    {
        return response()->json(UserDevice::get(), 200);
    }

    public function user_devices_byId($id)
    {
        return (is_null(UserDevice::find($id)))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json(UserDevice::find($id), 200);
    }

    public function user_devices_create(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user_devices');  
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }           
        try {
            $newUserDevice = UserDevice::create($request->all());
            return response()->json($newUserDevice, 201);
            }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function user_devices_update(Request $request, UserDevice $updateUserDevice)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user_devices'); 
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }  
        try {
            $updateUserDevice->update($request->all());
            return response()->json($updateUserDevice, 200);
            }
        catch (Exception $e) {
            return response()->json('Updating Record Error: ' . $e, 400);
        }
    }

    public function user_devices_delete(Request $request, UserDevice $deleteUserDevice)
    {
        $deleteUserDevice->delete($request->all());
        return response()->json('deleted', 204);
    }}

<?php

namespace App\Http\Controllers;

use App\Models\UserDevice;
use Illuminate\Http\Request;

class UserDeviceController extends Controller
{
    public function user_devices()
    {
        return response()->json(UserDevice::get(), 200);
    }

    public function user_devices_byId($id)
    {
        return response()->json(UserDevice::find($id), 200);
    }

    public function user_devices_create(Request $request)
    {
        $newUserDevice = UserDevice::create($request->all());
        return response()->json($newUserDevice, 201);
    }

    public function user_devices_update(Request $request, UserDevice $updateUserDevice)
    {
        $updateUserDevice->update($request->all());
        return response()->json($updateUserDevice, 200);
    }

    public function user_devices_delete(Request $request, UserDevice $deleteUserDevice)
    {
        $deleteUserDevice->delete($request->all());
        return response()->json('deleted', 204);
    }}

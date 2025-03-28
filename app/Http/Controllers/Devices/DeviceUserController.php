<?php

namespace App\Http\Controllers\Devices;

use App\Http\Controllers\BaseController;
use App\Http\Middleware\ValidatorRules;
use App\Models\DeviceUser;
use App\Models\DeviceUsersView;
use Exception;
use Illuminate\Http\Request;

// use Illuminate\Database\Eloquent\Model;

class DeviceUserController extends BaseController
{
    public function index()
    {
        $devicesUserDataSet = DeviceUser::get();
        if ($devicesUserDataSet->count() == 0) {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }

        return response()->json(['data' => $devicesUserDataSet], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function show($device_user_id)
    {
        $isPresent = DeviceUser::find($device_user_id);

        return (is_null($isPresent)) ?
            response()->json(['Error' => 'true', 'Message' => 'Record '.$device_user_id.' Not Found'], 404)
            :
            response()->json($isPresent, 200);
    }

    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user_devices');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceUser = DeviceUser::create($request->all());

            return response()->json($newDeviceUser, 201);
        } catch (Exception $e) {
            return response()->json('Creating Record Error: '.$e, 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeviceUser $updateDeviceUser)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user_devices');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateDeviceUser->update($request->all());

            $updateDeviceView = DeviceUsersView::find($updateDeviceUser->id);

            return $this->sendResponse($updateDeviceView, 'User Device Updated');
        } catch (Exception $e) {
            return response()->json('Updating Record Error: '.$e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchDeviceUser = DeviceUser::whereId($id);
            $patchDeviceUser->update([
                "$field" => $value,
            ]);
            $res = DeviceUser::find($id);

            return response()->json($res, 200);
        } catch (Exception $e) {
            return response()->json('Patching Record Error: '.$e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $userDeviceItem = DeviceUser::find($id);
        if ($userDeviceItem == null) {
            return $this->sendError('No Record for deleting Found');
        }

        $userDeviceItem->delete($id);

        return $this->sendResponse($userDeviceItem, "User Device $id deleted");
    }
}

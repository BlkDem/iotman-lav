<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\BaseController as BaseController;
use Exception;

class DeviceController extends BaseController
{
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
            return $this->sendError('Creating Record Error: ' . $e);
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
            //return $this->sendResponse($updateDevice, "Device updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchDevice = Device::whereId($id);
            $patchDevice->update([
                "$field" => $value
            ]);
            $res = Device::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    public function destroy($id)
    {
        $deviceItem = Device::find($id);
        if ($deviceItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $deviceItem->delete($id);

        return $this->sendResponse($deviceItem, "Device $id deleted");

    }
}

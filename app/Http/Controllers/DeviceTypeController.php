<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeviceType;
use App\Http\Middleware\ValidatorRules;
use Exception;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Controllers\PaginatorController;

class DeviceTypeController extends BaseController
{
    public function index($currentPage, $itemsPerPage){
        $res = DeviceType::orderBy('device_type_name', 'asc')->get();
        $paginator = PaginatorController::Paginate($res->count(), (int)($itemsPerPage ?? 10), $currentPage);
        return $this->sendResponse($res, "Devices List", $paginator);
        //return response()->json(['data' => DeviceType::orderBy('device_type_name', 'asc')->get()], 200);
        // return response()->json(['data' => DeviceType::get()], 200);
        //return response()->json(DeviceType::get(), 200);
    }

    public function show($id) {
        $res = DeviceType::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Device type (id = $id) found");
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

    public function destroy($id) {
        $deviceTypeItem = DeviceType::find($id);
        if ($deviceTypeItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $deviceTypeItem->delete($id);
        return $this->sendResponse($deviceTypeItem, "Device Type $id deleted");
    }
}


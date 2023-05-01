<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Models\DeviceType;
use App\Http\Middleware\ValidatorRules;
use Exception;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Facades\LOG;

class DeviceTypeController extends BaseController
{


    public function index(){

        $res = DeviceType::orderBy('device_type_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Device Types List", $paginator);
    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = $currentPage;

        $offset = $itemsPerPage*--$page;
        $res = DeviceType::limit($itemsPerPage)->offset($offset)->orderBy('device_type_name', 'asc')->get();
        $total = DeviceType::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Device Types List", $paginator);
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
            return $this->sendError($validator->errors(), 400);
            // return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = DeviceType::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
        }
        catch (Exception $e) {
            // return response()->json('Creating Record Error: ' . $e, 400);
            return $this->sendError('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, DeviceType $updateDeviceType){
        $validator = ValidatorRules::MakeValidate($request, 'device_types');
        if ($validator->fails()) {
            // return response()->json($validator->errors(), 400);
            return $this->sendError($validator->errors(), 400);
        }
        try {
            $updateDeviceType->update($request->all());
            return $this->sendResponse($updateDeviceType, "Device type updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e, 400);
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


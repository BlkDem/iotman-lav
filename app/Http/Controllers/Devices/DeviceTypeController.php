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

        $page = (int)$currentPage;

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
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = DeviceType::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, DeviceType $updateDeviceType){
        $validator = ValidatorRules::MakeValidate($request, 'device_types');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateDeviceType->update($request->all());
            return $this->sendResponse($updateDeviceType, "Device type updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e, 400);
        }
    }

    /**
     * patch record via key => value
     *
     * @param  Request $request
     * @param  int $id
     * @param  string $field
     * @param  mixed $value
     * @return Response
     */
    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchDeviceType = DeviceType::whereId($id);

            if ($patchDeviceType->count() === 0)
            {
                return response()->json('Patching Record Error - not found', 400);
            }

            $oldValue = $patchDeviceType->value($field);

            // dd($patchDeviceType);

            $patchDeviceType->update([
                "$field" => $value
            ]);
            $res = DeviceType::find($id);

            $res["old_field"] = $field;
            $res["old_value"] = $oldValue;

            LOG::setLog('Model patched', $res, 'Controller');

            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
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


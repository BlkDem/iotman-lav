<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Http\Middleware\ValidatorRules;
use App\Models\ParamType;
use Exception;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Controllers\PaginatorController;


class ParamTypeController extends BaseController
{
    public function index(){

        $res = ParamType::orderBy('type_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Param Types List", $paginator);
    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = ParamType::limit($itemsPerPage)->offset($offset)->orderBy('type_name', 'asc')->get();
        $total = ParamType::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Param Types List", $paginator);
    }

    public function show($id) {
        $res = ParamType::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Device type (id = $id) found");
    }

    public function store(Request $request){
        $validator = ValidatorRules::MakeValidate($request, 'param_types');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = ParamType::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
            // return response()->json($newDeviceType, 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, ParamType $updateParamType){
        $validator = ValidatorRules::MakeValidate($request, 'param_types');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateParamType->update($request->all());
            // return response()->json($updateDeviceType, 200);
            return $this->sendResponse($updateParamType, "Device type updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e, 400);
            // return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchDeviceType = ParamType::whereId($id);
            $patchDeviceType->update([
                "$field" => $value
            ]);
            $res = ParamType::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    public function destroy($id) {
        $paramTypeItem = ParamType::find($id);
        if ($paramTypeItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $paramTypeItem->delete($id);
        return $this->sendResponse($paramTypeItem, "Device Type $id deleted");
    }
}

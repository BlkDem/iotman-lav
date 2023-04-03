<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Models\MicroParam;
use App\Models\DeviceMicro;
use App\Models\ParamType;
use App\Http\Middleware\ValidatorRules;
use Illuminate\Support\Facades\DB;
use Exception;

class MicroParamController extends BaseController
{
    public function index()
    {
        $res = MicroParam::orderBy('param_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Micro params List", $paginator);

    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = MicroParam::limit($itemsPerPage)->offset($offset)->orderBy('param_in, param_name', 'asc')->get();
        $total = MicroParam::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Micro params List", $paginator);
    }

    public function pageWhereMicroDevice($currentPage=0, $itemsPerPage=10, $device_micro_id){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('micro_params')
        ->join('device_micros', 'device_micros.id', '=', 'micro_params.device_micro_id')
        ->join('param_types', 'param_types.id', '=', 'micro_params.param_type_id')
        ->select(
            'micro_params.id as id',
            'micro_params.param_name as param_name',
            'micro_params.param_desc as param_desc',
            'micro_params.param_value as param_value',
            'micro_params.param_suff as param_suff',
            'micro_params.param_min as param_min',
            'micro_params.param_max as param_max',
            'micro_params.param_in as param_in',
            'micro_params.param_type_id as param_type_id',

            'micro_params.created_at as created_at',
            'micro_params.updated_at as updated_at',

            'device_micros.id as device_micro_id',
            'device_micros.device_micro_idx as device_micro_idx',
            'device_micros.device_micro_desc as device_micro_desc',

            'param_types.id as param_type_id',
            'param_types.type_name as type_name',

            )
        ->where('device_micro_id', $device_micro_id)
        ->limit($itemsPerPage)->offset($offset)
        ->orderBy('param_in', 'asc')
        ->orderBy('param_name', 'asc')
        ->get();

        $total = MicroParam::where('device_micro_id', $device_micro_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Micro params List", $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'micro_params');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newMicroParam = MicroParam::create($request->all());

            $deviceMicroId = $newMicroParam["device_micro_id"];
            $deviceMicroIdx = DeviceMicro::find($deviceMicroId);

            $paramTypeId = $newMicroParam["param_type_id"];
            $paramTypeName = ParamType::find($paramTypeId);

            $newMicroParam["device_micro_idx"] = $deviceMicroIdx["device_micro_idx"];
            $newMicroParam["type_name"] = $paramTypeName["type_name"];

            return $this->sendResponse($newMicroParam, 'Param created');
        }
        catch (Exception $e) {
            return $this->sendError('Error creating record: '. $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = MicroParam::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Image (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Micro  $micro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MicroParam $updateParam) {
        $validator = ValidatorRules::MakeValidate($request, 'micro_params');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateParam->update($request->all());

            $deviceMicroId = $updateParam["device_micro_id"];
            $deviceMicroIdx = DeviceMicro::find($deviceMicroId);

            $paramTypeId = $updateParam["param_type_id"];
            $paramTypeName = ParamType::find($paramTypeId);

            $updateParam["device_micro_idx"] = $deviceMicroIdx["device_micro_idx"];
            $updateParam["type_name"] = $paramTypeName["type_name"];

            return $this->sendResponse($updateParam, "Micro param updated");
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchMicro = MicroParam::whereId($id);
            $patchMicro->update([
                "$field" => $value
            ]);
            $res = MicroParam::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Micro  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $microItem = MicroParam::find($id);
        if ($microItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        try {
        $microItem->delete($id);
            return $this->sendResponse($microItem, "Micro param $id deleted");
        }
        catch (Exception $e) {
            return $this->sendError("Error deleting record $id. Message: $e");
        }
    }

}

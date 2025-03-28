<?php

namespace App\Http\Controllers\Devices;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\DeviceMicro;
use App\Models\MicroParam;
use App\Models\ParamType;
use Exception;
use Illuminate\Http\Request;

class MicroParamController extends BaseController
{
    public function index()
    {
        $res = MicroParam::orderBy('param_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Micro params List', $paginator);

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
     * Get dataset on selected page
     *
     * @param  int  $currentPage
     * @param  int  $itemsPerPage
     * @return void
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = MicroParam::limit($itemsPerPage)->offset($offset)->orderBy('param_in, param_name', 'asc')->get();
        $total = MicroParam::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Micro params List', $paginator);
    }

    /**
     * pageWhereMicroDevice - get dataset on a selected page where $device_micro_id
     *
     * @param  mixed  $currentPage
     * @param  mixed  $itemsPerPage
     * @param  mixed  $device_micro_id
     * @return void
     */
    public function pageWhereMicroDevice($currentPage, $itemsPerPage, $device_micro_id)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = MicroParam::deviceMicroParamsWhereID($device_micro_id)
            ->limit($itemsPerPage)->offset($offset)
            ->orderBy('param_in', 'asc')
            ->orderBy('param_name', 'asc')
            ->get();

        $total = MicroParam::where('device_micro_id', $device_micro_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Micro params List', $paginator);
    }

    /**
     * copmliteResponseForMicroParam - fill the record with foreign props
     *
     * @param  mixed  $microParam
     * @return void
     */
    public function copmliteResponseForMicroParam(MicroParam $microParam): MicroParam
    {
        /**
         * Prepare complited response for front
         */
        $newMicroParam = $microParam;

        $deviceMicroId = $microParam['device_micro_id'];
        $deviceMicroIdx = DeviceMicro::find($deviceMicroId);

        $paramTypeId = $microParam['param_type_id'];
        $paramTypeName = ParamType::find($paramTypeId);

        $newMicroParam['device_micro_idx'] = $deviceMicroIdx['device_micro_idx'];
        $newMicroParam['type_name'] = $paramTypeName['type_name'];

        return $newMicroParam;
    }

    /**
     * Store a newly created resource in storage.
     *
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

            // $deviceMicroId = $newMicroParam["device_micro_id"];
            // $deviceMicroIdx = DeviceMicro::find($deviceMicroId);

            // $paramTypeId = $newMicroParam["param_type_id"];
            // $paramTypeName = ParamType::find($paramTypeId);

            // $newMicroParam["device_micro_idx"] = $deviceMicroIdx["device_micro_idx"];
            // $newMicroParam["type_name"] = $paramTypeName["type_name"];

            return $this->sendResponse($this->copmliteResponseForMicroParam($newMicroParam), 'Param created');
        } catch (Exception $e) {
            return $this->sendError('Error creating record: '.$e);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Micro  $micro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MicroParam $updateParam)
    {
        $validator = ValidatorRules::MakeValidate($request, 'micro_params');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateParam->update($request->all());

            // $deviceMicroId = $updateParam["device_micro_id"];
            // $deviceMicroIdx = DeviceMicro::find($deviceMicroId);

            // $paramTypeId = $updateParam["param_type_id"];
            // $paramTypeName = ParamType::find($paramTypeId);

            // $updateParam["device_micro_idx"] = $deviceMicroIdx["device_micro_idx"];
            // $updateParam["type_name"] = $paramTypeName["type_name"];

            return $this->sendResponse($this->copmliteResponseForMicroParam($updateParam), 'Micro param updated');
        } catch (Exception $e) {
            return $this->sendError('Deleting Record Error: '.$e);
        }
    }

    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchMicro = MicroParam::whereId($id);
            $patchMicro->update([
                "$field" => $value,
            ]);
            $res = MicroParam::find($id);

            return response()->json($res, 200);
        } catch (Exception $e) {
            return response()->json('Deleting Record Error: '.$e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Micro  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $microItem = MicroParam::find($id);
        if ($microItem === null) {
            return $this->sendError('No Record for deleting Found');
        }

        try {
            $microItem->delete($id);

            return $this->sendResponse($microItem, "Micro param $id deleted");
        } catch (Exception $e) {
            return $this->sendError("Error deleting record $id. Message: $e");
        }
    }
}

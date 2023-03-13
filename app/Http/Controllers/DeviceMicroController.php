<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\DeviceMicro;
use App\Http\Controllers\BaseController;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\PaginatorController;


class DeviceMicroController extends BaseController
{
 /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = DeviceMicro::get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Devices Micros List", $paginator);

    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = DeviceMicro::limit($itemsPerPage)->offset($offset)->get();
        $total = DeviceMicro::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Devices Micros List", $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'device_micros');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceMicro = DeviceMicro::create($request->all());
            return response()->json($newDeviceMicro, 201);
        }
        catch (Exception $e) {
            return response()->json('Store Record Error: ' . $e, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = DeviceMicro::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Devices Micro (id = $id) found");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeviceMicro  $updateDeviceMicro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeviceMicro $updateDeviceMicro) {
        $validator = ValidatorRules::MakeValidate($request, 'device_micros');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateDeviceMicro->update($request->all());
            return response()->json($updateDeviceMicro, 200);        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeviceMicro  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $deviceMicroItem = DeviceMicro::find($id);
        if ($deviceMicroItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $deviceMicroItem->delete($id);
        try {
            return $this->sendResponse($deviceMicroItem, "Micro $id deleted");
        }
        catch (Exception $e) {
            return $this->sendError("DeviceMicro $id deleting error: $e");
        }
    }
}

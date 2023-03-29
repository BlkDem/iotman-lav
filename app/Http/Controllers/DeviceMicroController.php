<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Models\DeviceMicro;
use App\Http\Controllers\BaseController;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\PaginatorController;
use Illuminate\Support\Facades\DB;


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

    public function pageWhereDevice($currentPage=0, $itemsPerPage=10, $device_id){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('device_micros')
        ->join('micros', 'micros.id', '=', 'device_micros.micro_id')
        ->join('devices', 'devices.id', '=', 'device_micros.device_id')
        ->select(
            'device_micros.id as id',
            'device_micros.device_micro_desc as device_micro_desc',
            'device_micros.device_micro_idx as device_micro_idx',
            'device_micros.created_at as created_at',
            'device_micros.updated_at as updated_at',
            'micros.id as micro_id',
            'micros.micro_name as micro_name',
            'devices.device_name as device_name'
        )
        ->where('device_micros.device_id', $device_id)
        ->limit($itemsPerPage)->offset($offset)->orderBy('device_micro_idx', 'asc')
        ->get();

        // dd($res);

        // $res = Image::limit($itemsPerPage)->where('album_id', $album_id)->offset($offset)->orderBy('image_name', 'asc')->get();

        $total = DeviceMicro::where('device_id', $device_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Device Micros List", $paginator);
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

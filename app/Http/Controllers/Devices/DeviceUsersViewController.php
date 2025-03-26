<?php

namespace App\Http\Controllers\Devices;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Models\DeviceUser;
use App\Models\DeviceUsersView;
use Illuminate\Support\Facades\DB;

class DeviceUsersViewController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $res = DB::table('device_devicetypes_userdevices')->orderBy('user_device_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'User Devices List', $paginator);
    }

    public function page($currentPage = 0, $itemsPerPage = 10)
    {
        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = DB::table('device_devicetypes_userdevices')
            ->limit($itemsPerPage)
            ->offset($offset)
            ->orderBy('user_device_name', 'asc')
            ->get();
        $total = DB::table('device_devicetypes_userdevices')->get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'User Devices List', $paginator);

        $devicesUserDataSet = DB::table('device_devicetypes_userdevices')->get();
        if ($devicesUserDataSet->count() == 0) {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }

        return response()->json(['data' => $devicesUserDataSet], 200);
    }

    public function pageWhereUser($currentPage, $itemsPerPage, $user_id)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = DB::table('device_devicetypes_userdevices')
        // ->join('users', 'Device_DeviceTypes_UserDevices.user_id', '=', 'users.id')
        // ->select(
        //     'Device_DeviceTypes_UserDevices.id as id',
        //     'Device_DeviceTypes_UserDevices.user_device_name as user_device_name',
        //     'Device_DeviceTypes_UserDevices.user_device_pass as user_device_pass',
        //     'Device_DeviceTypes_UserDevices.created_at as created_at',
        //     'Device_DeviceTypes_UserDevices.updated_at as updated_at',
        //     'users.id as user_id',
        //     'users.name as user_name')
            ->where('user_id', $user_id)
            ->limit($itemsPerPage)->offset($offset)->orderBy('user_device_name', 'asc')
            ->get();

        $total = $res->count();
        // DeviceUser::where('user_id', $user_id)->get();

        $paginator = PaginatorController::Paginate($total, (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'User Device Type', $paginator);
    }

    public function show($id)
    {
        $res = DeviceUsersView::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "Album (id = $id) found");

    }
}

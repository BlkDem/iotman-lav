<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DeviceUsersView;
use App\Http\Controllers\BaseController;

class DeviceUsersViewController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        $res = DB::table('Device_DeviceTypes_UserDevices')->orderBy('user_device_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "User Devices List", $paginator);
    }

    public function page($currentPage=0, $itemsPerPage=10)
    {
        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = DB::table('Device_DeviceTypes_UserDevices')
            ->limit($itemsPerPage)
            ->offset($offset)
            ->orderBy('user_device_name', 'asc')
            ->get();
        $total = DB::table('Device_DeviceTypes_UserDevices')->get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "User Devices List", $paginator);


        $devicesUserDataSet = DB::table('Device_DeviceTypes_UserDevices')->get();
        if ($devicesUserDataSet->count() == 0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }
        return response()->json(['data' => $devicesUserDataSet], 200);
    }

    public function show($id)
    {
        $devicesUserDataSet = DB::table('Device_DeviceTypes_UserDevices')->find($id);
        return (is_null($devicesUserDataSet))?
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            :
            response()->json(['data' => $devicesUserDataSet], 200);
    }
}

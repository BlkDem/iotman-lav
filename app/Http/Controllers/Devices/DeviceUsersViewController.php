<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DeviceUsersView;
use App\Http\Controllers\BaseController;
use App\Models\DeviceUser;
use App\Http\Controllers\PaginatorController;

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

    public function pageWhereUser($currentPage=0, $itemsPerPage=10, $user_id){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('Device_DeviceTypes_UserDevices')
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
        //DeviceUser::where('user_id', $user_id)->get();

        $paginator = PaginatorController::Paginate($total, (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "User Device Type", $paginator);
    }


    public function show($id)
    {
        // $devicesUserDataSet = DB::table('Device_DeviceTypes_UserDevices')->find($id);

        $res = DeviceUsersView::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Album (id = $id) found");

        // dd($devicesUserDataSet);

        // $paginator = PaginatorController::Paginate($devicesUserDataSet->count(), 1, 1);

       // return (is_null($devicesUserDataSet))?
         //   response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
           // :
            // return $this->sendResponse($devicesUserDataSet, "User Device Type");
            // response()->json(['data' => $devicesUserDataSet], 200);
    }
}

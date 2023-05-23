<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Models\DevicesView;
use App\Http\Controllers\BaseController as BaseController;
use App\Http\Controllers\PaginatorController;
use Illuminate\Support\Facades\DB;

class DevicesViewController extends BaseController
{


    public function index(){

        $res = DevicesView::orderBy('device_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Devices List", $paginator);
    }

        //only for id and name fields for lookup components
        public function indexLookup($currentPage=0, $itemsPerPage=10)
        {

            $page = (int)$currentPage;

            $offset = $itemsPerPage*--$page;

            $res = DevicesView::controllerDeviceCount()
                    ->limit($itemsPerPage)
                    ->offset($offset)
                    ->get();

            $total = DevicesView::get();

            $paginator = PaginatorController::Paginate($total->count(), (int)$itemsPerPage, $currentPage);

            return $this->sendResponse($res, "Devices lookup List", $paginator);

        }

    public function page($currentPage=0, $itemsPerPage=5){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = DevicesView::limit($itemsPerPage)->offset($offset)->orderBy('device_name', 'asc')->get();
        $total = DevicesView::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Devices List", $paginator);
    }


    // public function index($currentPage=0, $itemsPerPage=10)
    // {
    //     $devicesDataSet = DevicesView::orderBy('device_name', 'asc')->get();
    //     if ($devicesDataSet->count() ==0)
    //     {
    //         return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
    //     }
    //     return response()->json(['data' => $devicesDataSet], 200);
    // }

    public function show($id)
    {
        $res = DevicesView::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Device (id = $id) found");
    }
}

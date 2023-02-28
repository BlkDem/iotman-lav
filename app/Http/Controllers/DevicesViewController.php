<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DevicesView;
use App\Http\Controllers\BaseController as BaseController;

class DevicesViewController extends BaseController
{
    public function index()
    {
        $devicesDataSet = DevicesView::orderBy('device_name', 'asc')->get();
        if ($devicesDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }
        return response()->json(['data' => $devicesDataSet], 200);
    }

    public function show($id)
    {
        $res = DevicesView::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Device (id = $id) found");
    }
}

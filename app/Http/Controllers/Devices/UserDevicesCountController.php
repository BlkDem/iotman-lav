<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Models\UserDevicesCount;
use App\Http\Controllers\BaseController;

class UserDevicesCountController extends BaseController
{
    //
    public function index()
    {
        $userDeviceCountDataSet = UserDevicesCount::get();
        if ($userDeviceCountDataSet->count() == 0)
        {
            return $this->sendError('No Records Found');
        }
        return $this->sendResponse($userDeviceCountDataSet, 'User Device Count');
    }

    public function show($id)
    {
        $res = UserDevicesCount::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "User (id = $id) Device Count");
    }

}

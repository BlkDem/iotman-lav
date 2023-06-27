<?php

namespace App\Http\Controllers\Devices;

use Illuminate\Http\Request;
use App\Models\DeviceType;
use App\Http\Middleware\ValidatorRules;
use Exception;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use Illuminate\Support\Facades\Cache;

class DeviceTypeController extends BaseController
{


    /**
     * index Getting Device Types (Catalog)
     *
     * @return Response
     */
    public function index(){

        $res = DeviceType::orderBy('device_type_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Device Types List", $paginator);
    }

    /**
     * page - Getting Device Types (Catalog) on the page
     *
     * @param  int $currentPage
     * @param  int $itemsPerPage
     * @return Response
     */
    public function page($currentPage=0, $itemsPerPage=10)
    {

        $page = (($currentPage < 0) || ($currentPage === null))?0:$currentPage;

        $itemsCountPerPage = (($currentPage < 0) || ($currentPage === null))?10:$itemsPerPage;

        $offset = $itemsCountPerPage*--$page;
        $res = DeviceType::limit($itemsPerPage)->offset($offset)->orderBy('device_type_name', 'asc')->get();
        $total = DeviceType::get();

        Cache::put('device_types', $res, now()->addMinutes(10));

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Device Types List", $paginator);
    }

    /**
     * show current Device Type by ID
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {

        $res = DeviceType::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Device type (id = $id) found");
    }

    /**
     * store Creating a new Device Type
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {

        $validator = ValidatorRules::MakeValidate($request, 'device_types');
        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
            // return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = DeviceType::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
        }
        catch (Exception $e) {
            // return response()->json('Creating Record Error: ' . $e, 400);
            return $this->sendError('Creating Record Error: ' . $e, 400);
        }
    }

    /**
     * update - updating the DeviceType model
     *
     * @param  Request $request
     * @param  DeviceType $updateDeviceType
     * @return Response
     */
    public function update(Request $request, DeviceType $updateDeviceType)
    {
        $validator = ValidatorRules::MakeValidate($request, 'device_types');

        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
        }

        try {
            $updateDeviceType->update($request->all());
            return $this->sendResponse($updateDeviceType, "Device type updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e, 400);
        }

    }

    /**
     * destroy - Destroing the Device Type by ID
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {

        $deviceTypeItem = DeviceType::find($id);

        if ($deviceTypeItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        try
        {
            $deviceTypeItem->delete($id);
        }
        catch (\Exception $e)
        {
            return $this->sendError("Deleting error: " . $e);
        }

        return $this->sendResponse($deviceTypeItem, "Device Type $id deleted");
    }


    /**
     * supertod - Supertod Devices list Scope
     *
     * @return array
     */
    public function supertod() {

        return $this->sendResponse(DeviceType::supertod()->get(), "Supertod Devices");
    }
}


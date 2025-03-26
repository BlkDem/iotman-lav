<?php

namespace App\Http\Controllers\Devices;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\Micro;
use Exception;
use Illuminate\Http\Request;

class MicroController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = Micro::orderBy('micro_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Micros List', $paginator);

    }

    /**
     * page
     *
     * @param  mixed  $currentPage
     * @param  mixed  $itemsPerPage
     * @return void
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = Micro::limit($itemsPerPage)->offset($offset)->orderBy('micro_name', 'asc')->get();
        $total = Micro::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Micros List with pages', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'micros');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = Micro::create($request->all());

            return $this->sendResponse($newDeviceType, 'Device created');
        } catch (Exception $e) {
            return response()->json('Store Record Error: '.$e, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = Micro::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "Image (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Micro  $micro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Micro $updateMicro)
    {
        $validator = ValidatorRules::MakeValidate($request, 'micros');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateMicro->update($request->all());

            return $this->sendResponse($updateMicro, 'Micro updated');
        } catch (Exception $e) {
            return response()->json('Deleting Record Error: '.$e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchMicro = Micro::whereId($id);
            $patchMicro->update([
                "$field" => $value,
            ]);
            $res = Micro::find($id);

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
        $microItem = Micro::find($id);
        if ($microItem === null) {
            return $this->sendError('No Record for deleting Found');
        }

        try {
            $microItem->delete($id);

            return $this->sendResponse($microItem, "Micro $id deleted");
        } catch (Exception $e) {
            return $this->sendError("Error deleting record $id. Message: $e");
        }
    }
}

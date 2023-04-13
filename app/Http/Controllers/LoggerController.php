<?php

namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use App\Models\Logger;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\PaginatorController;
use Illuminate\Http\Request;
use Exception;

use App\Facades\LOG;

class LoggerController extends BaseController
{
    public function getLog() {
        // dd(Logger::logger());

        return response()->json(LOG::setLog(), 200);
        // return response()->json(LOG::logger(), 200);
    }

    public function index(){

        $res = Logger::orderBy('created_at', 'desc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Logs List", $paginator);
    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = Logger::limit($itemsPerPage)->offset($offset)->orderBy('created_at', 'desc')->get();
        $total = Logger::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Logs List", $paginator);
    }

    public function show($id) {
        $res = Logger::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Log (id = $id) found");
    }

    public function store(Request $request){
        $validator = ValidatorRules::MakeValidate($request, 'loggers');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = Logger::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
            // return response()->json($newDeviceType, 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, Logger $updateLog){
        $validator = ValidatorRules::MakeValidate($request, 'loggers');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateLog->update($request->all());
            return $this->sendResponse($updateLog, "Log updated");
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchLog = Logger::whereId($id);
            $patchLog->update([
                "$field" => $value
            ]);
            $res = Logger::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }
}

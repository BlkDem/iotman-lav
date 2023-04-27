<?php

namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use App\Models\Logger;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\PaginatorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;

use App\Facades\LOG;

class LoggerController extends BaseController
{
    /**
     * index Getting default recordset
     *
     * @return Response
     */
    public function index(){

        $res = Logger::orderBy('created_at', 'desc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Logs List", $paginator);
    }

    /**
     * daysOfTheMonth - Days with log records
     *
     * @param  mixed $date
     * @return Response
     */
    public function daysOfTheMonth($date)
    {
        $res = Logger::getDaysOfTheMonth($date);

        $paginator = PaginatorController::Paginate(count($res), 1, 1);

        return $this->sendResponse($res, "Days exist log in the Month", $paginator);
    }

    /**
     * page
     *
     * @param  int $currentPage - requested page
     * @param  int $itemsPerPage - items per page
     * @return Response
     */
    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = Logger::limit($itemsPerPage)
            ->offset($offset)
            ->orderBy('created_at', 'desc')
            ->get();
        $total = Logger::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Logs List", $paginator);
    }

    /**
     * show - Show the requested log record
     *
     * @param  int $id
     * @return Response
     */
    public function show($id) {
        $res = Logger::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Log (id = $id) found");
    }

    /**
     * store - create a new log record
     *
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'loggers');

        if ($validator->fails())
        {
            return response()->json($validator->errors(), 400);
        }
        try
        {
            $newDeviceType = Logger::create($request->all());
            return $this->sendSuccess($newDeviceType, "Device Type Created", 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    /**
     * update - Update requested record
     *
     * @param  Request $request
     * @param  Logger $updateLog
     * @return Response
     */
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

    /**
     * patch - Patching record via key => value
     *
     * @param  Request $request
     * @param  int $id - record ID
     * @param  string $field - patching field name
     * @param  mixed $value - applying value
     * @return Response
     */
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

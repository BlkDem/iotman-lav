<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use Exception;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\Auth\Permission;

class PermissionController extends BaseController
{

    /**
     * getTotalRecords - Getting records count
     *
     * @return Integer
     */
    private function getTotalRecords() {
        return Permission::get()->count();
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = Permission::orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Permissions List", $paginator);

    }

    /**
     * indexLookup - Getting only id and name fields for lookup components
     *
     * @param  int $currentPage
     * @param  int $itemsPerPage
     * @return Response
     */
    public function indexLookup($currentPage=0, $itemsPerPage=10)
    {
        // $res = Album::select('id','album_name')->orderBy('id', 'asc')->get();

        $page = $currentPage;

        $offset = $itemsPerPage*--$page;

        $res = Permission::albumImagesCount()
                ->limit($itemsPerPage)
                ->offset($offset)
                ->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int)$itemsPerPage, $currentPage);

        return $this->sendResponse($res, "Permissions lookup List", $paginator);

    }

    /**
     * page - Getting scoped recordset
     *
     * @param  int $currentPage
     * @param  int $itemsPerPage
     * @return Response
     */
    public function page($currentPage=0, $itemsPerPage=10){

        $page = $currentPage;

        $offset = $itemsPerPage*--$page;

        $res = Permission::limit($itemsPerPage)->offset($offset)->orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), $itemsPerPage, $currentPage);

        return $this->sendResponse($res, "Permissions List", $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'Permissions');
        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
            // return response()->json($validator->errors(), 400);
        }
        try {
            $newPermission = Permission::create($request->all());
            return $this->sendSuccess($newPermission, 'Role created', 201);
        }
        catch (Exception $e) {
            return $this->sendError('Error creatig record: ' . $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = Permission::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Album (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $updatePermission) {
        $validator = ValidatorRules::MakeValidate($request, 'roles');
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {
            $updatePermission->update($request->all());
            return $this->sendResponse($updatePermission, 'Permission created');
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e);
        }
    }

    /**
     * patch - Ptching requested record via key => value
     *
     * @param  Request $request
     * @param  int $id
     * @param  string $field
     * @param  mixed $value
     * @return Response
     */
    public function patch(Request $request, $id, $field, $value){
        try {
            $patchPermission = Permission::whereId($id);
            $patchPermission->update([
                "$field" => $value
            ]);
            $res = Permission::find($id);
            return $this->sendResponse($res, 'Permission patched');
            // return response()->json($res, 200);
        }
        catch (Exception $e) {
            return $this->sendError('Patching Record Error: ' . $e);
            // return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Auth\Permission  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {

        //check exists
        $permissionItem = Permission::find($id);

        if ($permissionItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        //deleting
        try {

            $permissionItem->delete($id);
            return $this->sendResponse($permissionItem, "Permission $id deleted");

        } catch (Exception $e) {
            $this->sendError('Deleting error: ' . $e);
        }

    }}

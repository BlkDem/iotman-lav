<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\Auth\Role;
use Exception;
use Illuminate\Http\Request;

class RoleController extends BaseController
{
    /**
     * getTotalRecords - Getting records count
     *
     * @return int
     */
    private function getTotalRecords()
    {
        return Role::get()->count();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = Role::orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Roles List', $paginator);

    }

    /**
     * indexLookup - Getting only id and name fields for lookup components
     *
     * @param  int  $currentPage
     * @param  int  $itemsPerPage
     * @return Response
     */
    public function indexLookup($currentPage = 0, $itemsPerPage = 10)
    {
        // $res = Album::select('id','album_name')->orderBy('id', 'asc')->get();

        $page = $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = Role::albumImagesCount()
            ->limit($itemsPerPage)
            ->offset($offset)
            ->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int) $itemsPerPage, $currentPage);

        return $this->sendResponse($res, 'Roles lookup List', $paginator);

    }

    /**
     * page - Getting scoped recordset
     *
     * @param  int  $currentPage
     * @param  int  $itemsPerPage
     * @return Response
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = Role::limit($itemsPerPage)->offset($offset)->orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Roles List', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'roles');
        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
            // return response()->json($validator->errors(), 400);
        }
        try {
            $newRole = Role::create($request->all());

            return $this->sendSuccess($newRole, 'Role created', 201);
        } catch (Exception $e) {
            return $this->sendError('Error creatig record: '.$e);
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
        $res = Role::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "Album (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $updateRole)
    {
        $validator = ValidatorRules::MakeValidate($request, 'roles');
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {
            $updateRole->update($request->all());

            return $this->sendResponse($updateRole, 'Role created');
        } catch (Exception $e) {
            return $this->sendError('Updating Record Error: '.$e);
        }
    }

    /**
     * patch - Ptching requested record via key => value
     *
     * @param  int  $id
     * @param  string  $field
     * @param  mixed  $value
     * @return Response
     */
    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchRole = Role::whereId($id);
            $patchRole->update([
                "$field" => $value,
            ]);
            $res = Role::find($id);

            return $this->sendResponse($res, 'Role patched');
            // return response()->json($res, 200);
        } catch (Exception $e) {
            return $this->sendError('Patching Record Error: '.$e);
            // return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        // check exists
        $roleItem = Role::find($id);

        if ($roleItem === null) {
            return $this->sendError('No Record for deleting Found');
        }

        // deleting
        try {

            $roleItem->delete($id);

            return $this->sendResponse($roleItem, "Role $id deleted");

        } catch (Exception $e) {
            $this->sendError('Deleting error: '.$e);
        }

    }
}

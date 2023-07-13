<?php

namespace App\Http\Controllers\Users;

use App\Models\RolePermission;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;

class RolePermissionController extends BaseController
{

        /**
     * Display a listing of the resource with names.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexLookup()
    {
        // $res = UserRole::userRolesLookup();
        // $res->with('user')->toSql();

        $res = RolePermission::rolePermissionsLookup()->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Roles Permissions Lookup List", $paginator);

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = RolePermission::get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Roles Permissions List", $paginator);

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

        $res = RolePermission::limit($itemsPerPage)->offset($offset)->get();

        $paginator = PaginatorController::Paginate($res->count(), $itemsPerPage, $currentPage);

        return $this->sendResponse($res, "Roles Permissions List", $paginator);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RolePermission  $rolePermission
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = RolePermission::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Role Permission (id = $id) found");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RolePermission  $rolePermission
     * @return \Illuminate\Http\Response
     */
    public function edit(RolePermission $rolePermission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RolePermission  $rolePermission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RolePermission $rolePermission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RolePermission  $rolePermission
     * @return \Illuminate\Http\Response
     */
    public function destroy(RolePermission $rolePermission)
    {
        //
    }
}

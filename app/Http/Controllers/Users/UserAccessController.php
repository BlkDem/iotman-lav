<?php

namespace App\Http\Controllers\Users;

// use App\Http\Controllers\Controller;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\UserRole;
use Exception;
use Illuminate\Http\Request;

class UserAccessController extends BaseController
{
    public function getUserRoles($id)
    {
        $res = UserRole::where('user_id', $id)->first();
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        $userRoles = UserRole::userRolesWhereUserID($id)->get();

        return $this->sendResponse($userRoles, "Roles for user (id = $id)");

    }

    /**
     * getTotalRecords - Getting records count
     *
     * @return int
     */
    private function getTotalRecords()
    {
        return UserRole::get()->count();
    }

    /**
     * pageWhereAlbum Get Images on a selected page where Album ID
     *
     * @param  int  $currentPage  - selected page
     * @param  int  $itemsPerPage  - items per page
     * @param  int  $album_id  - Album ID
     * @return \Illuminate\Http\Response
     */
    public function pageWhereUser($currentPage, $itemsPerPage, $user_id)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = UserRole::userRolesWhereUserID($user_id)
            ->limit($itemsPerPage)->offset($offset)
            // ->orderBy('slug', 'asc')
            ->get();

        $total = UserRole::where('user_id', $user_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'User Roles List', $paginator);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = UserRole::get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'User Roles List', $paginator);

    }

    /**
     * Display a listing of the resource with names.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexLookup()
    {
        // $res = UserRole::userRolesLookup();
        // $res->with('user')->toSql();

        $res = UserRole::userRolesLookup()->get();
        // $res = UserRole::with('users')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'User Roles Lookup List', $paginator);

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

        $res = UserRole::limit($itemsPerPage)->offset($offset)->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), $itemsPerPage, $currentPage);

        return $this->sendResponse($res, 'User Roles List', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'users_roles');
        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
            // return response()->json($validator->errors(), 400);
        }
        try {
            $newRole = UserRole::create($request->all());

            return $this->sendSuccess($newRole, 'Role created', 201);
        } catch (Exception $e) {
            return $this->sendError('Error creatig record: '.$e);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserRole $updateRole)
    {
        $validator = ValidatorRules::MakeValidate($request, 'users_roles');
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {
            $updateRole->update($request->all());

            return $this->sendResponse($updateRole, 'Record updated');
        } catch (Exception $e) {
            return $this->sendError('Updating Record Error: '.$e);
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
        $roleItem = UserRole::find($id);

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

<?php

namespace App\Http\Controllers;

use App\Http\Middleware\ValidatorRules;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends BaseController
{
    /**
     * getTotalRecords - get records count
     *
     * @return int
     */
    private function getTotalRecords()
    {
        return User::get()->count();
    }

    /**
     * index - get all users
     *
     * @return Response
     */
    public function index()
    {

        $res = DB::table('users')
            ->select('users.id as id', 'users.name as user_name')
            ->orderBy('user_name', 'asc')
            ->get();

        // User::orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Users List', $paginator);
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

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = User::limit($itemsPerPage)->offset($offset)->orderBy('name', 'asc')->get();
        $total = User::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Users List', $paginator);

        $usersDataSet = User::get();

        if ($usersDataSet->count() == 0) {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }

        $_returnData = ['data' => $usersDataSet];
        $_returnData['meta'] = ['count' => $usersDataSet->count()];

        return response()->json($_returnData, 200);
    }

    /**
     * indexLookup - Getting users with their devices
     *
     * @param  int  $currentPage
     * @param  int  $itemsPerPage
     * @return Response
     */
    public function indexLookup($currentPage = 0, $itemsPerPage = 10)
    {
        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = DB::table('users')
            ->select('users.id as id', 'users.name as user_name')
            ->leftJoin('user_devices', 'users.id', '=', 'user_devices.user_id')
            ->selectRaw('count(user_devices.id) as devices_count')
            ->groupBy('id', 'user_name')
            ->limit($itemsPerPage)
            ->offset($offset)
            ->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int) $itemsPerPage, $currentPage);

        return $this->sendResponse($res, 'Users (with devices) lookup List', $paginator);

    }

    /**
     * show - Getting requested record
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return (is_null(User::findOrFail($id))) ?
            response()->json(['Error' => 'true', 'Message' => 'Record '.$id.' Not Found'], 404)
            :
            response()->json(User::find($id), 200);
    }

    public function roles($id)
    {

        $res = User::find($id)->user_roles()->get();
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "Roles for user (id = $id) found");
    }

    /**
     * store - Creating a new user
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'users');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newUser = User::create($request->all());

            return $this->sendResponse($newUser, 'New User Created', 201);
        } catch (Exception $e) {
            return $this->sendError('Error creating user: '.$e);
        }
    }

    /**
     * update Updating requested record
     *
     * @return Response
     */
    public function update(Request $request, User $updateUser)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateUser->update($request->all());

            return $this->sendResponse($updateUser, 'User updated', 200);
        } catch (Exception $e) {
            return response()->json('Updating Record Error: '.$e, 400);
        }
    }

    /**
     * patch - Patching requested record via key => value
     *
     * @param  int  $id
     * @param  string  $field
     * @param  mixed  $value
     * @return Response
     */
    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchUser = User::whereId($id);
            $patchUser->update([
                "$field" => $value,
            ]);
            $res = User::find($id);

            return response()->json($res, 200);
        } catch (Exception $e) {
            return response()->json('Patching Record Error: '.$e, 400);
        }
    }

    /**
     * destroy - Deleting requested record
     *
     * @return Response
     */
    public function destroy(Request $request, User $deleteUser)
    {
        try {
            return ($deleteUser->delete($request->all()) !== null) ?
                response()->json(null, 204)
                :
                response()->json('Error deleting', 200);
        } catch (Exception $e) {
            return response()->json('Deleting Record Error: '.$e, 400);
        }
    }
}

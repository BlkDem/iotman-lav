<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Middleware\ValidatorRules;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use Illuminate\Support\Facades\DB;
use Exception;

class UserController extends BaseController
{
    private function getTotalRecords() {
        return User::get()->count();
    }

    public function index(){

        $res = DB::table('users')
        ->select('users.id as id', 'users.name as user_name')
        ->orderBy('user_name', 'asc')
        ->get()
        ;

        //User::orderBy('name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Device Types List", $paginator);
    }

    public function page($currentPage=0, $itemsPerPage=10)
    {

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = User::limit($itemsPerPage)->offset($offset)->orderBy('name', 'asc')->get();
        $total = User::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Users List", $paginator);

        $usersDataSet = User::get();

        if ($usersDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }

        $_returnData = ['data' => $usersDataSet];
        $_returnData['meta'] = Array('count' => $usersDataSet->count());

        return response()->json($_returnData, 200);
    }

    public function indexLookup($currentPage=0, $itemsPerPage=10)
    {
        // $res = Album::select('id','album_name')->orderBy('id', 'asc')->get();

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('users')
                ->select('users.id as id' , 'users.name as user_name')
                ->leftJoin('user_devices', 'users.id', '=', 'user_devices.user_id')
                ->selectRaw('count(user_devices.id) as devices_count')
                ->groupBy('id', 'user_name')
                ->limit($itemsPerPage)
                ->offset($offset)
                ->get();


        // $total = Album::get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int)$itemsPerPage, $currentPage);

        return $this->sendResponse($res, "Users (with devices) lookup List", $paginator);

    }

    public function show($id)
    {
        return (is_null(User::findOrFail($id)))?
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            :
            response()->json(User::find($id), 200);
    }

    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'users');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newUser = User::create($request->all());
            return $this->sendResponse($newUser, "New User Created", 201);
            // return response()->json($newUser, 201);
        }
        catch (Exception $e) {
            return $this->sendError("Error creating user: " . $e);
            // return response()->json('Creating Record Error: ' . $e, 400);
        }
    }

    public function update(Request $request, User $updateUser)
    {
        $validator = ValidatorRules::MakeValidate($request, 'user');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateUser->update($request->all());
            return $this->sendResponse($updateUser, "User updated", 200);
            // return response()->json($updateUser, 200);
        }
        catch (Exception $e) {
            return response()->json('Updating Record Error: ' . $e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchUser = User::whereId($id);
            $patchUser->update([
                "$field" => $value
            ]);
            $res = User::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    public function destroy(Request $request, User $deleteUser)
    {
        try {
            return ($deleteUser->delete($request->all()) !== null)?
                response()->json(null, 204)
                :
                response()->json('Error deleting', 200);
        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }
}

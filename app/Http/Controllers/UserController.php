<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Middleware\ValidatorRules;
use Exception;

class UserController extends Controller
{
    public function index()
    {
        $usersDataSet = User::get();
        if ($usersDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);
        }
        return response()->json(['data' => $usersDataSet], 200);
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
            return response()->json($newUser, 201);
        }
        catch (Exception $e) {
            return response()->json('Creating Record Error: ' . $e, 400);
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
            return response()->json($updateUser, 200);
        }
        catch (Exception $e) {
            return response()->json('Updating Record Error: ' . $e, 400);
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

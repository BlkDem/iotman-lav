<?php

namespace App\Http\Controllers;

use App\Http\Middleware\ValidatorRules;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    public function UserInfo(Request $request)
    {
        $authUser = Auth::user();
        if ($authUser != null) {
            $success = [
                'token' => $request->bearerToken(),
                'name' => $authUser->name,
                'ID' => $authUser->id,
            ];

            return $this->sendResponse($success, 'User Info');
        } else {
            return $this->sendError('No user info');
        }

    }

    public function signin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $authUser = Auth::user();
            $success['token'] = $authUser->createToken('UmolabApp')->plainTextToken;
            $success['name'] = $authUser->name;

            return $this->sendResponse($success, 'User signed in');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }

    public function signup(Request $request)
    {

        $validator = ValidatorRules::MakeValidate($request, 'users');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('UmolabApp')->plainTextToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success, 'User created successfully.');
    }
}

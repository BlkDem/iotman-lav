<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserinfoController extends Controller
{
    public function show()
    {
        $user = Auth::user();
        if ($user != null) {
            return response()->json(
                [
                    'ID' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    // 'password' => $user->password,
                    // 'token' => $user->getRememberToken()
                ]);
        }

        return response()->json(['User' => 'No user info'], 200);
    }
}

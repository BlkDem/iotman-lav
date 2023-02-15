<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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
                    'password' => $user->password
                ]);
        }
        return response()->json(['User' => ' no info'], 200);
    }
}

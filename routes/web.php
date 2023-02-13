<?php

use App\Http\Controllers\Auth\LogoutController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Auth;

// Auth routes

Route::post('/login', [LoginController::class, 'login']);
Route::group(['middleware' => ['auth']], function() {
    /**
    * Logout Route
    */
    Route::get('/logout', [LogoutController::class, 'perform']);
 });
Route::get('/', [RootController::class, 'index']);
Auth::routes();

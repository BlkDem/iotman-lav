<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Auth;

Route::group(['middleware' => ['auth']], function() {
    /**
    * Logout Route
    */
    // Route::get('/logout', [LogoutController::class, 'perform']);
    Route::get('/logout', [LoginController::class, 'logout']);
 });

// Route::get('/{vue?}', [RootController::class, 'index'])->where('vue', '[\/\w\.-]*');

Route::get('/', [RootController::class, 'index']);
Route::get('/users', [RootController::class, 'index']);
Route::get('/users/{id}', [RootController::class, 'index']);
Route::get('/devices', [RootController::class, 'index']);
Route::get('/device_types', [RootController::class, 'index']);
Route::get('/param_types', [RootController::class, 'index']);
Route::get('/micros', [RootController::class, 'index']);
Route::get('/device_micros', [RootController::class, 'index']);
Route::get('/user_devices', [RootController::class, 'index']);
Route::get('/imagelib', [RootController::class, 'index']);
Route::get('/albums', [RootController::class, 'index']);
Route::get('/images', [RootController::class, 'index']);
Route::get('/presets', [RootController::class, 'index']);

Auth::routes();

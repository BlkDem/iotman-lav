<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Auth;

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    // return what you want
});

Route::group(['middleware' => ['auth']], function() {
    /**
    * Logout Route
    */
    Route::get('/logout', [LoginController::class, 'logout']);
 });

/**
 * login route to backend
 */
Route::get('/login', [RootController::class, 'index']);

/**
 * Other vue routes
 */

//  Route::get('/auth', [RootController::class, 'index']);




/**
 * Authentication routes
 */
Auth::routes();

Route::get('/{vue?}', [RootController::class, 'index'])->where('vue', '[\/\w\.-]*');

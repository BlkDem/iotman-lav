<?php

use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::get('{any}', function () {
//     return view('home');
// })->where('any', '.*');

/**
 * Authentication routes
 */
Auth::routes();

Route::get('/{vue?}', [RootController::class, 'index'])->where('vue', '[\/\w\.-]*');

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Auth;

Route::get('/', [RootController::class, 'index']);
Auth::routes();

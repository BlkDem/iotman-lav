<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http;
use App\Http\Controllers\RootController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('login');
})->name('login');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
*/

Route::get('/{any}', [RootController::class, 'index'])->where('any', '.*');
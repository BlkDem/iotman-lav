<?php

use App\Http\Controllers\DeviceTypeController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DevicesViewController;
use App\Http\Controllers\DeviceUserController;
use App\Http\Controllers\DeviceUsersViewController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//CRUD routes for table 'device_types'

Route::post('/device_types/create', [DeviceTypeController::class, 'store']);
Route::get('/device_types/read', [DeviceTypeController::class, 'index']);
Route::get('/device_types/read/{id}', [DeviceTypeController::class, 'show']);
Route::put('/device_types/update/{updateDeviceType}', [DeviceTypeController::class, 'update']);
Route::delete('/device_types/delete/{deleteDeviceType}', [DeviceTypeController::class, 'destroy']);

//CRUD routes for table 'devices'

Route::post('/devices/create', [DeviceController::class, 'store']);
Route::get('/devices/read', [DevicesViewController::class, 'index']);
Route::get('/devices/read/{id}', [DevicesViewController::class, 'show']);
Route::put('/devices/update/{updateDevice}', [DeviceController::class, 'update']);
Route::delete('/devices/delete/{deleteDevice}', [DeviceController::class, 'destroy']);

//CRUD routes for table 'user_devices'

Route::post('/user_devices/create', [DeviceUserController::class, 'store']);
Route::get('/user_devices/read', [DeviceUsersViewController::class, 'index']);
Route::get('/user_devices/read/{device_user_id}', [DeviceUsersViewController::class, 'show']);
Route::put('/user_devices/update/{updateDeviceUser}', [DeviceUserController::class, 'update']);
Route::delete('/user_devices/delete/{deleteDeviceUser}', [DeviceUserController::class, 'destroy']);
Route::get('/user_devices/show', [DeviceUserController::class, 'UserDevices']);

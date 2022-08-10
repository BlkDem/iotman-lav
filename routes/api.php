<?php

use App\Http\Controllers\DeviceTypeController;
use App\Http\Controllers\DeviceController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//CRUD routes for table 'device_types'

Route::post('/device_types/create', [DeviceTypeController::class, 'device_types_create']);
Route::get('/device_types/read', [DeviceTypeController::class, 'device_types']);
Route::get('/device_types/read/{id}', [DeviceTypeController::class, 'device_types_byId']);
Route::put('/device_types/update/{updateDeviceType}', [DeviceTypeController::class, 'device_types_update']);
Route::delete('/device_types/delete/{deleteDeviceType}', [DeviceTypeController::class, 'device_types_delete']);

//CRUD routes for table 'devices'

Route::post('/devices/create', [DeviceController::class, 'devices_create']);
Route::get('/devices/read', [DeviceController::class, 'devices']);
Route::get('/devices/read/{id}', [DeviceController::class, 'devices_byId']);
Route::put('/devices/update/{updateDevice}', [DeviceController::class, 'devices_update']);
Route::delete('/devices/delete/{deleteDevice}', [DeviceController::class, 'devices_delete']);

//CRUD routes for table 'user_devices'

Route::post('/user_devices/create', [UserDevice::class, 'user_devices_create']);
Route::get('/user_devices/read', [UserDevice::class, 'user_devices']);
Route::get('/user_devices/read/{id}', [UserDevice::class, 'user_devices_byId']);
Route::put('/user_devices/update/{updateUserDevice}', [UserDevice::class, 'user_devices_update']);
Route::delete('/user_devices/delete/{deleteUserDevice}', [UserDevice::class, 'user_devices_delete']);
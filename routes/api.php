<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DeviceTypeController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\DevicesViewController;
use App\Http\Controllers\DeviceUserController;
use App\Http\Controllers\DeviceUsersViewController;
use App\Http\Controllers\Auth\UserinfoController;
use App\Http\Controllers\UserDevicesCountController;
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

//Login
Route::post('/login', [AuthController::class, 'signin']);

//CRUD routes for table 'users'
Route::middleware('auth:sanctum')->group( function () {

Route::post('/users/create', [UserController::class, 'store']);
Route::get('/users/read', [UserController::class, 'index']);
Route::get('/users/read/{id}', [UserController::class, 'show']);
Route::put('/users/update/{updateUser}', [UserController::class, 'update']);
Route::delete('/users/delete/{deleteUser}', [UserController::class, 'destroy']);

//CRUD routes for table 'device_types'

Route::post('/device_type/create', [DeviceTypeController::class, 'store']);
Route::get('/device_types/read', [DeviceTypeController::class, 'index']);
Route::get('/device_types/read/{id}', [DeviceTypeController::class, 'show']);
Route::put('/device_type/update/{updateDeviceType}', [DeviceTypeController::class, 'update']);
Route::delete('/device_types/delete/{id}', [DeviceTypeController::class, 'destroy']);

//CRUD routes for table 'devices'

Route::post('/devices/create', [DeviceController::class, 'store']);
Route::get('/devices/read', [DevicesViewController::class, 'index']);
Route::get('/devices/read/{id}', [DevicesViewController::class, 'show']);
Route::put('/devices/update/{updateDevice}', [DeviceController::class, 'update']);
Route::delete('/devices/delete/{id}', [DeviceController::class, 'destroy']);

//CRUD routes for table 'user_devices'

Route::post('/user_devices/create', [DeviceUserController::class, 'store']);
Route::get('/user_devices/read', [DeviceUsersViewController::class, 'index']);
Route::get('/user_devices/read/{device_user_id}', [DeviceUsersViewController::class, 'show']);
Route::put('/user_devices/update/{updateDeviceUser}', [DeviceUserController::class, 'update']);
Route::delete('/user_devices/delete/{id}', [DeviceUserController::class, 'destroy']);
Route::get('/user_devices/show', [DeviceUserController::class, 'UserDevices']);

//User Devices Count
Route::get('/user_device_count/read', [UserDevicesCountController::class, 'index']);
Route::get('/user_device_count/read/{id}', [UserDevicesCountController::class, 'show']);

//Auth Userinfo

Route::get('/authuser', [UserinfoController::class, 'show']);
Route::get('/user', [AuthController::class, 'UserInfo']);
Route::get('/username', [AuthController::class, 'GetUserName']);

});

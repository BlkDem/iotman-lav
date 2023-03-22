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
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ImageStoreController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MicroController;
use App\Http\Controllers\DevBlogController;
use App\Http\Controllers\DeviceMicroController;
use App\Http\Controllers\ImagesAlbumController;

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

// Route::get('/user/{name}', function ($name) {
//     //
// })->where('name', '[A-Za-z]+');

//Login
Route::post('/login', [AuthController::class, 'signin']);

//CRUD routes for table 'users'
Route::middleware('auth:sanctum')->group( function () {

//CRUD routes for model 'users'

Route::controller(UserController::class)->group(function () {
    Route::post('/user/create', 'store');
    Route::get('/users/read', 'index');
    Route::get('/users/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get('/user/read/{id}', 'show');
    Route::put('/user/update/{updateUser}', 'update');
    Route::delete('/user/delete/{id}', 'destroy');
    Route::patch('/user/patch/{id}/{field}/{value}', 'patch');
});

//CRUD routes for model 'images'

Route::controller(ImageController::class)->group(function () {
    Route::post('/image/create', 'store');
    Route::get('/images/read', 'index');
    Route::get('/images/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get('/images/read/page/{currentPage}/{itemsPerPage}/{album_id}', 'pageWhereAlbum');
    Route::get('/image/read/{id}', 'show');
    Route::put('/image/update/{updateImageId}', 'update');
    Route::delete('/image/delete/{id}', 'destroy');
    Route::patch('/image/patch/{id}/{field}/{value}', 'patch');
});

// Route::controller(ImagesAlbumController::class)->group(function () {
    // Route::get('/images/read', 'index');
    // Route::get('/images/read/page/{currentPage}/{itemsPerPage}', 'page');
    // Route::get('/images/read/page/{currentPage}/{itemsPerPage}/{album_id}', 'pageWhereAlbum');
// });

//Upload and Save Image to storage.disk 'images'
Route::post('/image/update_image/{imageId}', [ImageStoreController::class, 'updateImage']);

//CRUD routes for model 'albums'

Route::controller(AlbumController::class)->group(function () {
    Route::post('/album/create', 'store');
    Route::get('/albums/read', 'index');
    Route::get('/albums/lookup', 'indexLookup');
    Route::get('/albums/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get('/album/read/{id}', 'show');
    Route::put('/album/update/{updateAlbum}', 'update');
    Route::delete('/album/delete/{id}', 'destroy');
    Route::patch('/album/patch/{id}/{field}/{value}', 'patch');
});

//CRUD routes for model 'micros'

Route::controller(MicroController::class)->group(function () {
    Route::post(  '/micro/create', 'store');
    Route::get(   '/micros/read', 'index');
    Route::get(   '/micros/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get(   '/micro/read/{id}', 'show');
    Route::put(   '/micro/update/{updateMicro}', 'update');
    Route::delete('/micro/delete/{id}', 'destroy');
    Route::patch('/micro/patch/{id}/{field}/{value}', 'patch');
});

//CRUD routes for model 'device_micros'

Route::controller(DeviceMicroController::class)->group(function () {
    Route::post(  '/device_micro/create', 'store');
    Route::get(   '/device_micros/read', 'index');
    Route::get(   '/device_micros/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get(   '/device_micro/read/{id}', 'show');
    Route::put(   '/device_micro/update/{updateDeviceMicro}', 'update');
    Route::delete('/device_micro/delete/{id}', 'destroy');
    Route::patch('/device_micro/patch/{id}/{field}/{value}', 'patch');
});

//CRUD routes for model 'dev_blogs'

Route::controller(DevBlogController::class)->group(function () {
    Route::post(  '/dev_blog/create', 'store');
    Route::get(   '/dev_blogs/read', 'index');
    Route::get(   '/dev_blogs/read/page/{currentPage}/{itemsPerPage}', 'page');
    Route::get(   '/dev_blog/read/{id}', 'show');
    Route::put(   '/dev_blog/update/{updateDevBlog}', 'update');
    Route::delete('/dev_blog/delete/{id}', 'destroy');
    Route::patch('/dev_blog/patch/{id}/{field}/{value}', 'patch');
});


//CRUD routes for model 'device_types'

Route::post('/device_type/create', [DeviceTypeController::class, 'store']);
Route::get('/device_types/read/', [DeviceTypeController::class, 'index']);
Route::get('/device_types/read/page/{currentPage}/{itemsPerPage}', [DeviceTypeController::class, 'page']);
Route::get('/device_types/read/{id}', [DeviceTypeController::class, 'show']);
Route::patch('/device_type/patch/{id}/{field}/{value}', [DeviceTypeController::class, 'patch']);
Route::put('/device_type/update/{updateDeviceType}', [DeviceTypeController::class, 'update']);
Route::delete('/device_type/delete/{id}', [DeviceTypeController::class, 'destroy']);

//CRUD routes for model 'devices'

Route::post('/devices/create', [DeviceController::class, 'store']);
Route::get('/devices/read', [DevicesViewController::class, 'index']);
Route::get('/devices/read/page/{currentPage}/{itemsPerPage}', [DevicesViewController::class, 'page']);
Route::get('/devices/read/{id}', [DevicesViewController::class, 'show']);
Route::put('/devices/update/{updateDevice}', [DeviceController::class, 'update']);
Route::delete('/devices/delete/{id}', [DeviceController::class, 'destroy']);
Route::patch('/device/patch/{id}/{field}/{value}', [DeviceController::class, 'patch']);

//CRUD routes for model 'user_devices'

Route::post('/user_device/create/', [DeviceUserController::class, 'store']);
Route::get('/user_devices/read/', [DeviceUsersViewController::class, 'index']);
Route::get('/user_devices/read/page/{currentPage}/{itemsPerPage}', [DeviceUsersViewController::class, 'page']);
Route::get('/user_devices/read/{device_user_id}', [DeviceUsersViewController::class, 'show']);
Route::put('/user_device/update/{updateDeviceUser}', [DeviceUserController::class, 'update']);
Route::delete('/user_device/delete/{id}', [DeviceUserController::class, 'destroy']);
Route::get('/user_devices/show', [DeviceUserController::class, 'UserDevices']);
Route::patch('/user_device/patch/{id}/{field}/{value}', [DeviceUserController::class, 'patch']);


//User Devices Count
Route::get('/user_device_count/read', [UserDevicesCountController::class, 'index']);
Route::get('/user_device_count/read/{id}', [UserDevicesCountController::class, 'show']);

//Auth Userinfo
Route::get('/authuser', [UserinfoController::class, 'show']);
Route::get('/user', [AuthController::class, 'UserInfo']);
Route::get('/username', [AuthController::class, 'GetUserName']);

});

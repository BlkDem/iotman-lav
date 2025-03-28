<?php

use App\Http\Controllers\Auth\UserinfoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Common\PatchController;
use App\Http\Controllers\DevBlogController;
use App\Http\Controllers\Devices\DeviceController;
use App\Http\Controllers\Devices\DeviceMicroController;
use App\Http\Controllers\Devices\DevicesViewController;
use App\Http\Controllers\Devices\DeviceTypeController;
use App\Http\Controllers\Devices\DeviceUserController;
use App\Http\Controllers\Devices\DeviceUsersViewController;
use App\Http\Controllers\Devices\MicroController;
use App\Http\Controllers\Devices\MicroParamController;
use App\Http\Controllers\Devices\ParamTypeController;
use App\Http\Controllers\Helpers\AllModelController;
use App\Http\Controllers\Helpers\PresetController;
use App\Http\Controllers\Helpers\ServerStatusController;
use App\Http\Controllers\Images\AlbumController;
use App\Http\Controllers\Images\ImageController;
use App\Http\Controllers\Images\ImageRepositoryController;
use App\Http\Controllers\LoggerController;
use App\Http\Controllers\PriceGroupController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Users\PermissionController;
use App\Http\Controllers\Users\RoleController;
use App\Http\Controllers\Users\UserAccessController;
use App\Models\DeviceType;
use Illuminate\Support\Facades\Route;

// use App\Http\Controllers\ImagesAlbumController;

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

// Login
// Route::post('/login', [AuthController::class, 'signin']);

// Route::get('/test', [LoggerController::class, 'getLog']);

// public routes
Route::get('/device_types/supertod/', [DeviceTypeController::class, 'supertod']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {

    // CRUD routes for model 'price_groups'

    Route::controller(PriceGroupController::class)->group(function () {
        Route::get('/price_groups/read', 'index');
        Route::post('/price_group/create', 'store');
        Route::delete('/price_group/delete/{id}', 'destroy');
        Route::patch('/price_group/patch/{id}/{field}/{value}', 'patch');
        Route::get('/price_groups/lookup/{currentPage}/{itemsPerPage}', 'indexLookup');
    });

    // CRUD routes for model 'users'

    Route::controller(UserController::class)->group(function () {
        Route::post('/user/create', 'store');
        Route::get('/users/read', 'index');
        Route::get('/users/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/users/lookup/{currentPage}/{itemsPerPage}', 'indexLookup');
        Route::get('/user/read/{id}', 'show');
        Route::get('/user/roles/{id}', 'roles');
        Route::put('/user/update/{updateUser}', 'update');
        Route::delete('/user/delete/{id}', 'destroy');
        Route::patch('/user/patch/{id}/{field}/{value}', 'patch');
    });

    // Route::get('cache-data', function () {
    //     $user = \Cache::remember('user', 60, function() {
    //         return \App\Models\User::first();
    //     });
    // });

    // CRUD routes for model 'permissions'

    Route::controller(PermissionController::class)->group(function () {
        Route::post('/permission/create', 'store');
        Route::get('/permissions/read', 'index');
        Route::get('/permissions/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/permission/read/{id}', 'show');
        Route::put('/permission/update/{updatePermission}', 'update');
        Route::delete('/permission/delete/{id}', 'destroy');
        Route::patch('/permission/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'roles'

    Route::controller(RoleController::class)->group(function () {
        Route::post('/role/create', 'store');
        Route::get('/roles/read', 'index');
        Route::get('/roles/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/role/read/{id}', 'show');
        Route::put('/role/update/{updateRole}', 'update');
        Route::delete('/role/delete/{id}', 'destroy');
        Route::patch('/role/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'users_roles'

    Route::controller(UserAccessController::class)->group(function () {
        Route::post('/user_role/create', 'store');
        Route::get('/user_roles/read', 'index');
        Route::get('/user_roles/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/user_role/read/{id}', 'show');
        Route::put('/user_role/update/{updateRole}', 'update');
        Route::delete('/user_role/delete/{id}', 'destroy');
        Route::patch('/user_role/patch/{id}/{field}/{value}', 'patch');
        Route::get('/user_roles/user/{user_id}', 'getUserRoles');
        Route::get('/user_roles/lookup', 'indexLookup');
        Route::get('/user_roles/read/page/{currentPage}/{itemsPerPage}/{user_id}', 'pageWhereUser');
    });

    // CRUD routes for model 'images'

    Route::controller(ImageController::class)->group(function () {
        Route::post('/image/create', 'store');
        Route::get('/images/read', 'index');
        Route::get('/images/get_images', 'getImages');
        Route::get('/images/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/images/read/page/{currentPage}/{itemsPerPage}/{album_id}', 'pageWhereAlbum');
        Route::get('/image/read/{id}', 'show');
        Route::put('/image/update/{updateImage}', 'update');
        Route::delete('/image/delete/{id}', 'destroy');
        Route::patch('/image/patch/{id}/{field}/{value}', 'patch');
    });

    // Upload and Save Image to storage.disk 'images'
    Route::post('/image/update_image/{imageId}', [ImageRepositoryController::class, 'store']);
    Route::post('/image/upload_image/', [ImageRepositoryController::class, 'getStoredFileName']);

    // CRUD routes for model 'albums'

    Route::controller(AlbumController::class)->group(function () {
        Route::post('/album/create', 'store');
        Route::get('/albums/read', 'index');
        Route::get('/albums/lookup/{currentPage}/{itemsPerPage}', 'indexLookup');
        Route::get('/albums/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/album/read/{id}', 'show');
        Route::put('/album/update/{updateAlbum}', 'update');
        Route::delete('/album/delete/{id}', 'destroy');
        Route::patch('/album/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'presets'

    Route::controller(PresetController::class)->group(function () {
        Route::post('/preset/create', 'store');
        Route::get('/presets/read', 'index');
        Route::get('/presets/group/{group}', 'indexGroup');
        Route::get('/presets/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/preset/read/{id}', 'show');
        Route::put('/preset/update/{updatePreset}', 'update');
        Route::delete('/preset/delete/{id}', 'destroy');
        Route::patch('/preset/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'micros'

    Route::controller(MicroController::class)->group(function () {
        Route::post('/micro/create', 'store');
        Route::get('/micros/read', 'index');
        Route::get('/micros/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/micro/read/{id}', 'show');
        Route::put('/micro/update/{updateMicro}', 'update');
        Route::delete('/micro/delete/{id}', 'destroy');
        Route::patch('/micro/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'micro_params'

    Route::controller(MicroParamController::class)->group(function () {
        Route::post('/micro_param/create', 'store');
        Route::get('/micro_params/read', 'index');
        Route::get('/micro_params/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/micro_params/read/page/{currentPage}/{itemsPerPage}/{device_micro_id}', 'pageWhereMicroDevice');
        Route::get('/micro_param/read/{id}', 'show');
        Route::put('/micro_param/update/{updateParam}', 'update');
        Route::delete('/micro_param/delete/{id}', 'destroy');
        Route::patch('/micro_param/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'device_micros'

    Route::controller(DeviceMicroController::class)->group(function () {
        Route::post('/device_micro/create', 'store');
        Route::get('/device_micros/read', 'index');
        Route::get('/device_micro/dash/{id}', 'dash');
        Route::get('/device_micros/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/device_micros/read/page/{currentPage}/{itemsPerPage}/{device_id}', 'pageWhereDevice');
        Route::get('/device_micro/read/{id}', 'show');
        Route::put('/device_micro/update/{updateDeviceMicro}', 'update');
        Route::delete('/device_micro/delete/{id}', 'destroy');
        Route::patch('/device_micro/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'dev_blogs'

    Route::controller(DevBlogController::class)->group(function () {
        Route::post('/dev_blog/create', 'store');
        Route::get('/dev_blogs/read', 'index');
        Route::get('/dev_blogs/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/dev_blog/read/{id}', 'show');
        Route::put('/dev_blog/update/{updateDevBlog}', 'update');
        Route::delete('/dev_blog/delete/{id}', 'destroy');
        Route::patch('/dev_blog/patch/{id}/{field}/{value}', 'patch');
        Route::get('/dev_blog/daysofthemonth/{date}', 'daysofthemonth');
    });

    Route::controller(LoggerController::class)->group(function () {
        // Route::post(  '/log/create', 'store');
        Route::get('/logs/read', 'index');
        Route::get('/logs/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/log/read/{id}', 'show');
        Route::get('/logs/daysofthemonth/{date}', 'daysofthemonth');
        // Route::put(   '/log/update/{updateLog}', 'update');
        // Route::delete('/log/delete/{id}', 'destroy');
        // Route::patch( '/log/patch/{id}/{field}/{value}', 'patch');
    });

    // CRUD routes for model 'param_types'

    Route::controller(ParamTypeController::class)->group(function () {
        Route::post('/param_type/create', 'store');
        Route::get('/param_types/read/', 'index');
        Route::get('/param_types/read/page/{currentPage}/{itemsPerPage}', 'page');
        Route::get('/param_type/read/{id}', 'show');
        Route::patch('/param_type/patch/{id}/{field}/{value}', 'patch');
        Route::put('/param_type/update/{updateParamType}', 'update');
        Route::delete('/param_type/delete/{id}', 'destroy');

    });

    // CRUD routes for model 'device_types'

    Route::post('/device_type/create', [DeviceTypeController::class, 'store']);
    Route::get('/device_types/read/', [DeviceTypeController::class, 'index']);
    // Route::get('/device_types/supertod/', [DeviceTypeController::class, 'supertod']);
    Route::get('/device_types/read/page/{currentPage}/{itemsPerPage}', [DeviceTypeController::class, 'page']);
    Route::get('/device_types/read/{id}', [DeviceTypeController::class, 'show']);
    Route::patch('/device_type/patch/{id}/{field}/{value}', [DeviceTypeController::class, 'patch']);
    Route::put('/device_type/update/{updateDeviceType}', [DeviceTypeController::class, 'update']);
    Route::delete('/device_type/delete/{id}', [DeviceTypeController::class, 'destroy']);

    // CRUD routes for model 'devices'

    Route::post('/devices/create', [DeviceController::class, 'store']);
    Route::get('/devices/read', [DevicesViewController::class, 'index']);
    Route::get('/devices/read/page/{currentPage}/{itemsPerPage}', [DevicesViewController::class, 'page']);
    Route::get('/devices/lookup/{currentPage}/{itemsPerPage}', [DevicesViewController::class, 'indexLookup']);
    Route::get('/devices/read/{id}', [DevicesViewController::class, 'show']);
    Route::put('/devices/update/{updateDevice}', [DeviceController::class, 'update']);
    Route::delete('/devices/delete/{id}', [DeviceController::class, 'destroy']);
    Route::patch('/device/patch/{id}/{field}/{value}', [DeviceController::class, 'patch']);

    // CRUD routes for model 'user_devices'

    Route::post('/user_device/create/', [DeviceUserController::class, 'store']);
    Route::get('/user_devices/read/', [DeviceUsersViewController::class, 'index']);
    Route::get('/user_devices/read/page/{currentPage}/{itemsPerPage}', [DeviceUsersViewController::class, 'page']);
    Route::get('/user_devices/read/page/{currentPage}/{itemsPerPage}/{user_id}', [DeviceUsersViewController::class, 'pageWhereUser']);

    Route::get('/user_devices/read/{id}', [DeviceUsersViewController::class, 'show']);
    Route::put('/user_device/update/{updateDeviceUser}', [DeviceUserController::class, 'update']);
    Route::delete('/user_device/delete/{id}', [DeviceUserController::class, 'destroy']);
    Route::patch('/user_device/patch/{id}/{field}/{value}', [DeviceUserController::class, 'patch']);

    // Route::group(['middleware' => 'role:admin'], function() {
    //     Route::get('/dashboard', function() {
    //        return 'Test admin';
    //     });
    //  });

    // Auth Userinfo
    Route::get('/authuser', [UserinfoController::class, 'show']);
    Route::get('/user', [AuthController::class, 'UserInfo']);
    Route::get('/username', [AuthController::class, 'GetUserName']);
    // Route::get('/getmodel', function () {

    //     $allModels = new AllModelController();
    //     dd($allModels->getAllModels());

    //     // dd($model::all());
    //     // do some filtering, then return the model
    //     // return $models;
    // });

    // Route::get('/sysinfo/{cmd}', [ServerStatusController::class, 'getServerLoad']);

    Route::patch('/device_type/patch/{id}/{field}/{value}', function (Request $request) {
        return (new PatchController)($request, new DeviceType);
    });

    // Route::group(['middleware' => 'role:admin'], function() {

    // });

});

 <?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\DeviceTypeController;
use Illuminate\Http;

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

Route::get('/', function () {
    return view('login');
})->name('login');

Route::post('/', function (\Illuminate\Http\Request $request) {
    $email = $request->post('email');
    $password = $request->post('password');
    //$password = Hash::make($password);
    //dd($password);
    $result = \Illuminate\Support\Facades\Auth::attempt([
        'email' => $email,
        'password' => $password
    ]);
    
    if ($result) {
        return redirect(route('home'));
    }
    return redirect(route('login'));
});

Route::get('/web2', function () {
    return view('login');
})->name('login');

Route::post('/web2', function (\Illuminate\Http\Request $request) {
    $email = $request->post('email');
    $password = $request->post('password');
    //$password = Hash::make($password);
    //dd($password);
    $result = \Illuminate\Support\Facades\Auth::guard('web2')->attempt([
        'email' => $email,
        'password' => $password
    ]);
    
    if ($result) {
        return redirect(route('home2'));
    }
    return redirect(route('login2'));
});

Route::get('/security-1', function () {
    return view('security');
})->middleware('auth:web2')->name('home');

Route::get('/security-2', function () {
    return view('security');
})->middleware('auth')->name('home2');

Route::get('/logout', function () {
    \Illuminate\Support\Facades\Auth::guard('web')->logout();
});

Route::get('/logout2', function () {
    \Illuminate\Support\Facades\Auth::guard('web2')->logout();
});

Route::get('/device_types', 'DeviceTypeController@index');

Route::prefix('v1')
    ->name('v1')
    ->group(function() {
        Route::get('/device_types', [DeviceTypeController::class], 'index')
            ->name('device_types.index');
        Route::get('/device_types/{device_type}', [DeviceTypeController::class], 'show')
            ->name('device_types.show');
        Route::post('/device_types', [DeviceTypeController::class], 'store')
            ->name('device_types.store');
        Route::put('/device_types/{device_type}', [DeviceTypeController::class], 'update')
            ->name('device_types.update');
        Route::delete('/device_types/{device_type}', [DeviceTypeController::class], 'destroy')
            ->name('device_types.delete');        
    });

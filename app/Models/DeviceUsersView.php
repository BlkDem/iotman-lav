<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DeviceUsersView
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUsersView query()
 * @mixin \Eloquent
 */
class DeviceUsersView extends Model
{
    use HasFactory;

    protected $table = 'Device_DeviceTypes_UserDevices';
}

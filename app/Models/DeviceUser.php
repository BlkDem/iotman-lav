<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceUser extends Model
{
    use HasFactory;

    protected $table = 'Device_DeviceTypes_UserDevices';

    protected $fillable = [
        'id',
        'user_device_name',
        'user_device_pass',
        'device_id',
        'device_type_name',
        'device_type_image',
        'created_at',
        'updated_at',
        'user_id'
    ];
}

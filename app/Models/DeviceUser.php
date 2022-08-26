<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceUser extends Model
{
    use HasFactory;

    protected $table = 'user_devices';

    protected $fillable = [
        'id',
        'user_device_name',
        'user_device_pass',
        'device_id',
        'device_type_name',
        'device_type_image',
        'device_HWID',
        'user_id'
    ];
}

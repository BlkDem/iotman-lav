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
        'created_at',
        'updated_at',
        'user_id'
    ];
}

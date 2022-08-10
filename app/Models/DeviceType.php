<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceType extends Model
{
    use HasFactory;

    protected $table = 'device_types';

    protected $fillable = [
        'id',
        'device_type_name',
        'device_type_desc',
        'device_type_image',
        'created_at',
        'updated_at'
    ];
}

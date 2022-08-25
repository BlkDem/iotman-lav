<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $table = 'Devices_DeviceTypes';

    protected $fillable = [
        'id',
        'device_name',
        'device_desc',
        'device_pass',
        'device_hwid',
        'device_type_id',
        'device_type_name',
        'device_type_desc',
        'device_type_image',
        'created_at',
        'updated_at'
    ];

    public function DeviceTypes()
    {
        return $this->hasMany(DeviceType::class);
    }

    public function DeviceType()
    {
      return $this->belongsTo(DeviceType::class);
    }
}

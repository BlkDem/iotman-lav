<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceMicro extends Model
{
    use HasFactory;

    protected $table = 'device_micros';

    protected $fillable = [
        'id',
        'device_id',
        'micro_id',
        'device_micro_desc',
        'device_micro_idx',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

}

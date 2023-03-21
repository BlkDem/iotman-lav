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
        'created_at',
        'updated_at'
    ];

}

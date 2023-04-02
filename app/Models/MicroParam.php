<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicroParam extends Model
{
    use HasFactory;

    protected $table = 'micro_params';

    protected $fillable = [
        'id',
        'param_name',
        'param_value',
        'param_min',
        'param_max',
        'param_suff',
        'param_desc',
        'param_in',
        'device_micro_id',
        'param_type_id',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

}

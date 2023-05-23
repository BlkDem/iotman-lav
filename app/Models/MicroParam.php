<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public static function deviceMicroParamsWhereID($device_micro_id)
    {
        return DB::table('micro_params')
        ->join('device_micros', 'device_micros.id', '=', 'micro_params.device_micro_id')
        ->join('param_types', 'param_types.id', '=', 'micro_params.param_type_id')
        ->select(
            'micro_params.id as id',
            'micro_params.param_name as param_name',
            'micro_params.param_desc as param_desc',
            'micro_params.param_value as param_value',
            'micro_params.param_suff as param_suff',
            'micro_params.param_min as param_min',
            'micro_params.param_max as param_max',
            'micro_params.param_in as param_in',
            'micro_params.param_type_id as param_type_id',

            'micro_params.created_at as created_at',
            'micro_params.updated_at as updated_at',

            'device_micros.id as device_micro_id',
            'device_micros.device_micro_idx as device_micro_idx',
            'device_micros.device_micro_desc as device_micro_desc',

            'param_types.id as param_type_id',
            'param_types.type_name as type_name',

            )
            ->where('device_micro_id', $device_micro_id);
    }

}

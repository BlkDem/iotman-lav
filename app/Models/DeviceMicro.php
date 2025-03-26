<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
        'updated_at',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function device()
    {
        return $this->belongsTo(Device::class)
            ->join('device_types',
                'device_types.id', '=', 'devices.device_type_id')
            ->select(
                'devices.*',
                'device_types.device_type_name',
                'device_types.device_type_desc',
                'device_types.device_type_image'
            );
    }

    public function microParams()
    {
        return $this->hasMany(MicroParam::class)
            ->join('param_types',
                'param_types.id', '=', 'micro_params.param_type_id')
            ->select(
                'micro_params.id',
                'micro_params.param_name',
                'micro_params.param_desc',
                'micro_params.param_suff',
                'micro_params.param_value',
                'micro_params.param_min',
                'micro_params.param_max',
                'micro_params.param_in',
                'micro_params.param_type_id',
                'param_types.type_name as param_type_name'
            )
            ->orderBy('param_type_id', 'asc');
    }

    public static function pageWhereDevice($device_id)
    {
        return DB::table('device_micros')
            ->join('micros', 'micros.id', '=', 'device_micros.micro_id')
            ->join('devices', 'devices.id', '=', 'device_micros.device_id')
            ->select(
                'device_micros.id as id',
                'device_micros.device_micro_desc as device_micro_desc',
                'device_micros.device_micro_idx as device_micro_idx',
                'device_micros.created_at as created_at',
                'device_micros.updated_at as updated_at',
                'micros.id as micro_id',
                'micros.micro_name as micro_name',
                'devices.id as device_id',
                'devices.device_name as device_name'
            )->where('device_micros.device_id', $device_id);
    }

    public static function joinMicrosDevices()
    {
        return DB::table('device_micros')
            ->join('micros', 'micros.id', '=', 'device_micros.micro_id')
            ->join('devices', 'devices.id', '=', 'device_micros.device_id')
            ->select(
                'device_micros.id as id',
                'device_micros.device_micro_desc as device_micro_desc',
                'device_micros.device_micro_idx as device_micro_idx',
                'device_micros.created_at as created_at',
                'device_micros.updated_at as updated_at',
                'micros.id as micro_id',
                'micros.micro_name as micro_name',
                'devices.id as device_id',
                'devices.device_name as device_name'
            );
    }
}

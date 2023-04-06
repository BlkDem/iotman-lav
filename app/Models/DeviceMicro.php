<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Device;
use App\Models\MicroParam;

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

    public function device() {
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

    public function microParams() {
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
}

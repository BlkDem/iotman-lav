<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * App\Models\DevicesView
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView query()
 *
 * @mixin \Eloquent
 */
class DevicesView extends Model
{
    protected $table = 'devices_devicetypes';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public static function controllerDeviceCount()
    {
        return DB::table('devices')
            ->select('devices.id as id',
                'devices.device_name as device_name',
                'device_types.device_type_image as device_type_image'
            )
            ->join('device_types', 'devices.device_type_id', '=', 'device_types.id')
            ->leftJoin('device_micros', 'devices.id', '=', 'device_micros.device_id')
            ->selectRaw('count(device_micros.id) as micros_count')
            ->groupBy('id', 'device_name', 'device_type_image')
            ->orderBy('micros_count', 'desc');
        // ->limit($itemsPerPage)
        // ->offset($offset)
        // ->get();

    }
}

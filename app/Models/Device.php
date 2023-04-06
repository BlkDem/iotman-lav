<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Device
 *
 * @property int $id
 * @property string $device_name
 * @property string|null $device_desc
 * @property string|null $device_hwid
 * @property string|null $device_pass
 * @property int $device_type_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\DeviceType $DeviceType
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\DeviceType[] $DeviceTypes
 * @property-read int|null $device_types_count
 * @method static \Database\Factories\DeviceFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Device newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Device newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Device query()
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceHwid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDevicePass($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereDeviceTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Device whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Device extends Model
{
    use HasFactory;

    protected $table = 'devices';

    protected $fillable = [
        'id',
        'device_name',
        'device_desc',
        // 'device_pass',
        // 'device_hwid',
        'device_type_id',
        'device_type_name',
        'device_type_desc',
        'device_type_image'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

}

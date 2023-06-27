<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DeviceType
 *
 * @property int $id
 * @property string $device_type_name
 * @property string $device_type_desc
 * @property string $device_type_image
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\DeviceTypeFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType query()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereDeviceTypeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceType whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function scopeSupertod($query)
    {
	    return $query->where('device_type_name', 'LIKE', 'ST-%');
    }

}

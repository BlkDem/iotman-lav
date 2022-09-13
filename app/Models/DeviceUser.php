<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DeviceUser
 *
 * @property int $id
 * @property string $user_device_name
 * @property string|null $user_device_pass
 * @property int $device_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereDeviceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserDeviceName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserDevicePass($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DeviceUser whereUserId($value)
 * @mixin \Eloquent
 */
class DeviceUser extends Model
{
    use HasFactory;

    protected $table = 'user_devices';

    protected $fillable = [
        'id',
        'user_device_name',
        'user_device_pass',
        'device_id',
        'device_type_name',
        'device_type_image',
        'device_HWID',
        'user_id'
    ];
}

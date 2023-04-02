<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DevicesView
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DevicesView query()
 * @mixin \Eloquent
 */
class DevicesView extends Model
{
    protected $table = 'Devices_DeviceTypes';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

}

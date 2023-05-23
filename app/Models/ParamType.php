<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\DeviceMicro;

class ParamType extends Model
{
    use HasFactory;

    protected $table = 'param_types';

    protected $fillable = [
        'id',
        'type_name',
        'type_desc',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected function param() {
        return $this->belongsTo(DeviceMicro::class);
    }

}

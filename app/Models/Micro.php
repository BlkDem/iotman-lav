<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Micro extends Model
{
    use HasFactory;

    protected $table = 'micros';

    protected $fillable = [
        'id',
        'micro_name',
        'micro_desc',
        'micro_config',
        'created_at',
        'updated_at'
    ];

}

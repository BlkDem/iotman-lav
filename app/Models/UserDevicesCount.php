<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDevicesCount extends Model
{
    use HasFactory;
    protected $table = 'users_with_devices';
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevBlog extends Model
{
    use HasFactory;

    protected $table = 'dev_blogs';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $fillable = [
        'id',
        'dev_blog_name',
        'dev_blog_desc',
        // 'created_at',
        // 'updated_at'
    ];

}

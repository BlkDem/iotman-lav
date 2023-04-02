<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Album;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';

    protected $fillable = [
        'id',
        'image_name',
        'image_desc',
        'album_id',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function album()
    {
        return $this->belongsTo(Album::class);
    }

}

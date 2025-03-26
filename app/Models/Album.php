<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Album extends Model
{
    use HasFactory;

    protected $table = 'albums';

    protected $fillable = [
        'id',
        'album_name',
        'album_desc',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'album_id', 'id');
    }

    public static function albumImagesCount()
    {
        return DB::table('albums')
            ->select('albums.id as id', 'albums.album_name as album_name')
            ->leftJoin('images', 'albums.id', '=', 'images.album_id')
            ->selectRaw('count(images.id) as images_count')
            ->groupBy('id', 'album_name');
    }
}

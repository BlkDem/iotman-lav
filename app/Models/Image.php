<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Album;
use Illuminate\Support\Facades\DB;

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

    public static function albumImages()
    {
        return DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->select('images.*', 'albums.id', 'albums.album_name');
    }

    public static function imageWithAlbum($id)
    {
        return DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->where('images.id', '=', $id)
            ->select('images.*', 'albums.id', 'albums.album_name');
            // ->get();
    }

    public static function imagesWhereAlbumID($album_id)
    {
        return DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->select(
                'images.id as id',
                'images.image_name as image_name',
                'images.image_desc as image_desc',
                'images.created_at as created_at',
                'images.updated_at as updated_at',
                'albums.id as album_id',
                'albums.album_name as album_name'
            )
            ->where('album_id', $album_id);
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DevBlog extends Model
{
    use HasFactory;

    protected $table = 'dev_blogs';

    protected $casts = [
        'created_at' => 'datetime:d.m.Y',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $fillable = [
        'id',
        'dev_blog_name',
        'dev_blog_desc',
        'created_at',
        'updated_at'
    ];

    public static function getDaysOfTheMonth($date)
    {

        $res = DevBlog::select( [DB::raw('DISTINCT(DAY(created_at)) as days') ])
            ->whereMonth('created_at', $date)
            ->orderBy('created_at', 'desc')
            ->get();

        return $res;
    }

    public static function getLastDays()
    {

        $res = DevBlog::select( [DB::raw('DISTINCT(DAY(created_at)) as days') ])
            // ->whereMonth('created_at', $date)
            ->orderBy('created_at', 'desc')
            // ->limit()
            ->get();

        return $res;
    }


}

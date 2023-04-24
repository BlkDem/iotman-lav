<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Logger extends Model
{
    use HasFactory;

    protected $table = "loggers";

    protected $fillable = [
        'id',
        'log_level',
        'log_category',
        'log_instance',
        'log_data',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];


    public static function getDaysOfTheMonth($date)
    {

        $res = Logger::select( [DB::raw('DAY(created_at) as day_of_month') ])
            ->whereMonth('created_at', $date)
            ->groupBy('day_of_month')
            ->orderBy('created_at', 'desc')
            ->get();

        $days["days"] = collect($res)->pluck('day_of_month');

        return $days;
    }

}

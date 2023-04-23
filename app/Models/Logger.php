<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use LengthException;
use PhpParser\Node\Expr\Cast\Object_;

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


    public static function getValue($value) {
        return $value["day_of_month"];
    }

    public static function getDaysOfTheMonth($date)
    {

        $res = Logger::select( [DB::raw('DAY(created_at) as day_of_month') ])
            ->whereMonth('created_at', $date)
            ->groupBy('day_of_month')
            ->orderBy('created_at', 'desc')
            ->get()->toArray();

        $daysCollection = collect($res);

        $extracted = $daysCollection->map(function ($item, $key) {
            return $item["day_of_month"];
        });

        $extracted->all();

        $days["days"] = $extracted;

        return $days;
    }

}

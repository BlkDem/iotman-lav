<?php

namespace App\Http\Controllers\Helpers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllModelController extends Controller
{

    public function getModelByName($modelName) {

        return (class_exists($modelName))?(new $modelName):null;
    }

    public static function getModels($path=''){
        $out = [];
        $results = \File::allFiles($path);
            foreach ($results as $result) {
                if ($result === '.' or $result === '..') continue;
                    $filename = $result;
                    if (is_dir($filename)) {
                        dd($filename);
                        $out = array_merge($out, self::getModels($filename));
                    }else{
                        $out[] = substr($filename, strlen($path),-4);
                    }
            }
        return $out;
    }


    public function getAllModels()
    {
        $path = app_path() . '\\Models';

        return self::getModels($path);
    }}

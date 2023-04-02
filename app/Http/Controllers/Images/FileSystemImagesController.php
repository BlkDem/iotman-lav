<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileSystemImagesController extends Controller
{
    public function getImagesFromPath($dir) {

        $files = [];

        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    array_push($files, $file);
                    // $files
                    // echo "filename: .".$file."<br />";
                }
                closedir($dh);
            }
        }

        return $files;
    }
}

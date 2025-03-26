<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\Controller;

class FileSystemImagesController extends Controller
{
    /**
     * getImagesFromPath - Getting images list from requested directory
     *
     * @param  string  $dir
     * @return array
     */
    public function getImagesFromPath($dir)
    {

        $files = [];

        if (is_dir($dir)) {
            if ($dh = opendir($dir)) {
                while (($file = readdir($dh)) !== false) {
                    array_push($files, $file);
                }
                closedir($dh);
            }
        }

        return $files;
    }
}

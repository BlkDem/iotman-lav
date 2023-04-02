<?php

namespace App\Http\Controllers;

use stdClass;
use Storage;


class StorageController extends Controller
{

    public static function SaveFile($_storage, $_filename, $_file) {
        // Save Image in Storage
        try {
            Storage::disk($_storage)->put($_filename, file_get_contents($_file));
            return
                [
                    'success' => true,
                    'message' => 'file saved to storage'
                ];
        }
        catch (\Exception $e) {
            return
                [
                    'success' => false,
                    'message' => 'error: ' . $e
                ];
        }
    }

    public static function getImagesFromDisk($_storage, $_files='') {
        $files = Storage::disk($_storage)->files($_files);

        $filesObj = json_decode(json_encode($files), FALSE);

        for ($i=0; $i<count($files); $i++) {
                $filesObj[$i] = ["id" => $i, "name" => $files[$i]];
        }

        return $filesObj;
    }

}

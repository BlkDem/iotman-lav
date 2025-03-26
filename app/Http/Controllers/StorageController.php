<?php

namespace App\Http\Controllers;

// use stdClass;
use Exception;
use Storage;

class StorageController extends Controller
{
    /**
     * SaveFile - Saving the file to a storage
     *
     * @param  string  $_storage
     * @param  string  $_filename
     * @param  string  $_file
     * @return array - info array
     */
    public static function SaveFile($_storage, $_filename, $_file)
    {
        // Save Image in Storage
        try {
            Storage::disk($_storage)->put($_filename, file_get_contents($_file));

            return
                [
                    'success' => true,
                    'message' => 'file saved to storage',
                ];
        } catch (Exception $e) {
            return
                [
                    'success' => false,
                    'message' => 'error: '.$e,
                ];
        }
    }

    /**
     * getImagesFromDisk - Getting images from storage
     *
     * @param  string  $_storage
     * @param  string  $_files
     * @return object - set of files
     */
    public static function getImagesFromDisk($_storage, $_files = '')
    {
        $files = Storage::disk($_storage)->files($_files);

        $filesObj = json_decode(json_encode($files), false);

        for ($i = 0; $i < count($files); $i++) {
            $filesObj[$i] = ['id' => $i, 'name' => $files[$i]];
        }

        return $filesObj;
    }
}

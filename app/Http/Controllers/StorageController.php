<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Storage;


class StorageController extends BaseController
{
    public static function SaveFile($_storage, $_filename, $_file) {
        // Save Image in Storage folder
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
}

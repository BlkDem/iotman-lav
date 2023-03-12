<?php

namespace App\Http\Controllers;

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
}

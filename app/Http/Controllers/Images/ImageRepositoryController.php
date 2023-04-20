<?php

namespace App\Http\Controllers\Images;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\StorageController;
use App\Models\Helpers\Preset;
use Exception;

class ImageRepositoryController extends BaseController
{

    //default preset min and max filesize
    private static $max_file_size = 1000000;
    private static $min_file_size = 1000;

    private function isValidExtension($_ext) {
        if ((strtoupper($_ext) === 'JPG') || (strtoupper($_ext) === 'PNG'))
            return true; else return false;
    }

    private function isValidSize($file) {

        $preset_max_file_size = Preset::where('preset_key', 'max_file_size')->first()["preset_value"];
        $preset_min_file_size = Preset::where('preset_key', 'min_file_size')->first()["preset_value"];

        if ($preset_max_file_size != null)
        {
            self::$max_file_size = $preset_max_file_size;
        }

        if ($preset_min_file_size != null)
        {
            self::$min_file_size = $preset_min_file_size;
        }

        return ((filesize($file) >= self::$min_file_size)&&(filesize($file) <= self::$max_file_size));
    }

    public function GetImageFiles() {
        return StorageController::getImagesFromDisk('images');
    }

    public function getStoredFileName(Request $request) {

        $response = [
            'fileName' => $this->store($request),
            'message'  => 'Reseived image file name',
        ];
        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        try {

            $_imageParamName = 'image_file';
            $_extension = '';
            $_file = '';

            //check valid fieldname
            $_file = $request->file($_imageParamName);
            if ($_file == null)
            return $this->sendError("Invalid file for update");

            //check valid file extension
            $_extension = $_file->getClientOriginalExtension();
            if (!$this->isValidExtension($_extension))
            return $this->sendError("Invalid file extension");

            //check valid fieldsize
            if (!$this->isValidSize($_file))
            return $this->sendError("File size mismatch!");

            //make unic-filename
            $newImageName = Str::random(32).".".$_extension;

            // save to storage
            $save_result = StorageController::SaveFile('images', $newImageName, $_file);
            if (!$save_result['success']) {
                return $this->sendError("Error saving to disk");
            }

            // Return a new image name
            return $newImageName;

        } catch (Exception $e) {
            // Return error
            return $this->sendError("Error uploading image: ", $e);
        }
    }
}

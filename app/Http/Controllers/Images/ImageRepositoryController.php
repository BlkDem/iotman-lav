<?php

namespace App\Http\Controllers\Images;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\StorageController;
use Exception;
// use App\Models\Image;
// use App\Http\Controllers\ImageController;

class ImageRepositoryController extends BaseController
{
    private function ValidExtension($_ext) {
        if ((strtoupper($_ext) === 'JPG') || (strtoupper($_ext) === 'PNG'))
            return true; else return false;
    }

    private function ValidSize($file) {
        return ((filesize($file) > 1000)&&(filesize($file) < 1000000));
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

            $_image = 'file';
            $_extension = '';
            $_file = '';

            //check valid fieldname
            $_file = $request->file($_image);
            if ($_file == null)
            return $this->sendError("Invalid file for update");

            //check valid file extension
            $_extension = $_file->getClientOriginalExtension();
            if (!$this->ValidExtension($_extension))
            return $this->sendError("Invalid file extension");

            //check valid fieldsize
            if (!$this->ValidSize($_file))
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

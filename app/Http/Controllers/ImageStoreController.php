<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\StorageController;
use App\Models\Image;

class ImageStoreController extends BaseController
{

    private function ValidExtension($_ext) {
        if ((strtoupper($_ext) === 'JPG') || (strtoupper($_ext) === 'PNG'))
            return true; else return false;
    }

    public function updateImage(Request $request, int $imageId)
    {
        try {

            $_image = 'image';
            $_extension = '';
            $_file = '';

            //check record exists
            $newImage = Image::find($imageId);
            if ($newImage == null)
            return $this->sendError("Record not found");

            //check file exists
            if ($request->files->count() == 0)
            return $this->sendError("No data for update");

            //check valid fieldname
            $_file = $request->file($_image);
            if ($_file == null)
            return $this->sendError("No valid files for update");

            //check valid file extension
            $_extension = $_file->getClientOriginalExtension();
            if (!$this->ValidExtension($_extension))
            return $this->sendError("Invalid file extension");

            //make unic-filename
            $newImageName = Str::random(32).".".$_extension;

            // save to storage
            $save_result = StorageController::SaveFile('images', $newImageName, $_file);
            if (!$save_result['success']) {
                return $this->sendError("Error saving to disk");
            }

            //apply new file name
            $newImage->image_name = $newImageName;

            //save record
            $newImage->save();

            // Return susccess
            return $this->sendResponse($newImage, "Post successfully updated");

        } catch (\Exception $e) {
            // Return error
            return $this->sendError("Error updating image: ", $e);
        }
}
}

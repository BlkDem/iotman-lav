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

            if ($request->files->count() == 0)
            return $this->sendError("No data for update");

            $_file = $request->file($_image);
            if ($_file == null)
            return $this->sendError("No valid files for update");

            $_extension = $_file->getClientOriginalExtension();
            if (!$this->ValidExtension($_extension))
            return $this->sendError("Invalid file extension");

            $newImageName = Str::random(32).".".$_extension;

            $newImage = Image::find($imageId);
            if ($newImage == null)
            return $this->sendError("Record not found");

            // save to storage
            $save_result = StorageController::SaveFile('images', $newImageName, $_file);
            if (!$save_result['success']) {
                return $this->sendError("Error saving to disk");
            }

            $newImage->image_name = $newImageName;
            $newImage->save();

            // Return Json Response
            return $this->sendResponse($newImage, "Post successfully updated");

        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
            ],500);
        }
}
}

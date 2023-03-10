<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Storage;
use App\Models\Image;

class ImageStoreController extends Controller
{
    public function updateImage(Request $request, int $imageId)
    {
        try {
            $newImageName = Str::random(32).".".$request->file('image')->getClientOriginalExtension();

            // $_tmp = $request->file('image')->getClientOriginalExtension();
            $newImage = Image::find($imageId);

            $newImage->image_name = $newImageName;

            $newImage->save();

            // Save Image in Storage folder
            Storage::disk('images')->put($newImageName, file_get_contents($request->file('image')));

            // Return Json Response
            return response()->json([
                'message' => "Post successfully updated.",
                // '_tmp' => $_tmp,
                '_tmp' => $newImage,
                // 'request' => $request,
                // 'image' => $image
            ],200);

        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!",
            ],500);
        }
}
}

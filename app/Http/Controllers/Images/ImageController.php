<?php

namespace App\Http\Controllers\Images;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Middleware\ValidatorRules;
use App\Models\Album;
use DB;
use Exception;
use App\Http\Controllers\PaginatorController;

class ImageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $res = Image::orderBy('image_name', 'asc')->get();
        // $res = Image::with('album')->get();
        $res = DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->select('images.*', 'albums.id', 'albums.album_name')
            ->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Image List", $paginator);
    }

    public static function getImage($id)
    {
        return Image::find($id);
    }

    public static function getAlbum($id)
    {
        return Album::find($id);
    }

    public static function setImage($id, $newImage)
    {

        $newImage = Self::getImage($id);

        if ($newImage == null)
            return null;
        //apply new file name
        $newImage->image_name = $newImage;
        //save record
        $newImage->save();

        return $newImage;
    }

    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int)$currentPage;

        $offset = $itemsPerPage * --$page;

        $res = DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->select('images.*', 'albums.id', 'albums.album_name')
            ->limit($itemsPerPage)->offset($offset)->orderBy('image_name', 'asc')
            ->get();

        // $res = Image::limit($itemsPerPage)->offset($offset)->orderBy('image_name', 'asc')->get();
        $total = Image::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Images List", $paginator);
    }

    public function pageWhereAlbum($currentPage = 0, $itemsPerPage = 10, $album_id)
    {

        $page = (int)$currentPage;

        $offset = $itemsPerPage * --$page;

        $res = DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->select(
                'images.id as id',
                'images.image_name as image_name',
                'images.image_desc as image_desc',
                'images.created_at as created_at',
                'images.updated_at as updated_at',
                'albums.id as album_id',
                'albums.album_name as album_name'
            )
            ->where('album_id', $album_id)
            ->limit($itemsPerPage)->offset($offset)->orderBy('image_name', 'asc')
            ->get();

        // $res = Image::limit($itemsPerPage)->where('album_id', $album_id)->offset($offset)->orderBy('image_name', 'asc')->get();

        $total = Image::where('album_id', $album_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Images List", $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = ValidatorRules::MakeValidate($request, 'images');

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            $newImage = Image::create($request->all());

            $albumId = $newImage["album_id"];

            $albumName = $this->getAlbum($albumId);

            $newImage["album_name"] = $albumName["album_name"];

            return $this->sendResponse($newImage, "Image added");
        } catch (Exception $e) {
            return $this->sendError('Store error: ' . $e);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, Image $updateImage)
    {

        $validator = ValidatorRules::MakeValidate($request, $updateImage->getTable());

        $fileName = $request->query('image_name');

        $_req = $request->all();
        $_req["image_name"] = $fileName;

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {

            $updateImage->update($request->all());

            $updateImage->save();

            $albumId = $updateImage["album_id"];

            $albumName = $this->getAlbum($albumId);

            //$updateImage =
            $updateImage["album_name"] = $albumName["album_name"];

            return $this->sendResponse($updateImage, 'Image updated');
        } catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = DB::table('images')
            ->join('albums', 'images.album_id', '=', 'albums.id')
            ->where('images.id', '=', $id)
            ->select('images.*', 'albums.id', 'albums.album_name')
            ->get();

        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Image (id = $id) found");
    }

    public function getImages()
    {
        $imageRepositoryController = new ImageRepositoryController();

        $files = $imageRepositoryController->GetImageFiles();


        if (is_null($files)) {
            return $this->sendError("No files Found");
        }

        return $this->sendResponse($files, "Images from disk");
    }

    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchImage = Image::whereId($id);
            $patchImage->update([
                "$field" => $value
            ]);
            $res = Image::find($id);
            // return $this->sendResponse($patchImage, 'Image patched');
            return response()->json($res, 200);
        } catch (Exception $e) {
            // return response()->json('Patching Record Error: ' . $e, 400);
            return $this->sendError('Patching Record Error: ' . $e);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $imageItem = Image::find($id);
        if ($imageItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $imageItem->delete($id);
        return $this->sendResponse($imageItem, "Image $id deleted");
    }
}

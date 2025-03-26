<?php

namespace App\Http\Controllers\Images;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use App\Models\Album;
use App\Models\Image;
use Exception;
use Illuminate\Http\Request;

class ImageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = Image::albumImages()->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Image List', $paginator);
    }

    /**
     * getImage - getting Image by ID
     *
     * @param  int  $id  - Image ID
     * @return object
     */
    public static function getImage($id)
    {
        return Image::find($id);
    }

    /**
     * getAlbum - getting Album by ID
     *
     * @param  int  $id  - Album ID
     * @return object
     */
    public static function getAlbum($id)
    {
        return Album::find($id);
    }

    /**
     * setImage - set image name for record with requested ID
     *
     * @param  int  $id  - selected Image ID
     * @param  mixed  $newImage  - a new filename
     * @return object
     */
    public static function setImage($id, $newImage)
    {

        $image = self::getImage($id);

        if ($image == null) {
            return null;
        }
        // apply new file name
        $image->image_name = $newImage;
        // save record
        $image->save();

        return $image;
    }

    /**
     * page - Get Images on a page
     *
     * @param  int  $currentPage  - selected page
     * @param  int  $itemsPerPage  - items per page
     * @return \Illuminate\Http\Response
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = Image::albumImages()
            ->limit($itemsPerPage)->offset($offset)->orderBy('image_name', 'asc')
            ->get();

        $total = Image::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Images List', $paginator);
    }

    /**
     * pageWhereAlbum Get Images on a selected page where Album ID
     *
     * @param  int  $currentPage  - selected page
     * @param  int  $itemsPerPage  - items per page
     * @param  int  $album_id  - Album ID
     * @return \Illuminate\Http\Response
     */
    public function pageWhereAlbum($currentPage, $itemsPerPage, $album_id)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;

        $res = Image::imagesWhereAlbumID($album_id)
            ->limit($itemsPerPage)->offset($offset)->orderBy('image_name', 'asc')
            ->get();

        $total = Image::where('album_id', $album_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Images List', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
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

            $albumId = $newImage['album_id'];

            $albumName = $this->getAlbum($albumId);

            $newImage['album_name'] = $albumName['album_name'];

            return $this->sendResponse($newImage, 'Image added');
        } catch (Exception $e) {
            return $this->sendError('Store error: '.$e);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\Image  $image  - updating Image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $updateImage)
    {

        $validator = ValidatorRules::MakeValidate($request, $updateImage->getTable());

        $fileName = $request->query('image_name');

        $_req = $request->all();
        $_req['image_name'] = $fileName;

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {

            $updateImage->update($request->all());

            // $updateImage->save();

            $albumId = $updateImage['album_id'];

            $albumName = $this->getAlbum($albumId);

            $updateImage['album_name'] = $albumName['album_name'];

            $updateImage->save();

            return $this->sendResponse($updateImage, 'Image updated');

        } catch (Exception $e) {
            return $this->sendError('Updating Record Error: '.$e);
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
        $res = Image::imageWithAlbum($id)->get();

        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "Image (id = $id) found");
    }

    /**
     * getImages - getting images from repository (storage files)
     *
     * @return \Illuminate\Http\Response
     */
    public function getImages()
    {
        $imageRepositoryController = new ImageRepositoryController;

        $files = $imageRepositoryController->GetImageFiles();

        if (is_null($files)) {
            return $this->sendError('No files Found');
        }

        return $this->sendResponse($files, 'Images from disk');
    }

    /**
     * patch - editing Image record fields. Set the field value via key.
     *
     * @param  int  $id  - selected Image ID
     * @param  int  $field  - editing field
     * @param  int  $value  - setting value
     * @return \Illuminate\Http\Response
     */
    public function patch(Request $request, $id, $field, $value)
    {
        try {
            $patchImage = Image::whereId($id);
            $patchImage->update([
                "$field" => $value,
            ]);
            $res = Image::find($id);

            // return $this->sendResponse($patchImage, 'Image patched');
            return response()->json($res, 200);
        } catch (Exception $e) {
            // return response()->json('Patching Record Error: ' . $e, 400);
            return $this->sendError('Patching Record Error: '.$e);
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
            return $this->sendError('No Record for deleting Found');
        }

        $imageItem->delete($id);

        return $this->sendResponse($imageItem, "Image $id deleted");
    }
}

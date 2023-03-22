<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Middleware\ValidatorRules;
use DB;
use Exception;

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

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

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

    public function pageWhereAlbum($currentPage=0, $itemsPerPage=10, $album_id){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('images')
        ->join('albums', 'images.album_id', '=', 'albums.id')
        ->select('images.*', 'albums.id', 'albums.album_name')
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
            $newDeviceType = Image::create($request->all());
            return response()->json($newDeviceType, 201);
        }
        catch (Exception $e) {
            return response()->json('Store Record Error: ' . $e, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = Image::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Image (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $updateImage) {
        $validator = ValidatorRules::MakeValidate($request, 'images');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateImage->update($request->all());
            return response()->json($updateImage, 200);        }
        catch (Exception $e) {
            return response()->json('Deleting Record Error: ' . $e, 400);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchImage = Image::whereId($id);
            $patchImage->update([
                "$field" => $value
            ]);
            $res = Image::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $imageItem = Image::find($id);
        if ($imageItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $imageItem->delete($id);
        return $this->sendResponse($imageItem, "Image $id deleted");
    }
}

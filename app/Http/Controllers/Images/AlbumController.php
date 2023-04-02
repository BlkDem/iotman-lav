<?php

namespace App\Http\Controllers\Images;

use App\Models\Album;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Http\Middleware\ValidatorRules;
use Illuminate\Support\Facades\DB;
use Exception;

class AlbumController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private function getTotalRecords() {
        return Album::get()->count();
    }

    public function index()
    {
        $res = Album::orderBy('album_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Album List", $paginator);

    }


    //only for id and name fields for lookup components
    public function indexLookup($currentPage=0, $itemsPerPage=10)
    {
        // $res = Album::select('id','album_name')->orderBy('id', 'asc')->get();

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = DB::table('albums')
                ->select('albums.id as id' , 'albums.album_name as album_name')
                ->leftJoin('images', 'albums.id', '=', 'images.album_id')
                ->selectRaw('count(images.id) as images_count')
                ->groupBy('id', 'album_name')
                ->limit($itemsPerPage)
                ->offset($offset)
                ->get();


        // $total = Album::get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int)$itemsPerPage, $currentPage);

        return $this->sendResponse($res, "Albums lookup List", $paginator);

    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = Album::limit($itemsPerPage)->offset($offset)->orderBy('album_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Album List", $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'albums');
        if ($validator->fails()) {
            // return $this->sendError($validator->errors());
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDeviceType = Album::create($request->all());
            return $this->sendSuccess($newDeviceType, 'Album created', 201);
        }
        catch (Exception $e) {
            return $this->sendError('Error creatig album: ' . $e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = Album::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Album (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $updateAlbum) {
        $validator = ValidatorRules::MakeValidate($request, 'albums');
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {
            $updateAlbum->update($request->all());
            return $this->sendResponse($updateAlbum, 'Album created');
        }
        catch (Exception $e) {
            return $this->sendError('Updating Record Error: ' . $e);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchAlbum = Album::whereId($id);
            $patchAlbum->update([
                "$field" => $value
            ]);
            $res = Album::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $albumItem = Album::find($id);
        if ($albumItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        $albumItem->delete($id);
        return $this->sendResponse($albumItem, "Album $id deleted");
    }
}

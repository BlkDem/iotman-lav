<?php

namespace App\Http\Controllers\images;

use App\Models\ImagesAlbum;
// use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;

class ImagesAlbumController extends BaseController
{
    public function index()
    {
        // $res = Image::orderBy('image_name', 'asc')->get();
        $res = ImagesAlbum::get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Image List with album", $paginator);

    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = ImagesAlbum::limit($itemsPerPage)->offset($offset)->get();
        $total = ImagesAlbum::get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Images List with album", $paginator);
    }

    public function pageWhereAlbum($currentPage=0, $itemsPerPage=10, $album_id){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;
        $res = ImagesAlbum::limit($itemsPerPage)->where('album_id', $album_id)->offset($offset)->orderBy('image_name', 'asc')->get();
        $total = ImagesAlbum::where('album_id', $album_id)->get();

        $paginator = PaginatorController::Paginate($total->count(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Images List", $paginator);
    }


}

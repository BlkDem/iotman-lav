<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class PaginatorController extends Controller
{
    public static function Paginate($itemsCount=0, $itemsPerPage=5, $currentPage=1)
    {
        $PagesCount = (int)($itemsCount / $itemsPerPage);

        if (($PagesCount * $itemsPerPage) < $itemsCount) $PagesCount++;

        $NewPage = ($currentPage > $PagesCount)?$PagesCount:(int)$currentPage;
        if ($NewPage == 0) $NewPage++;

        return array(
            'RecordsCount' => $itemsCount,
            'PagesCount' => $PagesCount,
            'ItemsPerPage' => $itemsPerPage,
            'CurrentPage' => $NewPage
        );
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Middleware\ValidatorRules;
use App\Models\DevBlog;
use Exception;
use Illuminate\Http\Request;

class DevBlogController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = DevBlog::get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'DevBlogs List', $paginator);

    }

    /**
     * daysOfTheMonth
     *
     * @param  mixed  $date
     * @return void
     */
    public function daysOfTheMonth($date)
    {
        if ($date != 0) {
            $res = DevBlog::getDaysOfTheMonth($date);
        } else {
            $res = DevBlog::getLastDays();
        }

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Blog Dates in the Month', $paginator);
    }

    /**
     * page - get a page recordset
     *
     * @param  int  $currentPage
     * @param  int  $itemsPerPage
     * @return Response
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = DevBlog::limit($itemsPerPage)->offset($offset)->get();
        $total = DevBlog::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'DevBlogs List', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'dev_blogs');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $newDevBlog = DevBlog::create($request->all());

            return $this->sendSuccess($newDevBlog, 'Record added', 201);
            // return response()->json($newDevBlog, 201);
        } catch (Exception $e) {
            return $this->sendError('Store Record Error: '.$e);
            // return response()->json('Store Record Error: ' . $e, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DevBlog  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $res = DevBlog::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }

        return $this->sendResponse($res, "DevBlog (id = $id) found");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\DevBlog  $micro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DevBlog $updateDevBlog)
    {

        $validator = ValidatorRules::MakeValidate($request, 'dev_blogs');
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        try {
            $updateDevBlog->update($request->all());

            return response()->json($updateDevBlog, 200);
        } catch (Exception $e) {
            return response()->json('Deleting Record Error: '.$e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Micro  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blogItem = DevBlog::find($id);
        if ($blogItem === null) {
            return $this->sendError('No Record for deleting Found');
        }

        try {
            $blogItem->delete($id);

            return $this->sendResponse($blogItem, "DevBlog $id deleted");

        } catch (Exception $e) {
            return $this->sendError('Deleting error: '.$e);
        }

    }
}

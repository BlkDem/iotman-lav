<?php

namespace App\Http\Controllers;

use App\Http\Middleware\ValidatorRules;
use App\Models\PriceGroup;
use Illuminate\Http\Request;

class PriceGroupController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $res = PriceGroup::orderBy('price_group_name', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, 'Price Groups List', $paginator);

    }

    /**
     * page
     *
     * @param  mixed  $currentPage
     * @param  mixed  $itemsPerPage
     * @return void
     */
    public function page($currentPage = 0, $itemsPerPage = 10)
    {

        $page = (int) $currentPage;

        $offset = $itemsPerPage * --$page;
        $res = PriceGroup::limit($itemsPerPage)->offset($offset)->orderBy('price_group_name', 'asc')->get();
        $total = PriceGroup::get();

        $paginator = PaginatorController::Paginate($total->count(), (int) ($itemsPerPage), $currentPage);

        return $this->sendResponse($res, 'Price Groups List with pages', $paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'price_groups');
        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
        }
        try {
            $newPriceGroup = PriceGroup::create($request->all());

            return $this->sendSuccess($newPriceGroup, 'Price Group Created', 201);
        } catch (\Exception $e) {
            return $this->sendError('Creating Record Error: '.$e, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(PriceGroup $priceGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Models\PriceGroup  $priceGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PriceGroup $updatePriceGroup)
    {
        $validator = ValidatorRules::MakeValidate($request, 'price_groups');

        if ($validator->fails()) {
            return $this->sendError($validator->errors(), 400);
        }

        try {
            $updatePriceGroup->update($request->all());

            return $this->sendResponse($updatePriceGroup, 'Price Group updated');
        } catch (\Exception $e) {
            return $this->sendError('Updating Record Error: '.$e, 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PriceGroup  $priceGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $priceGroup = PriceGroup::find($id);

        if ($priceGroup === null) {
            return $this->sendError('No Record for deleting Found');
        }

        try {
            $priceGroup->delete($id);
        } catch (\Exception $e) {
            return $this->sendError('Deleting error: '.$e);
        }

        return $this->sendResponse($priceGroup, "Device Type $id deleted");
    }
}

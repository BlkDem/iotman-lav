<?php

namespace App\Http\Controllers\Helpers;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\PaginatorController;
use App\Models\Helpers\Preset;
use Illuminate\Http\Request;
use Exception;
use App\Http\Middleware\ValidatorRules;

class PresetController extends BaseController
{

    private function getTotalRecords() {
        return Preset::get()->count();
    }

    public function index()
    {
        $res = Preset::orderBy('preset_key', 'asc')->get();

        $paginator = PaginatorController::Paginate($res->count(), 1, 1);

        return $this->sendResponse($res, "Presets", $paginator);

    }

    public function indexGroup($group)
    {
        $groupData = Preset::where('preset_key', 'LIKE', $group . '%')->get();

        return $this->sendResponse($groupData, "Presets");
    }

    public function page($currentPage=0, $itemsPerPage=10){

        $page = (int)$currentPage;

        $offset = $itemsPerPage*--$page;

        $res = Preset::limit($itemsPerPage)->offset($offset)->orderBy('preset_key', 'asc')->get();

        $paginator = PaginatorController::Paginate($this->getTotalRecords(), (int)($itemsPerPage), $currentPage);

        return $this->sendResponse($res, "Preset pages", $paginator);
    }

    public function store(Request $request)
    {
        $validator = ValidatorRules::MakeValidate($request, 'presets');
        if ($validator->fails()) {
            // return $this->sendError($validator->errors());
            return response()->json($validator->errors(), 400);
        }
        try {
            $newPreset = Preset::create($request->all());
            return $this->sendSuccess($newPreset, 'Preset created', 201);
        }
        catch (Exception $e) {
            return $this->sendError('Error creatig preset: ' . $e);
        }
    }

    public function show($id)
    {
        $res = Preset::find($id);
        if (is_null($res)) {
            return $this->sendError("No Record for id=$id Found");
        }
        return $this->sendResponse($res, "Preset (id = $id) found");
    }

    public function update(Request $request, Preset $updatePreset) {
        $validator = ValidatorRules::MakeValidate($request, 'presets');
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        try {
            $updatePreset->update($request->all());
            return $this->sendResponse($updatePreset, 'Preset updated');
        }
        catch (Exception $e) {
            return $this->sendError('Update record error: ' . $e);
        }
    }

    public function patch(Request $request, $id, $field, $value){
        try {
            $patchAlbum = Preset::whereId($id);
            $patchAlbum->update([
                "$field" => $value
            ]);
            $res = Preset::find($id);
            return response()->json($res, 200);
        }
        catch (Exception $e) {
            return response()->json('Patching Record Error: ' . $e, 400);
        }
    }

    public function destroy($id) {
        $presetItem = Preset::find($id);
        if ($presetItem === null) {
            return $this->sendError("No Record for deleting Found");
        }

        try {
            $presetItem->delete($id);
            return $this->sendResponse($presetItem, "Preset $id deleted");

        } catch (Exception $e) {
            return $this->sendError('Deleting error: ' . $e);
        }

    }

}

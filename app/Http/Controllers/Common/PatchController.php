<?php

namespace App\Http\Controllers\Common;

use App\Facades\LOG;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use Request;

class PatchController extends BaseController
{
    /**
     * patch record via key => value
     *
     * @param  int  $id
     * @param  string  $field
     * @param  mixed  $value
     * @return Response
     */
    public function __invoke(Request $request, Model $model)
    {
        // [$id, $field, $value]
        $id = $request::route('id');
        $field = $request::route('field');
        $value = $request::route('value');

        if ((! $id) || (! $field)) {
            return $this->sendError('Model Patching error: bad request');
        }

        try {
            $patchModel = $model::whereId($id);

            if ($patchModel->count() === 0) {
                return $this->sendError('Model Patching error: not found');
            }

            $oldValue = $patchModel->value($field);

            $patchModel->update([
                "$field" => $value,
            ]);

            $res = $model::whereId($id)->first();

            $res['patched_field'] = $field;
            $res['patched_old_value'] = $oldValue;
            $res['table'] = $model->getTable();

            LOG::setPatchLog('Model patched', $res, $res['table'], 'Controller');

            return $this->sendResponse($res, 'Model Patched');
        } catch (\Exception $e) {
            return $this->sendError('Model Patching error: '.$e);
        }
    }
}

<?php

namespace app\Http\Controllers\Helpers;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;

class CompleteResponseController extends Controller {

    /**
     * compliteResponseForModel fill the record with foreign props
     *
     * @param  mixed $model
     * @param  mixed $addModels array of linked models
     * @param  mixed $addFieldIDs array of linked IDs
     * @param  mixed $addFieldNames array for linked names
     * @return Model
     */
    public function __invoke(Model $model, array $addModels, array $addFieldIDs, array $addFieldNames): Model
    {
        /**
         * Prepare complited response for front
        */

        for ($i = 0; $i < count($addFieldIDs); $i++) {

            $modelName = $addModels[$i]::find($model[$addFieldIDs[$i]]);
            $model[$addFieldNames[$i]] = $modelName["name"];

        }

        return $model;
    }

}

<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;
use App\Facades\LOG;
use Illuminate\Support\Facades\Auth;


/**
 * 'retrieved', 'creating', 'created', 'updating', 'updated',
 *  'saving', 'saved', 'restoring', 'restored', 'replicating',
 *  'deleting', 'deleted', 'forceDeleting', 'forceDeleted',
 */

class GlobalObserver
{
    public function saved(Model $model)
    {
        // dd('patch');
        LOG::setLog('Model patched/saved', $model);
    }

    public function updated(Model $model)
    {
        LOG::setLog('Model updated', $model);
    }

    public function created(Model $model)
    {
        LOG::setLog('Model created', $model);
    }

    public function deleted(Model $model)
    {
        LOG::setLog('Model deleted', $model);
    }

    public function forceDeleted(Model $model)
    {
        LOG::setLog('Model forceDeleted', $model);
    }
}

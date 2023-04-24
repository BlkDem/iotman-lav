<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;
use App\Facades\LOG;
use Illuminate\Support\Facades\Auth;

class GlobalObserver
{
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

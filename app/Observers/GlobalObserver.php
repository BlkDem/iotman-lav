<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;
use App\Facades\LOG;

class GlobalObserver
{
    public function updated(Model $model)
    {
        LOG::setLog('update: ' . $model->getTable(), $model);
    }

    public function created(Model $model)
    {
        LOG::setLog('created: ' . $model->getTable(), $model);
    }

    public function deleted(Model $model)
    {
        LOG::setLog('deleted: ' . $model->getTable(), $model);
    }

    public function forceDeleted(Model $model)
    {
        LOG::setLog('forceDeleted: ' . $model->getTable(), $model);
    }
}

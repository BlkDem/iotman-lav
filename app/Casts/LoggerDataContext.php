<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use app\Structures\LoggerDataContext as LoggerDataContextStructure;
use Str;

class LoggerDataContext implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function get($model, string $key, $value, array $attributes)
    {
        return $value;
        // return LoggerDataContextStructure::fromArray(json_decode($value, true));
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $key
     * @param  mixed  $value
     * @param  array  $attributes
     * @return mixed
     */
    public function set($model, string $key, $value, array $attributes)
    {
        $value['msg_type'] = 'unknown';
        $value['msg_key'] = $key;

        if(!is_string($value) && !$value instanceof LoggerDataContextStructure) {
            return $value;
        }
        if(is_string($value)) {
            $value['msg_type'] = 'string';
            return $value;
        }
        return $value;
    }
}

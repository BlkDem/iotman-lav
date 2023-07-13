<?php

namespace app\Structures;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Stringable;

class LoggerDataContext implements Jsonable, Arrayable, Stringable
{
    public $message = '';

    public static function fromArray($data)
    {
        $instance = new LoggerDataContext();
        $instance->message = $data['log_data'] ?: '';
        return $instance;
    }

    public function toJson($options = 0)
    {
        return json_encode($this);
    }

    public function toArray()
    {
        return [
            'log_data' => $this->message
        ];
    }

    public function __toString()
    {
        return $this->toJson();
    }

}

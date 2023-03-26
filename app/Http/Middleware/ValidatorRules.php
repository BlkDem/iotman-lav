<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidatorRules extends Validator
{
    protected static function GetRulesByTable(String $table)
    {
        $_rulesArray = Array();
        switch ($table) {
            case 'devices':
                $_rulesArray = [
                    'device_name' => 'required|min:3',
                    'device_type_id' => 'required'
                ];
                break;
            case 'device_types':
                $_rulesArray = [
                    'device_type_name' => 'required|min:3',
                    'device_type_desc' => 'required|min:10',
                    'device_type_image' => 'required|min:5'
                ];
                break;
            case 'user_devices':
                $_rulesArray = [
                    'user_device_name' => 'required|min:3',
                    'device_id' => 'required',
                    'user_id' => 'required'
                ];
                break;

            case 'users':
                $_rulesArray = [
                    'name' => 'required',
                    'email' => 'required|email',
                    'password' => 'required',
                    'confirm_password' => 'required|same:password',
                ];
                break;

            case 'albums':
                $_rulesArray = [
                    'album_name' => 'required|min:3',
                    'album_desc' => 'required',
                ];
                break;

            case 'images':
                $_rulesArray = [
                    'image_name' => 'required|min:3',
                    'album_id' => 'required',
                ];
                break;

            case 'dev_blogs':
                $_rulesArray = [
                    'dev_blog_name' => 'required|min:3',
                    'dev_blog_desc' => 'required|min:10',
                ];
                break;

            case 'micros':
                    $_rulesArray = [
                        'micro_name' => 'required|min:3',
                    ];
                    break;

            case 'device_micros':
                    $_rulesArray = [
                        'device_id' => 'required',
                        'micro_id' => 'required',
                    ];
                    break;

            case 'presets':
                    $_rulesArray = [
                        'preset_key' => 'required',
                    ];
                    break;

            default:
                $_rulesArray =  [];
                break;
        }
        return $_rulesArray;
    }

    public static function MakeValidate(Request $request, String $table)
    {
        return self::make($request->all(), self::GetRulesByTable($table));
    }
}

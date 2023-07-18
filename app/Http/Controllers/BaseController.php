<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message, $paginator=[], $cached=false, $statusCode=200)
    {

        $_result = (isset($result["data"]))?$result["data"]:$result;
    	$response = [
            'success' => true,
            'cached' => $cached,
            'data'    => $_result,
            'message' => $message,
            'paginator' => $paginator,
        ];
        // dd(response()->json($response));
        return response()->json($response, $statusCode);
    }
    /**
     * send success method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendSuccess($result=[], $message, $cached=false, $statusCode=200)
    {

        // $_result = (isset($result["data"]))?$result["data"]:'';
    	$response = [
            'success' => true,
            'cached' => $cached,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, $statusCode);
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];
        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }
        return response()->json($response, $code);
    }
}

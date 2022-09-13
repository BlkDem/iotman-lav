<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DevicesView;

class DevicesViewController extends Controller
{
    public function index()
    {
        $devicesDataSet = DevicesView::get();
        if ($devicesDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);    
        }
        return response()->json(['data' => $devicesDataSet], 200);
    }

    public function show($id)
    {
        return (is_null(DevicesView::findOrFail($id)))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json(DevicesView::find($id), 200);
    }
}

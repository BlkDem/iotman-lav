<?php

namespace App\Http\Controllers;

use App\Models\DeviceUser;
use Illuminate\Http\Request;

class DeviceUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devicesUserDataSet = DeviceUser::get();
        if ($devicesUserDataSet->count() ==0)
        {
            return response()->json(['Error' => 'true', 'Message' => 'No Records Found'], 404);    
        }
        return response()->json(['data' => DeviceUser::get()], 200);
        //return response()->json($devicesUserDataSet, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $isPresent = DeviceUser::find($id);
        return (is_null($isPresent))? 
            response()->json(['Error' => 'true', 'Message' => 'Record ' . $id . ' Not Found'], 404)
            : 
            response()->json($isPresent, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function edit(DeviceUser $deviceUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DeviceUser $deviceUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeviceUser  $deviceUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeviceUser $deviceUser)
    {
        //
    }
}

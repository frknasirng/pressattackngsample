<?php

namespace App\Http\Controllers;

use App\LocalGovernment;
use Illuminate\Http\Request;

class LocalGovernmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $localGovernments = LocalGovernment::paginate();
        return LocalGovernmentResource::collection($localGovernments);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LocalGovernment  $localGovernment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $localGovernment = LocalGovernment::findOrFail($id);
        return new LocalGovernmentResource($localGovernment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LocalGovernment  $localGovernment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $localGovernment = LocalGovernment::findOrFail($id);
        $localGovernment->latitude = $request->input('latitude');
        $localGovernment->longitude = $request->input('longitude');

        if($localGovernment->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'updated successfully',
                'localGovernment' => $localGovernment
            ], 200);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong...'
            ], 500);
        }
    }
}

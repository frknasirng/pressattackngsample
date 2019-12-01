<?php

namespace App\Http\Controllers;

use App\State;
use App\Http\Requests\State\UpdateRequest;
use App\Http\Resources\StateResource;
use Illuminate\Http\Request;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $states = State::all();
        return StateResource::collection($states);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $state = State::findOrFail($id);
        return new StateResource($state);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\State  $state
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request) {
        $state = State::findOrFail($request->input('id'));
        $state->latitude = $request->input('latitude');
        $state->longitude = $request->input('longitude');

        if($state->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'State updated successfully'
            ], 200);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong...'
            ], 500);
        }
    }
}

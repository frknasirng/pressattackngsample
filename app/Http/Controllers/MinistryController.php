<?php

namespace App\Http\Controllers;

use App\Ministry;
use Illuminate\Http\Request;
use App\Http\Requests\Ministry\AddRequest;
use App\Http\Requests\Ministry\UpdateRequest;
use App\Http\Requests\Ministry\DeleteRequest;
use App\Http\Resources\MinistryResource;

class MinistryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agencies = Ministry::all();

        return MinistryResource::collection($agencies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $ministry = new Ministry();

        $ministry->name = $request->input('name');
        $ministry->hq = $request->input('hq');
        $ministry->head = $request->input('head');
        $ministry->email = $request->input('email');
        $ministry->phone = $request->input('phone');
        $ministry->website = $request->input('website');
        $ministry->description = $request->input('description');

        if ($ministry->save()) {
            return response()->json([
                "success" => 1,
                "message" => "added successfully",
                "ministry" => $ministry
            ]);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Ministry  $Ministry
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ministry = Ministry::findOrFail($id);

        return new MinistryResource($ministry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Ministry  $Ministry
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $ministry = Ministry::findOrFail($id);

        $ministry->name = $request->input('name');
        $ministry->hq = $request->input('hq');
        $ministry->head = $request->input('head');
        $ministry->email = $request->input('email');
        $ministry->phone = $request->input('phone');
        $ministry->website = $request->input('website');
        $ministry->description = $request->input('description');

        if ($ministry->save()) {
            return response()->json([
                "success" => 1,
                "message" => "updated successfully",
                "ministry" => $ministry
            ]);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Ministry  $Ministry
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $ministry = Ministry::findOrFail($request->input('id'));

        if ($ministry->delete()) {
            return response()->json([
                "success" => 1,
                "message" => "deleted successfully",
                "ministry" => $ministry
            ]);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ]);
        }
    }
}

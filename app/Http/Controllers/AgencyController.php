<?php

namespace App\Http\Controllers;

use App\Agency;
use Illuminate\Http\Request;
use App\Http\Requests\Agency\AddRequest;
use App\Http\Requests\Agency\UpdateRequest;
use App\Http\Requests\Agency\DeleteRequest;
use App\Http\Resources\AgencyResource;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agencies = Agency::all();

        return AgencyResource::collection($agencies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $agency = new Agency();

        $agency->name = $request->input('name');
        $agency->hq = $request->input('hq');
        $agency->head = $request->input('head');
        $agency->email = $request->input('email');
        $agency->phone = $request->input('phone');
        $agency->website = $request->input('website');
        $agency->description = $request->input('description');

        if ($agency->save()) {
            return response()->json([
                "success" => 1,
                "message" => "added successfully",
                "agency" => $agency
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
     * @param  \App\Agency  $Agency
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $agency = Agency::findOrFail($id);

        return new AgencyResource($agency);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Agency  $Agency
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $agency = Agency::findOrFail($id);

        $agency->name = $request->input('name');
        $agency->hq = $request->input('hq');
        $agency->head = $request->input('head');
        $agency->email = $request->input('email');
        $agency->phone = $request->input('phone');
        $agency->website = $request->input('website');
        $agency->description = $request->input('description');

        if ($agency->save()) {
            return response()->json([
                "success" => 1,
                "message" => "updated successfully",
                "agency" => $agency
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
     * @param  \App\Agency  $Agency
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $agency = Agency::findOrFail($request->input('id'));

        if ($agency->delete()) {
            return response()->json([
                "success" => 1,
                "message" => "deleted successfully",
                "agency" => $agency
            ]);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ]);
        }
    }
}

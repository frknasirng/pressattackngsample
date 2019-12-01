<?php

namespace App\Http\Controllers;

use App\ProjectType;
use App\Http\Requests\ProjectType\AddRequest;
use App\Http\Requests\ProjectType\UpdateRequest;
use App\Http\Requests\ProjectType\DeleteRequest;
use App\Http\Resources\ProjectTypeResource;
use Illuminate\Http\Request;

class ProjectTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projectTypes = ProjectType::all();

        return ProjectTypeResource::collection($projectTypes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $projectType = new ProjectType();

        $projectType->name = $request->input('name');

        if ($projectType->save()) {
			return response()->json(
				[
                    "success" => 1,
                    "message" => "added successfully",
                    "projectType" => $projectType
                ],
				200
			);
        } else {
            return response()->json(
				[
                    "success" => 0,
                    "message" => "Something went wrong..."
                ],
				500
			);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProjectType  $projectType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $projectType = ProjectType::findOrFail($id);

        return new ProjectTypeResource($projectType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProjectType  $projectType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $projectType = ProjectType::findOrFail($id);

        if ($projectType->save()) {
			return response()->json(
				[
                    "success" => 1,
                    "message" => "udpated successfully",
                    "projectType" => $projectType
                ],
				200
			);
        } else {
            return response()->json(
				[
                    "success" => 0,
                    "message" => "Something went wrong..."
                ],
				500
			);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProjectType  $projectType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelereRequest $request)
    {
        $projectType = ProjectType::findOrFail($request->input('id'));

        if ($projectType->delete()) {
			return response()->json(
				[
                    "success" => 1,
                    "message" => "Deleted successfully"
                ],
				200
			);
        } else {
            return response()->json(
				[
                    "success" => 0,
                    "message" => "Something went wrong..."
                ],
				500
			);
        }
    }
}

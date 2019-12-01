<?php

namespace App\Http\Controllers;

use App\ProjectStatus;
use App\Http\Requests\ProjectStatus\AddRequest;
use App\Http\Requests\ProjectStatus\UpdateRequest;
use App\Http\Requests\ProjectStatus\DeleteRequest;
use App\Http\Resources\ProjectStatusResource;
use Illuminate\Http\Request;

class ProjectStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projectStatuses = ProjectStatus::all();

        return ProjectStatusResource::collection($projectStatuses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $projectStatus = new ProjectStatus();

        $projectStatus->name = $request->input('name');

        if ($projectStatus->save()) {
			return response()->json(
				[
                    "success" => 1,
                    "message" => "added successfully",
                    "projectStatus" => $projectStatus
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
     * @param  \App\ProjectStatus  $projectStatus
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $projectStatus = ProjectStatus::findOrFail($id);

        return new ProjectStatusResource($projectStatus);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProjectStatus  $projectStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $projectStatus = ProjectStatus::findOrFail($id);

        if ($projectStatus->save()) {
			return response()->json(
				[
                    "success" => 1,
                    "message" => "udpated successfully",
                    "projectStatus" => $projectStatus
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
     * @param  \App\ProjectStatus  $projectStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelereRequest $request)
    {
        $projectStatus = ProjectStatus::findOrFail($request->input('id'));

        if ($projectStatus->delete()) {
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

<?php

namespace App\Http\Controllers;

use App\Project;
use App\Agency;
use App\Ministry;
use App\State;
use App\LocalGovernment;
use App\ProjectStatus;
use Illuminate\Http\Request;
use App\Http\Requests\Project\AddRequest;
use App\Http\Requests\Project\UpdateRequest;
use App\Http\Requests\Project\DeleteRequest;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($filter = null, $filterId = null)
    {
        $results = NULL;

        if ($filter && $filterId) {
            switch ($filter) {
                case 'agency':
                    $agency = Agency::findOrFail($filterId);
                    $results = $agency->projects()->paginate(); 
                    break;
                
                case 'ministry':
                    $ministry = Ministry::findOrFail($filterId);
                    $results = $ministry->projects()->paginate();
                    break;

                case 'state':
                    $state = State::findOrFail($filterId);
                    $results = $state->projects()->paginate();
                    break;

                case 'localGovernment':
                    $localGovernment = LocalGovernment::findOrFail($filterId);
                    $results = $localGovernment->projects()->paginate();
                    break;

                case 'projectStatus':
                    $projectStatus = ProjectStatus::findOrFail($filterId);
                    $results = $projectStatus->projects()->paginate();
                    break;
            }
        } else {
            $results = Project::paginate();
        }

        return ProjectResource::collection($results);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $project = new Project();

        $project->title = $request->input('title');
        $project->description = $request->input('description');
        $project->allocation = $request->input('allocation');
        $project->agency_id = $request->input('agency_id');
        $project->ministry_id = $request->input('ministry_id');
        $project->date_commissioned = $request->input('date_commissioned');
        $project->location_type = $request->input('location_type');
        $project->location_id = $request->input('location_id');
        $project->project_status_id = $request->input('project_status_id');
        $project->user_id = $request->input('user_id');

        if ($project->save()) {
            return response()->json([
                'success' => 1,
                'message' => "added successfully",
                'project' => $project
            ], 201);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong'
            ], 500);
        }
    }

    public function storeInBulk(BulkRequest $request) {
        $projects = $request->input('projects');

        if (Project::insert($projects))  {
            return response()->json([
                'success' => 1,
                'message' => 'added successfully'
            ], 201);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::findOrFail($id);

        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->title = $request->input('title');
        $project->description = $request->input('description');
        $project->allocation = $request->input('allocation');
        $project->agency_id = $request->input('agency_id');
        $project->ministry_id = $request->input('ministry_id');
        $project->date_commissioned = $request->input('date_commissioned');
        $project->location_type = $request->input('location_type');
        $project->location_id = $request->input('location_id');
        $project->project_status_id = $request->input('project_status_id');
        $project->user_id = $request->input('user_id');

        if ($project->save()) {
            return response()->json([
                'success' => 1,
                'message' => "updated successfully"
            ], 200);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $project = Project::findOrFail($request->input('id'));

        if ($project->delete()) {
            return response()->json([
                'success' => 1,
                'message' => "deleted successfully"
            ], 200);
        } else {
            return response()->json([
                'success' => 0,
                'message' => 'something went wrong'
            ], 500);
        }
    }
}

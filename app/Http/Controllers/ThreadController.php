<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Project;
use Illuminate\Http\Request;
use App\Http\Requests\Thread\AddRequest;
use App\Http\Requests\Thread\UpdateRequest;
use App\Http\Requests\Thread\DeleteRequest;
use App\Http\Resources\ThreadResource;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($projectId)
    {
        $project = Project::findOrFail($projectId);
        $threads = $project->threads()->paginate();

        return ThreadResource::collection($threads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $thread = new Thread();

        $thread->description = $request->input('description');
        $thread->user_id = $request->input('user_id');
        $thread->project_id = $request->input('project_id');

        if ($thread->save()) {
            return response()->json([
                'success' => 1,
                'message' => "added successfully"
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
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $thread = Thread::findOrFail($id);

        return new ThreadResource($thread);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $thread = Thread::findOrFail($id);

        $thread->description = $request->input('description');

        if ($thread->save()) {
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
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $thread = Thread::findOrFail($request->input('id'));

        if ($thread->delete()) {
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

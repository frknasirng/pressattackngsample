<?php

namespace App\Http\Controllers;

use App\ThreadPost;
use App\Project;
use Illuminate\Http\Request;
use App\Http\Requests\ThreadPost\AddRequest;
use App\Http\Requests\ThreadPost\UpdateRequest;
use App\Http\Requests\ThreadPost\DeleteRequest;
use App\Http\Resources\ThreadPostResource;

class ThreadPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($projectId = null)
    {
        if ($projectId) {
            $project = Project::findOrFail($projectId);
            $threadPosts = $project->threadPosts()->paginate();
        } else {
            $threadPosts = ThreadPost::latest()->paginate();
        }

        return ThreadPostResource::collection($threadPosts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $threadPost = new ThreadPost();

        $threadPost->description = $request->input('description');
        $threadPost->user_id = $request->input('user_id');
        $threadPost->project_id = $request->input('project_id');

        if ($threadPost->save()) {
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
     * @param  \App\ThreadPost  $threadPost
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $threadPost = ThreadPost::findOrFail($id);

        return new ThreadPostResource($threadPost);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ThreadPost  $threadPost
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        $threadPost = ThreadPost::findOrFail($id);

        $threadPost->description = $request->input('description');

        if ($threadPost->save()) {
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
     * @param  \App\ThreadPost  $threadPost
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $threadPost = ThreadPost::findOrFail($request->input('id'));

        if ($threadPost->delete()) {
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

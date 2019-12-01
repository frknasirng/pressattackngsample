<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Bookmark\AddRequest;
use App\Http\Requests\Bookmark\DeleteRequest;
use App\Http\Resources\BookmarkResource;

class BookmarkController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddRequest $request)
    {
        $user = User::findOrFail($request->input('user_id'));

        if ($user->bookmarks()->attach($request->input('project_id'))) {
            return response()->json([
                "success" => 1,
                "message" => "added successfully",
                "bookmarks" => $user->bookmarks()
            ], 201);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookmark  $bookmark
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteRequest $request)
    {
        $user = User::findOrFail($request->input('user_id'));

        if ($user->bookmarks()->detach($request->input('project_id'))) {
            return response()->json([
                "success" => 1,
                "message" => "deleted successfully",
                "bookmarks" => $user->bookmarks()
            ], 201);
        } else {
            return response()->json([
                "success" => 0,
                "message" => "something went wrong"
            ], 500);
        }
    }
}

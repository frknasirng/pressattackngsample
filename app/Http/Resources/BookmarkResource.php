<?php

namespace App\Http\Resources;

use App\Project;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class BookmarkResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $default = parent::toArray($request);
        $extras = [
            "project" => Project::findOrFail($this->project_id),
            "user" => User::findOrFail($this->user_id)
        ];

        return array_merge($default, $extras);
    }
}

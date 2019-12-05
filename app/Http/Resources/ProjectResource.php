<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            "projectType" => $this->projectType,
            "projectStatus" => $this->projectStatus,
            "location" => $this->location,
            "user" => $this->user,
            "ministry" => $this->ministry,
            "agency" => $this->agency,
            "threadPosts" => $this->threadPosts
        ];

        return array_merge($default, $extras);
    }
}

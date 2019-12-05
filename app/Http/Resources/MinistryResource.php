<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MinistryResource extends JsonResource
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
            "projects" => $this->projects()->latest()->paginate()
        ];

        return array_merge($default, $extras);
    }
}

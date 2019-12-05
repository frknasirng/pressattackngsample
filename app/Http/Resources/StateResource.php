<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StateResource extends JsonResource
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
            "localGovernments" => $this->localGovernments
        ];

        return array_merge($default, $extras);
    }
}

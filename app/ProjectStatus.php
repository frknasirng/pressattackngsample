<?php

namespace App;

use App\Project;
use Illuminate\Database\Eloquent\Model;

class ProjectStatus extends Model
{
    public function projects () {
        return $this->hasMany(Project::class);
    }
}

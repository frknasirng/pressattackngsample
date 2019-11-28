<?php

namespace App;

use App\ProjectType;
use App\ProjectStatus;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function projectType () {
        return $this->belongsTo(ProjectType::class);
    }

    public function projectStatus () {
        return $this->belongsTo(projectStatus::class);
    }

    public function location () {
        return $this->morphTo();
    }
}

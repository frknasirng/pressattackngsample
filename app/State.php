<?php

namespace App;

use App\LocalGovernment;
use App\Project;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    public function localGovernments () {
        return $this->hasMany(LocalGovernment::class);
    }

    public function project () {
        return $this->morphOne(Project::class, 'location');
    }
}

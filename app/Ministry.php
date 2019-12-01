<?php

namespace App;

use App\Project;
use Illuminate\Database\Eloquent\Model;

class Ministry extends Model
{
    public function projects () {
		return $this->hasMany(Project::class);
	}
}

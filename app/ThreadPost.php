<?php

namespace App;

use App\Project;
use Illuminate\Database\Eloquent\Model;

class ThreadPost extends Model
{
    public function project () {
        return $this->belongsTo(Project::class);
    }
}

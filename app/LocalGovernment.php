<?php

namespace App;

use App\State;
use Illuminate\Database\Eloquent\Model;

class LocalGovernment extends Model
{
    public function state() {
        return $this->belongsTo(State::class);
    }

    public function project () {
        return $this->morphOne(Project::class, 'location');
    }
}

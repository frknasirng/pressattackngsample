<?php

namespace App;

use App\ProjectType;
use App\ProjectStatus;
use App\User;
use App\Agency;
use App\Ministry;
use App\ThreadPost;
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

    public function user () {
        return $this->belongsTo(User::class);
    }

    public function usersWithThisAsBookmark () {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id');
    }

    public function ministry () {
        return $this->belongsTo(Ministry::class);
    }

    public function agency () {
        return $this->belongsTo(Agency::class);
    }

    public function threadPosts () {
        return $this->hasMany(ThreadPost::class);
    }
}

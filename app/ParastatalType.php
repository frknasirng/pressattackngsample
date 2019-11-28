<?php

namespace App;

use App\Parastatal;
use Illuminate\Database\Eloquent\Model;

class ParastatalType extends Model
{
    public function parastatals () {
        return $this->hasMany(Parastatal::class);
    }
}

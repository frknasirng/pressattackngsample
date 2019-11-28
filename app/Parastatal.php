<?php

namespace App;

use App\ParastatalType;
use Illuminate\Database\Eloquent\Model;

class Parastatal extends Model
{
    public function parastatalType() {
        return $this->belongsTo(ParastatalType::class);
    }
}

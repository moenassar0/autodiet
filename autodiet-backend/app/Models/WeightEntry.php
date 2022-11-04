<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeightEntry extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'weight',
    ];
}

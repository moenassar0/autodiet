<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $primaryKey = 'user_id';
    
    protected $fillable = [
        'user_id',
        'goal',
        'sex',
        'activity_level',
        'bodyfat_percentage',
        'height',
        'weight',
        'age',
    ];
}

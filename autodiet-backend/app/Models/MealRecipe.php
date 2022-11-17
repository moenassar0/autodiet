<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealRecipe extends Model
{
    protected $fillable = [
        'meal_id',
        'recipe_item_id',
        'multiplier',
    ];
}

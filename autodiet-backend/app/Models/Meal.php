<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Meal extends Model
{
    public function recipe()
    {
        return $this->belongsToMany(FoodItem::class, 'meal_recipes','meal_id','recipe_item_id')
        ->withPivot('multiplier');
    }
}

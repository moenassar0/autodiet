<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodItem extends Model
{
    protected $fillable = [
        'serving_size',
        'title',
        'calories',
        'protein',
        'carbohydrate',
        'fat',
        'picture_url',
        'serving_type',
    ];

    public function recipe()
    {
        return $this->belongsToMany(FoodItem::class, 'meal_recipes','meal_id','recipe_item_id')
        ->withPivot('multiplier');
    }
}

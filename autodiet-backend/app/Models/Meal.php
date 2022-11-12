<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Meal extends Model
{
    protected $fillable = [
        'title',
        'calories',
        'protein',
        'carbohydrate',
        'fat',
        'type',
        'protein_percentage',
        'picture_url',
    ];

    public function recipe()
    {
        return $this->belongsToMany(FoodItem::class, 'meal_recipes','meal_id','recipe_item_id')
        ->withPivot('multiplier');
    }
}

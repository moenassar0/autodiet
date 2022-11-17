<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\MealRecipe;
use Validator;

class MealRecipeController extends Controller
{
    public function addLink(Request $request){
        $recipe_link = new MealRecipe;
        $meal = Meal::find($request->meal_id);
        if(!$meal) return response()->json(['message' => 'not found'], 400);

        $validator = Validator::make($request->all(),[
            'food_item_id' => 'required',
            'multiplier' => 'required',
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);
        
        $recipe_link->fill(array_merge($validator->validated()));
        $recipe_link->save();    
        return response()->json(['link added:' => $recipe_link], 200);
    }
}

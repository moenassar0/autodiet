<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\MealRecipe;

class MealController extends Controller
{
    public function addMeal(){
        $meal = new Meal;

        $meal->title = $request->title;
        $meal->calories = $request->calories;
        $meal->protein = $request->protein;
        $meal->carbohydrate = $request->carbohydrate;
        $meal->fat = $request->fat;
        $meal->picture_url = $request->picture_url;

        $meal->save();

        return response()->json(["result" => "ok", 'meal added:' => $meal], 201);
    }
    
    public function getMeals(){
        $meals = Meal::all();
        return response()->json(["meals" => $meals], 200);
    }

    public function getMealRecipe($id){
        $meal = Meal::find($id);
        return response()->json(["recipe" => $meal->recipe]);
    }

    public function getMealsByTitle($search_string){
        $meals = Meal::where('title', 'like', '%' . $search_string . '%')->get();
        return response()->json(["meals" => $meals]);
    }

    public function deleteMeal($id){
        $meal = Meal::find($id);
        if($meal) $meal->delete(); return response()->json(['deleted:' => $meal], 200);
        return response()->json(['message' => 'meal not found'], 200);
    }
}

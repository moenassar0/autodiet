<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\MealRecipe;

class MealController extends Controller
{
    public function getMeals(){
        $meals = Meal::all();
        return response()->json(["meals" => $meals], 200);
    }

    public function getMealRecipe($id){
        $meal = Meal::find($id);
        return response()->json(["recipe" => $meal->recipe]);
    }

    public function getMealsByTitle(Request $request){
        $meals = Meal::where('title', 'like', '%' . $request->search_string . '%')->get();
    }
}

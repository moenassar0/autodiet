<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\MealRecipe;
use Validator;

class MealController extends Controller
{
    public function addMeal(Request $request){
        $meal = new Meal;

        $meal->title = $request->title;
        $meal->calories = $request->calories;
        $meal->protein = $request->protein;
        $meal->carbohydrate = $request->carbohydrate;
        $meal->fat = $request->fat;
        $meal->picture_url = $request->picture_url;
        $meal->protein_percentage = $request->protein_percentage;
        $meal->type = $request->type;

        $meal->save();

        return response()->json(["result" => "ok", 'meal added:' => $meal], 201);
    }

    public function getMeals(){
        //Pick a higher protein meal

        //Pick a snack

        //Pick a random set from db
        $meals = Meal::all();
        return response()->json(["meals" => $meals], 200);
    }

    public function getCustomizedMeals(){
        //Pick a snack
        $snack = Meal::where('type', '=', 'Snack')->inRandomOrder()->first();
        //Pick a static meal
        $static_meal = Meal::where('type', '=', 'Static')->inRandomOrder()->first();
        //Pick a random set from db
        $meals = Meal::where('type', '=', 'Dynamic')->get();

        return response()->json(["meals" => $meals,
                                 "static_meal" => $static_meal,
                                 "snack" => $snack], 200);
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

    public function updateMeal(Request $request){
        $meal = Meal::find($request->id);
        if(!$meal) return response()->json(['message' => 'meal not found'], 400);

        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'calories' => 'required',
            'protein' => 'required',
            'carbohydrate' => 'required',
            'fat' => 'required',
            'protein_percentage' => 'required',
            'picture_url' => 'required',
            'type' => 'required',
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);
        
        $meal->fill($validator->validated());
        $meal->save();
        
        return response()->json(['updated meal' => $meal], 200);
    }
}

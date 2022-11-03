<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FoodItemController extends Controller
{
    public function addFoodItem(Request $request){
        $food_item = new FoodItem;

        $food_item->save();

        return response()->json(["result" => "ok", 'meal added:' => $food_item], 201);
    }
}

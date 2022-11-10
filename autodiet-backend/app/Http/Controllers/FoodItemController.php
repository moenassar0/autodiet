<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FoodItem;
use Validator;

class FoodItemController extends Controller
{
    public function addFoodItem(Request $request){
        $food_item = new FoodItem;

        $validator = Validator::make($request->all(),[
            'serving_size' => 'required',
            'title' => 'required',
            'calories' => 'required',
            'protein' => 'required',
            'carbohydrate' => 'required',
            'fat' => 'required',
            'picture_url' => 'required',
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);
        
        $food_item->fill($validator->validated());
        $food_item->save();

        return response()->json(["result" => "ok", 'food_item added:' => $food_item], 201);
    }

    public function updateFoodItem(Request $request){
        $food_item = FoodItem::find($request->id);
        if(!$food_item) return response()->json(['message' => 'food item not found'], 400);

        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'calories' => 'required',
            'protein' => 'required',
            'carbohydrate' => 'required',
            'fat' => 'required',
            'serving_size' => 'required',
            'picture_url' => 'required',
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);
        
        $food_item->fill($validator->validated());
        $food_item->save();
        
        return response()->json(['updated meal' => $food_item], 200);
    }

    public function deleteFoodItem($id){
        $food_item = FoodItem::find($id);
        if($food_item) $food_item->delete(); return response()->json(['deleted:' => $food_item], 200);
        return response()->json(['message' => 'meal not found'], 400);
    }

    public function getFoodItems(){
        $foods = FoodItem::all();
        return response()->json(['foods' => $foods], 200);
    }
}

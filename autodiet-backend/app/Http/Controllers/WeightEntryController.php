<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeightEntry;
use Validator;

class WeightEntryController extends Controller
{
    public function addOrUpdateWeightEntry(Request $request){
        $user_id = auth()->user()->id;
        $entry = WeightEntry::where('user_id', $user_id)->where('date', $request->date)->first();
        if(!$entry) $entry = new WeightEntry;
        
        $validator = Validator::make($request->all(),[
            'weight' => 'required',
            'date' => 'required|date'
        ]);

        if($validator->fails()) return response()->json($validator->errors()->toJson(), 400);
        
        $entry->fill($validator->validated());
        $entry->user_id = $user_id;
        $entry->save();    
        return response()->json(['entry:' => $entry], 200);
    }
}

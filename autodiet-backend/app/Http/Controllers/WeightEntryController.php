<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeightEntry;

class WeightEntryController extends Controller
{
    public function addOrUpdateWeightEntry(Request $request){
        $entry = WeightEntry::where('user_id', $request->user_id)->where('date', $request->date)->first();
        return response()->json(['entry:' => $entry], 200);
    }
}

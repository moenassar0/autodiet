<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMealPlan;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendUserMealPlan(Request $request){
        $user = auth()->user();
        $meals = app('App\Http\Controllers\UserController')->getUserMealsPDF($request);
        Mail::to($user->email)->send(new SendMealPlan($meals));
    
        return response()->json(["message" => "success"]);
    }
}

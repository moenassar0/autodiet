<?php

use Illuminate\Support\Facades\Route;
use App\Mail\SendMealPlan;
use App\Models\User;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email', function () {
    return view('email.mealplan-email');
});

Route::post('/send-email', function(Request $request){
    $user = auth()->user();
    //$meals = MealRecipe::where('user_id' , '=', $user->id)
    //->join('food_items', 'recipe_item_id', '=', 'food_items.id')->get();

    //$userR = new Request();
    //$userR->id = $user->id;

    $meals = app('App\Http\Controllers\UserController')->getUserMealsPDF($request);

    Mail::to($user->email)->send(new SendMealPlan($meals));

    dd("success");
});
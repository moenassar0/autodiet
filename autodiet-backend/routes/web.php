<?php

use Illuminate\Support\Facades\Route;
use App\Mail\SendMealPlan;
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

Route::get('send-email', function(){
    $mailData = ['name' => 'testasd'];

    Mail::to("mnassar57@gmail.com")->send(new SendMealPlan($mailData));

    dd("success");
});
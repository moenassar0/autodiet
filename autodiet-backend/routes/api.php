<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MealController;
use App\Http\Middleware\IsUser;
use App\Http\Middleware\IsAdmin;

Route::post("/users", [UserController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
Route::get("/me", [AuthController::class, "me"]);

Route::middleware([IsAdmin::class])->group(function () {
    Route::get("/meals", [MealController::class, "getMeals"]);
});

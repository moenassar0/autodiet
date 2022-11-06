<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\FoodItemController;
use App\Http\Controllers\WeightEntryController;
use App\Http\Middleware\IsUser;
use App\Http\Middleware\IsAdmin;

Route::post("/users", [UserController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
Route::get("/me", [AuthController::class, "me"]);
Route::get("/users", [UserController::class, "getUsers"]);

Route::middleware([IsUser::class])->group(function () {
    Route::get("/meals", [MealController::class, "getCustomizedMeals"]);
    Route::get("/meal/{id}", [MealController::class, "getMealRecipe"]);
    Route::get("/meals/{search_string}", [MealController::class, "getMealsByTitle"]);
    Route::get("/user", [UserController::class, "getUserDetail"]);
    
    Route::get("/user/entries/{id}", [UserController::class, "getUserWeightEntries"]);
    Route::get("/user/meals/{id}", [UserController::class, "getUserMeals"]);

    Route::post("/user", [UserController::class, "updateUserDetail"]);
    Route::put("/weightentries", [WeightEntryController::class, "addOrUpdateWeightEntry"]);
});

Route::middleware([IsAdmin::class])->group(function () {
    Route::post("/meal", [MealController::class, "addMeal"]);
    Route::post("/food_item", [FoodItemController::class, "addFoodItem"]);

    Route::put("/meal", [MealController::class, "updateMeal"]);
    Route::put("/food_item", [FoodItemController::class, "updateFoodItem"]);
    Route::put("/user", [UserController::class, "updateUser"]);

    Route::delete("/user/{id}", [UserController::class, "deleteUser"]);
    Route::delete("/meal/{id}", [MealController::class, "deleteMeal"]);
    Route::delete("/food_item/{id}", [FoodItemController::class, "deleteFoodItem"]);
});



<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\FoodItemController;
use App\Http\Controllers\WeightEntryController;
use App\Http\Controllers\MealRecipeController;
use App\Http\Middleware\IsUser;
use App\Http\Middleware\IsAdmin;

Route::post("/users", [UserController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
Route::get("/me", [AuthController::class, "me"]);

Route::post("/pdf", [UserController::class, "getUserMealsPDF"]);
Route::middleware([IsUser::class])->group(function () {
    Route::get("/foods", [FoodItemController::class, "getFoodItems"]);
    Route::get("/foods/{search_string}", [FoodItemController::class, "getFoodsByTitle"]);

    Route::get("/meals", [MealController::class, "getMeals"]);
    Route::get("/user/meals", [MealController::class, "getCustomizedMeals"]);
    Route::get("/meal/{id}", [MealController::class, "getMealRecipe"]);
    Route::get("/meals/{search_string}", [MealController::class, "getMealsByTitle"]);

    Route::get("/user", [UserController::class, "getUserDetail"]);
    Route::get("/users", [UserController::class, "getUsers"]);
    Route::get("/user/entries", [UserController::class, "getUserWeightEntries"]);
    Route::post("/user/mealplan", [UserController::class, "getUserMeals"]);
    Route::post("/user", [UserController::class, "updateUserDetail"]);
    Route::put("/weightentries", [WeightEntryController::class, "addOrUpdateWeightEntry"]);
    Route::put("/user/mealplan", [UserController::class, "addOrUpdateUserMeals"]);
});

Route::middleware([IsAdmin::class])->group(function () {
    Route::post("/meal", [MealController::class, "addMeal"]);
    Route::post("/food_item", [FoodItemController::class, "addFoodItem"]);
    Route::post("/meal_recipe", [MealRecipeController::class, "addLink"]);
    

    Route::put("/meal", [MealController::class, "updateMeal"]);
    Route::put("/food_item", [FoodItemController::class, "updateFoodItem"]);
    Route::put("/user", [UserController::class, "updateUser"]);

    Route::delete("/user/{id}", [UserController::class, "deleteUser"]);
    Route::delete("/meal/{id}", [MealController::class, "deleteMeal"]);
    Route::delete("/food_item/{id}", [FoodItemController::class, "deleteFoodItem"]);
});



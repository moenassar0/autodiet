import { getRandomInt, multiplier } from "./HelperFunctions";
import { MealInterface, MealSetInterface, NutritionObjectInterface, UserMealData } from "./types/types";

export const Generator = async (meal_set:any, calories: number) => {
    console.log(meal_set);
    //Copy meal_set array without having the same pointers to memory
    const instance_set: MealSetInterface = JSON.parse(JSON.stringify(meal_set));

    let meal_plan: Array<MealInterface> = [];
    let nutrition: NutritionObjectInterface = {
        protein: 0,
        carbs: 0,
        fats: 0,
        calories: 0
    }

    instance_set.snack.multiplier = 1;
    instance_set.static_meal.multiplier = 1;
    meal_plan.push(instance_set.snack);
    meal_plan.push(instance_set.static_meal);

    let totalcalories = calories;
    let mealsAmount = getRandomInt(3,6);
    let proteinPercentage = 20;
    let acceptableError = 50;

    totalcalories -= instance_set.snack['calories'];
    totalcalories -= instance_set.static_meal['calories'];

    let calorieForEachmeal = totalcalories/mealsAmount;

    //User Meal Data
    const user_meal_data: UserMealData = {
        calorieForEachmeal,
        totalcalories,
        proteinPercentage
    }

    let gen_meal_plan: Array<MealInterface> = [];
    const response = await find(0, instance_set.meals, acceptableError, user_meal_data, gen_meal_plan);
    gen_meal_plan = response.meal_plan;

    nutrition.protein = response.protein;
    nutrition.carbs = response.carbs;
    nutrition.fats = response.fats;
    nutrition.calories = calories;

    gen_meal_plan = gen_meal_plan.concat(meal_plan);
    return {gen_meal_plan, nutrition};
}

async function find(loops: number, meals:Array<MealInterface>, acceptableError:number, user_meal_data: UserMealData, meal_plan:Array<MealInterface>): Promise<any>{
    //Stopping conditions of this recurisve function
    if(loops >= 15){
        console.log("timeout");
        acceptableError += 5
    }

    //Create temp instances of variables
    let tempMeals: Array<MealInterface> = JSON.parse(JSON.stringify(meals));
    let protein = 0;
    let carbs = 0;
    let fats = 0;
    let totalcalories = user_meal_data.totalcalories;
    let proteinPercentage = user_meal_data.proteinPercentage;
    let calorieForEachmeal = user_meal_data.calorieForEachmeal;
    meal_plan = [];
    let tempCalories = totalcalories;

    while(tempCalories > 50){
        //Pick random meal from our set
        let randI = Math.floor(Math.random() * tempMeals.length);
        if(tempMeals.length == 0) return;

        //Get multiplier to evenly distribute the calories between the meals
        let mult = multiplier(tempMeals[randI]['calories'], user_meal_data.calorieForEachmeal)
        
        //Check if mealplan already contains randomly chosen meal
        if(meal_plan.includes(tempMeals[randI])){
            continue
        }

        tempMeals[randI]['calories'] *= mult;
        tempMeals[randI]['carbohydrate'] *= mult;
        tempMeals[randI]['protein'] *= mult;
        tempMeals[randI]['fat'] *= mult;
        tempMeals[randI]['multiplier'] = mult;

        tempCalories -= calorieForEachmeal;
        protein += tempMeals[randI]['protein'];
        carbs += tempMeals[randI]['carbohydrate'];
        fats += tempMeals[randI]['fat'];
        
        meal_plan.push(tempMeals[randI]);
    }

    //Check resultant mealplan
    if(protein*4 - acceptableError > proteinPercentage/100 * totalcalories){
        return find(loops + 1, meals, acceptableError, user_meal_data, meal_plan)
    }
    else if(protein*4 + acceptableError < proteinPercentage/100 * totalcalories){
        return find(loops + 1, meals, acceptableError, user_meal_data, meal_plan);
    }
    else{
        return {meal_plan, carbs, fats, protein}
    }
}

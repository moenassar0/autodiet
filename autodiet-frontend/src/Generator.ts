import { getRandomInt, multiplier } from "./HelperFunctions";
import { MealInterface, MealSetInterface, UserMealData } from "./types/types";

export const Generator = async (meal_set:any) => {
    const instance_set: MealSetInterface = JSON.parse(JSON.stringify(meal_set));

    let meal_plan: Array<MealInterface> = [];
    meal_plan.push(instance_set.snack);
    meal_plan.push(instance_set.static_meal);

    let totalcalories = 3000;
    let mealsAmount = getRandomInt(3,6);
    let proteinPercentage = getRandomInt(18,31);
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
    gen_meal_plan = await find(0, instance_set.meals, acceptableError, user_meal_data, gen_meal_plan);
    gen_meal_plan = gen_meal_plan.concat(meal_plan); 
    return gen_meal_plan;
}

async function find(loops: number, meals:Array<MealInterface>, acceptableError:number, user_meal_data: UserMealData, meal_plan:Array<MealInterface>): Promise<any>{
    //Stopping conditions of this recurisve function
    if(loops >= 20){
        console.log("timeout");
        acceptableError += 25
    }

    //Create temp instances of variables
    let tempMeals: Array<MealInterface> = JSON.parse(JSON.stringify(meals));
    let protein = 0;
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
        return meal_plan;
    }
}

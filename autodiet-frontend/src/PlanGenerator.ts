import { getRandomInt, multiplier } from "./HelperFunctions";

interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number
}
function PlanGenerator (meals:Array<MealProps>):any{
    let tempMeals = meals;
    let totalcalories = 2000;
    let mealplan:Array<MealProps> = [];
    let mealsAmount = getRandomInt(3,7);
    let calorieForEachmeal = totalcalories/mealsAmount;
    let proteinPercentage = getRandomInt(18,40);
    let acceptableError = 50;
    let protein = 0;

    console.log("protein got: ", protein, "protein wanted: ", (proteinPercentage/100 * totalcalories)/4)
///////////////////////////////////

async function find(loops:number){
        if(loops >= 20){
            console.log("timeout");
            acceptableError += 25
        }
        if(loops >= 100){
            console.log("Couldn't find!");
            return [];
        }
        let calories = totalcalories;
        mealplan = [];
        protein = 0;
        while(calories > 50){
    
        }
    }
}

export default PlanGenerator;
import { getRandomInt } from "./HelperFunctions";

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
}

export default PlanGenerator;
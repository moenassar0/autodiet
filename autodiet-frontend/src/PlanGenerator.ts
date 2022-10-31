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

            let x = Math.floor(Math.random()*tempMeals.length);
            console.log("index: ", x, "tempmeals: ", tempMeals.length);
            if(tempMeals.length == 0) return;
            let mult = multiplier(tempMeals[x]['calories'], calorieForEachmeal)
    
            //Protein condition
            if((protein + tempMeals[x]['protein'])*4 > (proteinPercentage/100 * totalcalories)){
                console.log("protein overflow");
            }

            if(mealplan.includes(tempMeals[x])){
                console.log(tempMeals[x]['title'], " is repeated")
                continue
            }
        }
    }
}

export default PlanGenerator;
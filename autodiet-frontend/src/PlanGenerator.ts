import { getRandomInt, multiplier } from "./HelperFunctions";

interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number,
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

    //Call function
    loopOverFind();

async function loopOverFind(){
    
    for(let y = 0; y < 1; y++){
    find(0);
    //console.log(mealplan)
    return mealplan;
    //proteinPercentage = getRandomInt(20,40);
}}

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
    
            tempMeals[x]['calories'] *= mult;
            tempMeals[x]['carbohydrate'] *= mult;
            tempMeals[x]['protein'] *= mult;
            tempMeals[x]['fat'] *= mult;
            tempMeals[x]['multiplier'] = mult;
            mealplan.push(tempMeals[x]);
            calories -= calorieForEachmeal;
            protein += tempMeals[x]['protein'];
        }
        if(protein*4 - acceptableError > proteinPercentage/100 * totalcalories){
            console.log("should repeat, protein needed:", (proteinPercentage/100 * totalcalories)/4);
            find(loops + 1);
        }
        else if(protein*4 + acceptableError < proteinPercentage/100 * totalcalories){
            find(loops + 1);
        }
    }
    console.log("protein got: ", protein, "protein wanted: ", (proteinPercentage/100 * totalcalories)/4);
    return mealplan;
}

export default PlanGenerator;
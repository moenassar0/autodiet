interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number
  }
function PlanGenerator (meals:Array<MealProps>):any {
let tempMeals = meals.slice();
let totalcalories = 2000;
let mealplan:Array<MealProps> = [];
let key = '';
let mealsAmount = getRandomInt(3,7);
let calorieForEachmeal = totalcalories/mealsAmount;
let proteinPercentage = 40;
let diffone = getRandomInt(18,40);
let acceptableError = 50;
let protein = 0;
function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
console.log(diffone);
proteinPercentage = diffone;
//console.log("each meal is: " + calorieForEachmeal)
console.time('Execution Time');

loopOverFind();

async function loopOverFind(){
    
    for(let y = 0; y < 1; y++){
    find(0);
    //console.log(mealplan)
    return mealplan;
    //proteinPercentage = getRandomInt(20,40);
}}
console.timeEnd('Execution Time');
console.log("protein got: ", protein, "protein wanted: ", (proteinPercentage/100 * totalcalories)/4)
///////////////////////////////////

async function find(loops:number){
    tempMeals = meals.slice();
        if(loops >= 20){
            console.log("timeout");
            acceptableError += 25
        }
        if(loops >= 100){
            console.log("couldnt find shit");
            return [];
        }
        let calories = totalcalories;
        mealplan = [];
        protein = 0;
        while(calories >= 100){
    
            //let x = Math.floor(Math.random() * 10);
            let x = Math.floor(Math.random()*tempMeals.length);
            console.log("index: ", x, "tempmeals: ", tempMeals.length);
            if(tempMeals.length == 0) return;
            let mult = multiplier(tempMeals[x]['calories'], calorieForEachmeal)
    
            //Protein condition
            //console.log(protein*4,"  ",(proteinPercentage/100 * totalcalories))
            if((protein + tempMeals[x]['protein'])*4 > (proteinPercentage/100 * totalcalories)){
                console.log("protein overflow");
            }

            if(mealplan.includes(tempMeals[x])){
                console.log(tempMeals[x]['title'], " is repeated")
                //tempMeals.splice(x,1);
                continue
            }
    
            tempMeals[x]['calories'] *= mult;
            tempMeals[x]['carbohydrate'] *= mult;
            tempMeals[x]['protein'] *= mult;
            console.log(tempMeals[x]['fat'])
            tempMeals[x]['fat'] *= mult;
            console.log(tempMeals[x]['fat'])
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




function multiplier(num1:number, num2:number){
    return num2/num1;
}
return mealplan;
}

export default PlanGenerator;
import axios from "./api/axios";
import { getUser } from "./api/services/Users";
import { FoodItem, MealInterface, NutritionObjectInterface, UserDetails } from "./types/types";

//Declare helper function's variables
const EMAIL_REGEX = /.+@.+\..+/;
const PASSWORD_REGEX = /[A-Z]/;


export function checkEmail(email:string):boolean {
    if(EMAIL_REGEX.test(email)) return true
    return false;
}

export const checkStringLength = (string:string, length:number):boolean => {
    if(string.length >= length) return true;
    return false;
}

export const checkPassword = (password:string):boolean => {
    if(PASSWORD_REGEX.test(password) && checkStringLength(password, 8)) return true;
    return false;
}

export const validateUser = async(type: string) => {
    const response = await getUser();
    if(response?.response){
      if(response.response.user_role == type) return true;
    }
    return false;
}

export const getRandomInt = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const multiplier = (num1:number, num2:number):number => {
    return num2/num1;
}

export const getToken = () => {
    const token = localStorage.getItem("token");
    return {headers:{'Authorization' : "Bearer " + token}};
}

export const tomorrowFromDay = (date: Date) => {
    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return (nextDay);
}

export const yesterdayFromDay = (date: Date) => {
    let yesterday = new Date(date);
    yesterday.setDate(date.getDate() - 1);
    return (yesterday);
}

export const getChatDate = (timestamps: any) => {
	let date = timestamps.toDate();
	let mm = date.getMonth();
	let dd = date.getDate();
	let yyyy = date.getFullYear();
  let hour = timestamps.toDate().getHours();
  let minutes = timestamps.toDate().getMinutes();

	date = dd + '/' + mm + '/' + yyyy;

  const dateTime = date + ", " + hour + ":" + minutes;
  return dateTime;
}

export const getMultiplierFromFood = (number: number, foodItem: FoodItem) => {
  const serving_size = foodItem.serving_size;
  const ratio = (number / serving_size);
  return ratio;
}

export const multiplyFoodNutrition = (mult: any, currentFoodItem: any) => {
  currentFoodItem['calories'] *= mult;
  currentFoodItem['protein'] *= mult;
  currentFoodItem['carbohydrate'] *= mult;
  currentFoodItem['fat'] *= mult;
  currentFoodItem['mult'] = mult;
  return currentFoodItem;
}


export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const sendNotification = async () => {
  const myVar = setTimeout(async () => { 
    var key = 'AAAAVdmFftU:APA91bHzbdpUcQ1Huf3qMB4iaVrpXeSUxRDblVA0i_uLIZOknNaCY14L_IlI23nDCUHoH--V5hJDyDLEK9so5wCZZy7Mylx3dvGHjmRZ-g4HyE2gRva3iLQvR8yIxeBkDswHwwUe_FZ3';
    var to = localStorage.getItem("firebasetoken");
    var notification = {
      'title': 'Autodiet',
      'body': 'Please go to your profile to save your physical details!',
      'icon': "./logo2.png",
      'click_action': 'http://localhost:3000/user/profile'
    };
    
    await fetch('https://fcm.googleapis.com/fcm/send', {
      'method': 'POST',
      'headers': {
        'Authorization': 'key=' + key,
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        'notification': notification,
        'to': to
      })
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.error(error);
    })
    clearTimeout(myVar);
  }, 5000)
}

export const getNutritionFromMeals = (meals: Array<MealInterface>) => {
  let nutrition: NutritionObjectInterface = {protein:0, fats: 0, carbs: 0, calories: 0}
  if(meals)
    meals.forEach(meal => {
      nutrition.protein += meal.protein;
      nutrition.fats += meal.fat;
      nutrition.carbs += meal.carbohydrate;
      nutrition.calories += meal.calories;
    });
  return nutrition;
}

export const getNutritionFromMeal = (meal: MealInterface) => {
  let nutrition: NutritionObjectInterface = {protein:0, fats: 0, carbs: 0, calories: 0}
  nutrition.protein += Math.round(meal.protein);
  nutrition.fats += Math.round(meal.fat);
  nutrition.carbs += Math.round(meal.carbohydrate);
  nutrition.calories += Math.round(meal.calories);
  return nutrition;
}

export const macrosFromNutrition = (nutrtion: NutritionObjectInterface) => {
  const macros = "P" + nutrtion.protein + " C" + nutrtion.carbs + " F" + nutrtion.fats;
  return macros;
}

export const calculateCalories = (userDetails: UserDetails) => {
  let calories = 0;
  if(userDetails){
    if(userDetails.sex === "Male"){
      calories = (10 * userDetails.weight) + (6.25 * userDetails.height) - (5 * userDetails.age) + 5
    }else{
      calories = 
      (10 * userDetails.weight) + (6.25 * userDetails.height) - (5 * userDetails.age) - 161
    }
    const mult = activityLevelMultiplier(userDetails.activity_level);
    let percentage = 0;
    switch(userDetails.goal){
      case("Lose Weight"):
      percentage = -15;
      break;

      case("Maintain"):
      percentage = 0;
      break;

      case("Gain Weight"):
      percentage = 10;
      break;
    }
    calories = calories + ((percentage / 100) * calories);
    return calories * mult;
  }
  return calories;
}

export const activityLevelMultiplier = (activity: string) => {
  switch(activity){
    case("Sedentary"):
    return 1.2;
    case("Lightly Active"):
    return 1.375;
    case("Moderately Active"):
    return 1.55;
    case("Very Active"):
    return 1.725;
    case("Extremely Active"):
    return 1.9;
  }
  return 1;
}
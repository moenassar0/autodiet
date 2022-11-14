import axios from "./api/axios";
import { MealInterface, NutritionObjectInterface, UserDetails } from "./types/types";

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

export const validateUser = async() => {
    const token = localStorage.getItem("token");
    if(!token) return false;

    const headers = {headers:{'Authorization' : "Bearer " + token}};
    try{
        const response = await axios.get("/me", headers);
        console.log(response);
        return true;
    }catch{
        return false;   
    }
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

export const sendNotification = async () => {
    const myVar = setTimeout(async () => {
        console.log("test");    
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
    
    //}, 5000);
    
}

export const getNutritionFromMeals = (meals: Array<MealInterface>) => {
  let nutrition: NutritionObjectInterface = {protein:0, fats: 0, carbs: 0}
  meals.forEach(meal => {
    nutrition.protein += meal.protein;
    nutrition.fats += meal.fat;
    nutrition.carbs += meal.carbohydrate;
  });
  return nutrition;
}

export const calculateCalories = (userDetails: UserDetails) => {
  let calories = 0;
  if(userDetails.sex === "Male"){
    calories = (10 * userDetails.weight) + (6.25 * userDetails.height) - (5 * userDetails.age) + 5
  }else{
    calories = 
    (10 * userDetails.weight) + (6.25 * userDetails.height) - (5 * userDetails.age) - 161
  }
  const mult = activityLevelMultiplier(userDetails.activity_level);
  return calories * mult;
}
import axios from "./api/axios";

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
    const headers = {headers:{'Authorization' : "Bearer " + token}};
    try{
        const response = await axios.post("/me", {}, headers);
        console.log(response);
        return true;
    }catch{
        
    }
    return false;
}

export const getRandomInt = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const multiplier = (num1:number, num2:number) => {
    return num2/num1;
}
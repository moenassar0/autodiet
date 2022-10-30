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
//Declare helper function's variables
const EMAIL_REGEX = /.+@.+\..+/;



export const validEmail = (email:string):boolean => {
    if(EMAIL_REGEX.test(email)) return true
    return false;
}

export const checkStringLength = (string:string, length:number):boolean => {
    if(string.length >= length) return true;
    return false;
}
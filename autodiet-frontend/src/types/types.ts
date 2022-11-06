export interface MealInterface{
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number,
    picture_url:string,
    type: string,
}

export interface MealSetInterface{
    meals:Array<MealInterface>,
    snack:MealInterface,
    static_meal:MealInterface
}

export interface UserMealData{
    calorieForEachmeal:number,
    totalcalories:number,
    proteinPercentage:number
}

export interface InputFieldInterface{
    title:string,
    error:string,
    state:string,
    setHook:any,
    valid:boolean
}

export interface UserInterface{
    username: string,
    email: string,
    id: number
}

//Admin
export interface SideNavBarItemInterface{
    title:string,
    icon:any,
    condition:boolean
}

//Headers to be used in tables
export const UserHeaders:Array<string> = ['id', 'username', 'email'];

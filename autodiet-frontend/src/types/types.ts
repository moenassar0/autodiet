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
    valid:boolean,
    type?: string,
    placeholder?: string,
}

export interface UserInterface{
    username: string,
    email: string,
    id: number
}

//Admin
export interface SideNavBarItemInterface{
    title: string,
    icon: any,
    condition: boolean,
    path: string
}

export interface SideNavBarLinkInterface{
    title: string,
    icon: any,
    path: string
}

export interface NutritionObjectInterface{
    protein: number,
    carbs: number,
    fats: number,
    calories: number
}

export interface Recipe{
    "id": number,
    "title": string,
    "serving_size": number,
    "calories": number,
    "protein": number,
    "carbohydrate": number,
    "fat": number,
    "picture_url": string,
    "serving_type": string,
    "pivot": {
        "meal_id": number,
        "recipe_item_id": number,
        "multiplier": string
    }
}

export interface FoodItem{
    'id': number, 
    'title': string,
    "calories": number,
    "protein": number,
    "carbohydrate": number,
    "fat": number,
    'serving_size': number,
    'serving_type': string
}

export interface UserDetails{
    activity_level: string
    age: number
    bodyfat_percentage: string
    goal: string
    height: number
    sex: string
    user_id: number
    weight: number
}

export interface ChatMessageInterface{
    text: string,
    name: string,
    timestamps: string,
    type: string,
    userID: number,
}

//Headers to be used in tables
export const UserHeaders:Array<string> = ['id', 'username', 'email'];
export const MealHeaders:Array<string> = ['id', 'title', 'calories', 'protein_percentage'];
export const FoodItemHeaders:Array<string> = ['id', 'title', 'calories', 'protein','carbohydrate', 'fat','serving_size'];
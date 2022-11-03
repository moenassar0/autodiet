export interface MealInterface{
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number,
}

export interface InputFieldInterface{
    title:string,
    error:string,
    state:string,
    setHook:any,
    valid:boolean
}
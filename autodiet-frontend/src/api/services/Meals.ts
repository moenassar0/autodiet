import { get, post, put, del } from "./baseAPICall";

export const getMeals = async () => {
    return get("/meals", "");
}

export const getCustomizedMeals = async () => {
    return get("/user/meals", "");
}

export const addMeal = async (data:Object) => {
    return post("/meal", data);
}

export const editMeal = async (data:Object) => {
    return put("/meal", data);
}

export const deleteMeal = async (params: string) => {
    return del("/meal/", params);
}
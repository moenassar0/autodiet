import { del, get, post, put } from "./baseAPICall";

export const getFoods = async () => {
    return get("/foods", "");
}

export const getFoodsByTitle = async (search_string: string) => {
    return get("/foods/", search_string)
}

export const addFood = async (data: object) => {
    return post("/food_item", data);
}

export const editFood = async (data: object) => {
    return put("/food_item", data);
}

export const deleteFood = async (params: string) => {
    return del("/food_item/", params);
}
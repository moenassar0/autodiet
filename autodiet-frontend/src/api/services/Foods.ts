import { get } from "./baseAPICall";

export const getFoods = async () => {
    return get("/foods", "");
}

export const getFoodsByTitle = async (search_string: string) => {
    return get("/foods/", search_string)
}
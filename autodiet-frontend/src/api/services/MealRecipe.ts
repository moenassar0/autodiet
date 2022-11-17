import { get, post, put, del } from "./baseAPICall";

export const addLink = async (data: object) => {
    return post("/meal_recipe", data);
}
import { getToken } from "../../HelperFunctions";
import { get, post, put } from "./baseAPICall";

export const getUsers = async () => {
    return get("/users", "");
}

export const addUser = async (data:Object) => {
    return post("/users", data);
}

export const getUserEntries = async () => {
    return get("/user/entries", "");
}

export const getUserMeals = async (data:Object) => {
    return post("user/mealplan", data)
}

export const addOrUpdateUserMeals = async (data:Object) => {
    return put("user/mealplan", data)
}
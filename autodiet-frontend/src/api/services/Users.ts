import { getToken } from "../../HelperFunctions";
import { del, get, post, put } from "./baseAPICall";

export const loginUser = async (data: object) => {
    return post('/login', data);
}

export const registerUser = async (data: object) => {
    return post('/users', data);
}

export const getUsers = async () => {
    return get("/users", "");
}

export const getUser = async () => {
    return get("/me", "");
}

export const addUser = async (data:Object) => {
    return post("/users", data);
}

export const editUser = async (data:Object) => {
    return put("/user", data);
}

export const getUserDetails = async () => {
    return get("/user", "");
}

export const saveUserDetails = async (data: object) => {
    return post("/user", data)
}

export const deleteUser = async (urlParams: string) => {
    return del("/user/", urlParams);
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

export const addOrUpdateWeightEntries = async (data:Object) => {
    return put("weightentries", data)
}

export const sendEmail = async (data:object) => {
    return post("/send-email", data);
}


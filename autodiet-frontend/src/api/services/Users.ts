import { getToken } from "../../HelperFunctions";
import { get, post } from "./baseAPICall";

export const getUsers = async () => {
    return get("/users", "");
}

export const addUser = async (data:Object) => {
    return post("/users", data);
}

export const getUserEntries = async () => {
    return get("/user/entries", "");
}
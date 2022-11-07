import { getToken } from "../../HelperFunctions";
import { baseAPICall } from "./baseAPICall"

export const getUsers = async () => {
    return baseAPICall("/users", {}, "get");
}

export const addUser = async (data:Object) => {
    return baseAPICall("/users", data, "post");
}
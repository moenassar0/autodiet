import { getToken } from "../../HelperFunctions";
import axios from "../axios"
import { get, post } from "./baseAPICall";

export const getMeals = async () => {
    return get("/meals", "");
}

export const getCustomizedMeals = async () => {
    return get("/user/meals", "");
}
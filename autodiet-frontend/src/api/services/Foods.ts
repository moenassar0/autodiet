import { get } from "./baseAPICall";

export const getFoods = async () => {
    return get("/foods", "");
}
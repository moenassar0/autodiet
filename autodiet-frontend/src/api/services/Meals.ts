import { getToken } from "../../HelperFunctions";
import axios from "../axios"

export const getMeals = async () => {
    try{
        const response = await axios.get("/meals", getToken());
        return (response.data);
    }catch(err){
        return (err);
    }
}
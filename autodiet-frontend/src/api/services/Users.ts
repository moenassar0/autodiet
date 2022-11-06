import { getToken } from "../../HelperFunctions";
import axios from "../axios"

export const getUsers = async () => {
    try{
        const response = await axios.get("/users", getToken());
        console.log(response);
    }catch(err){
        console.log(err);
    }

}
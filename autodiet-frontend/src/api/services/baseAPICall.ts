import { getToken } from "../../HelperFunctions";
import axios from "../axios";

export const baseAPICall = async (url: string, params: any, callMethod: string) => {
    if(!params) params = {};

    switch(callMethod){
        case("get"):
            try{
                const response = await axios.get(url, getToken());
                if(response.data) return {success: true, response: response.data};
            }catch(err){
                return {success: false, response: err};
            }
            break;

        case("post"):
            try{
                const response = await axios.post(url, params, getToken());
                if(response.data) return {success: true, response: response.data};
            }catch(err){
                return {success: false, response: err};
            }
            break;
    }
}
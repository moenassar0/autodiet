import { async } from "@firebase/util";
import { getToken } from "../../HelperFunctions";
import axios from "../axios";

export const get = async (url: string, parameter: string) => {
    try{
        const response = await axios.get(url, getToken());
        if(response.data) return {success: true, response: response.data};
    }catch(err){
        return {success: false, response: err};
    }
}

export const post = async (url: string, data: object) => {
    try{
        const response = await axios.post(url, data, getToken());
        if(response.data) return {success: true, response: response.data};
    }catch(err){
        return {success: false, response: err};
    }
}

export const put = async (url: string, data: object) => {
    try{
        const response = await axios.put(url, data, getToken());
        if(response.data) return {success: true, response: response.data};
    }catch(err){
        return {success: false, response: err};
    }
}

export const del = async (url: string, data: object, urlParmas: string) => {
    try{
        const response = await axios.delete(url + urlParmas, getToken());
        if(response.data) return {success: true, response: response.data};
    }catch(err){
        return {success: false, response: err};
    }
}
import { Outlet } from "react-router-dom"
import { validateUser, } from "../../HelperFunctions";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
export const AuthenticateAdmin = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        //If user doesn't have a valid token navigate him back to landing page
        const check = async () => {if(! await validateUser("Admin")){
            navigate("/");
        }}
        check();
    }, [])

    return(
        <Outlet />
    )
}
import { Outlet } from "react-router-dom"
import { validateUser, } from "../../HelperFunctions";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
export const AuthenticateUser = () => {

    return(
        <Outlet />
    )
}
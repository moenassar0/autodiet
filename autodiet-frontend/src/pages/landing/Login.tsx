import { useState } from "react";
import { useNavigate, useRoutes } from 'react-router-dom';
import { useUser } from "../../context/UserContext";
import { LandingBase } from "../../layouts/LandingBase";
import { loginUser } from "../../api/services/Users";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser, user} = useUser();

    const [waitingForResponse, setWaitingForResponse] = useState(false);
    
    const navigate = useNavigate();

    const goToRegisterPage = () => {
        navigate("/register");
    }

    const login = async () => {
        const response = await loginUser({email, password});
        let user = response?.response.user;
        user = {email: user.email, username: user.username, user_role: user.user_role}
        setUser(user);
        localStorage.setItem("token", response?.response.token.original.access_token)
        if(user.user_role === "User")
        navigate("/user/home");
        if(user.user_role === "Admin")
        navigate("/admin/users");
        setWaitingForResponse(false);
    }

    return(
        <LandingBase>
                <div className="z-10 flex flex-col w-full max-w-lg h-96 items-center bg-ad-lightgrey rounded-t">
                    <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                        LOGIN
                    </div>
                    <div className="flex flex-col w-full items-center gap-10">
                        <div className="flex w-full justify-center">
                            <img className="bg-ad-golden w-10 h-10 py-1" src="../user.svg"></img>
                            <input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} className="w-4/5 h-10 py-2 px-4 bg-black text-white rounded-t"></input>
                        </div>
                        <div className="flex w-full justify-center">
                            <img className="bg-ad-golden w-10 h-10 py-1" src="../password.svg"></img>
                            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} className="w-4/5 py-2 px-4 bg-black text-white rounded-t"></input>
                        </div>
                        <div className="flex w-full justify-center">
                            <button onClick={login} className="flex justify-center w-4/5 py-2 px-4 bg-ad-golden text-black rounded">{waitingForResponse ? <img className="h-6 w-6" src="../loading1.gif"></img> : "Login"}</button>
                        </div>
                        <p onClick={goToRegisterPage} className="w-4/5 text-ad-golden hover:cursor-pointer hover:underline">Create a new account?</p>
                    </div>
                </div>
        </LandingBase>
    )
}
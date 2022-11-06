import { useState } from "react";
import axios from "../api/axios";
import { Navbar } from "./LandingPage/Navbar"
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [waitingForResponse, setWaitingForResponse] = useState(false);
    
    const navigate = useNavigate();

    const login = async () => {
        try{
            setWaitingForResponse(true);
            const response = await axios.post('/login', {email, password});
            console.log(response);
            localStorage.setItem("token", response.data.access_token)
            navigate("/user/profile");
        }catch(err){
            console.log("Error from http request: ", err);
        }
        setWaitingForResponse(false);
    }

    return(
        <>
            <div className='translucent-overlay'></div>
            <Navbar />
            <div className='navbar-line'><hr></hr></div>
            <div className='hero-content flex items-center px-6'>
                <div className="flex flex-col w-full max-w-lg h-96 items-center bg-ad-lightgrey rounded-t">
                    <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                        LOGIN
                    </div>
                    <div className="flex flex-col w-full items-center gap-10">
                        <div className="flex w-full justify-center">
                            <img className="bg-ad-golden w-10 h-10 py-1" src="../user.svg"></img>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="w-4/5 h-10 py-2 px-4 bg-black text-white rounded-t"></input>
                        </div>
                        <div className="flex w-full justify-center">
                            <img className="bg-ad-golden w-10 h-10 py-1" src="../password.svg"></img>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-4/5 py-2 px-4 bg-black text-white rounded-t"></input>
                        </div>
                        <button onClick={login} className="flex justify-center w-4/5 py-2 px-4 bg-ad-golden text-black rounded">{waitingForResponse ? <img className="h-6 w-6" src="../loading1.gif"></img> : "Login"}</button>
                        <p className="w-4/5 text-ad-golden">Create a new account?</p>
                    </div>
                </div>
                <img className='hero-image' src="../../hero.png"></img>
            </div>
        </>
    )
}
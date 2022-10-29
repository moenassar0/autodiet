import { useState } from "react";
import axios from "../api/axios";
import { Navbar } from "./LandingPage/Navbar"

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [waitingForResponse, setWaitingForResponse] = useState(false);

    const login = async () => {
        try{
            setWaitingForResponse(true);
            const response = await axios.post('/login', {email, password});
            console.log(response);
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
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="w-4/5 py-2 px-4 bg-black text-white rounded-t"></input>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} className="w-4/5 py-2 px-4 bg-black text-white rounded-t"></input>
                        <button onClick={login} className="flex justify-center w-4/5 py-2 px-4 bg-ad-golden text-black rounded">{waitingForResponse ? <img className="h-8 w-8" src="../loading1.gif"></img> : "Login"}</button>
                        <p className="w-4/5 text-ad-golden">Create a new account?</p>
                    </div>
                </div>
                <img className='hero-image' src="../../hero.png"></img>
            </div>
        </>
    )
}
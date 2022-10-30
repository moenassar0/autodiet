import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Navbar } from "./LandingPage/Navbar"
import {checkEmail, checkPassword, checkStringLength} from "../HelperFunctions";
import InputField from "./InputField";

export const Register = () => {
    
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [rPassword, setRPassword] = useState('');

    const [waitingForResponse, setWaitingForResponse]  = useState(false);

    useEffect(() => {
        setValidEmail(checkEmail(email));
        setValidUsername(checkStringLength(username, 8));
        setValidPassword(checkPassword(password));
    }, [username, email, password])

    const register = async () => {
        try{
            setWaitingForResponse(true);
            if(validEmail && validPassword && validUsername && password === rPassword){
                const response = await axios.post('/users', {email, password, user_role: "User", username});
                console.log(response);
            }
        }catch(err){
            console.log("Error from http request: ", err);
        }
        setWaitingForResponse(false);
    }

    return(
        <div className="relative min-h-screen h-auto w-full">
            <div className='translucent-overlay'></div>
            <Navbar />
            <div className='navbar-line'><hr></hr></div>
            <div className='hero-content flex items-center px-6'>
                <div className="flex flex-col w-full max-w-lg min-h-96 h-auto items-center bg-ad-lightgrey rounded-t">
                    <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                        Create a new account
                    </div>
                    <div className="flex flex-col w-full justify-center gap-10 px-2">
                        <div className="flex items-center place-content-between w-full h-10">
                            <span className="w-2/5 text-ad-golden text-lg">Email</span>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                className={"w-3/5 py-2 px-4 text-white bg-black rounded focus:outline-none focus:ring-2 focus:border-ad-golden focus:ring-ad-golden" +
                                (!validEmail && email ? "focus:border-red-500 focus:ring-red-500 border-red-500 text-red-600" : "")} type="email">
                            </input>
                        </div>
                        {!validEmail && email ? <div className="w-3/5 flex self-end text-red-600 font-bold">Invalid Email!</div> : ""}
                        <div className="flex items-center place-content-between w-full h-10">
                            <span className="w-2/5 text-ad-golden text-lg">Username</span>
                            <input 
                                onChange={(e) => setUsername(e.target.value)} 
                                className={"w-3/5 py-2 px-4 text-white bg-black rounded focus:outline-none focus:ring-2 focus:border-ad-golden focus:ring-ad-golden" +
                                (!validUsername && username ? "focus:border-red-500 focus:ring-red-500 border-red-500 text-red-600" : "")} type="text">
                            </input>
                        </div>
                        {!validUsername && username ? <div className="w-3/5 flex self-end text-red-600 font-bold">Usernames should be atleast 8 characters long!</div> : ""}
                        {<InputField state={password} title="Password" valid={validPassword} setHook={setPassword} error="Passwords should include one uppercase character and be atleast 8 characters long!"/>}
                        <div className="flex items-center place-content-between w-full h-10">
                            <span className="w-2/5 text-ad-golden text-lg">Repeat password</span>
                            <input 
                                onChange={(e) => setRPassword(e.target.value)} 
                                className={"w-3/5 py-2 px-4 text-white bg-black rounded focus:outline-none focus:ring-2 focus:border-ad-golden focus:ring-ad-golden" +
                                (!(password === rPassword) && rPassword ? "focus:border-red-500 focus:ring-red-500 border-red-500 text-red-600" : "")} type="password">
                            </input>
                        </div>
                        {!(password === rPassword) && rPassword ? <p className="w-3/5 flex self-end text-red-600">Passwords don't match!</p> : ""}
                        <div className="flex items-center self-end w-3/5 h-10">
                            <button onClick={register} className="w-full h-full mb-10 bg-ad-golden text-black rounded">{waitingForResponse ? <img className="h-6 w-6" src="../loading1.gif"></img> : "Register"}</button>
                        </div>
                    </div>
                </div>
                <img className='hero-image' src="../../hero.png"></img>
            </div>
        </div>
    )
}

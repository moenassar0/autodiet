import { useEffect, useState } from "react";
import {checkEmail, checkPassword, checkStringLength} from "../../HelperFunctions";
import InputField from "../../components/utility/InputField"
import { useTheme } from "../../context/ThemeContext";
import { registerUser } from "../../api/services/Users";
import { LandingBase } from "../../layouts/LandingBase";

export const Register = () => {
    const {themeType, setCurrentTheme} = useTheme();
    
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [rPassword, setRPassword] = useState('');

    const [message, setMessage] = useState('');

    const [waitingForResponse, setWaitingForResponse]  = useState(false);

    useEffect(() => {
        setCurrentTheme('dark');
        document.documentElement.classList.add("dark");
        setValidEmail(checkEmail(email));
        setValidUsername(checkStringLength(username, 8));
        setValidPassword(checkPassword(password));
    }, [username, email, password])

    const register = async () => {
        setWaitingForResponse(true);
        if(validEmail && validPassword && validUsername && password === rPassword){
            const data = {email, password, user_role: "User", username};
            const response = await registerUser(data);
            if(response?.response) setMessage("Successfully registered!")
            if(!response?.success) setMessage("Registeration error, please try again!")
        }
        setWaitingForResponse(false);
    }

    return(
        <LandingBase>
            <div className="z-10 flex flex-col w-full max-w-lg min-h-96 h-auto items-center bg-ad-lightgrey rounded-t">
                <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                    Create a new account
                </div>
                <div className="flex flex-col w-full justify-center gap-10 px-2">
                    <InputField title="Email" setHook={setEmail} state={email} valid={validEmail} error="Invalid Email!" type="text"></InputField>
                    <InputField title="Username" valid={validUsername} type="text" setHook={setUsername} state={username} error={"Usernames should be atleast 8 characters long!"}></InputField>
                    <InputField type="password" state={password} title="Password" valid={validPassword} setHook={setPassword} error="Passwords should include one uppercase character and be atleast 8 characters long!"/>
                    <InputField type="password" state={rPassword} setHook={setRPassword} valid={(password === rPassword)} error="Passwords don't match!" title="Repeat Password"></InputField>
                    <div className="flex items-center self-end w-3/5 h-10 px-1">
                        <button onClick={register} className="w-full h-full mb-10 bg-ad-golden text-black rounded">{waitingForResponse ? <img className="h-6 w-6" src="../loading1.gif"></img> : "Register"}</button>
                    </div>
                    {message ? <div className="flex bg-black rounded-full mb-1 w-full h-10 items-center justify-center text-ad-golden underline">{message}</div> :    ""}
                </div>
            </div>
        </LandingBase>
    )
}
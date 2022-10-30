import { useEffect, useState } from "react";
import { validateUser } from "../../HelperFunctions";
import { UserSideNavbar } from "./UserSideNavbar"
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

export const Profile = () => {

    const navigate = useNavigate();

    const [activeGoal, setActiveGoal] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [bodyFatPercentage, setBodyFatPercentage] = useState('');

    useEffect(() => {
        const check = async () => {if(! await validateUser()){
            navigate("/");
        }}
        check();
    }, [])
    useEffect(() => {
        console.log(activeGoal);
    }, [activeGoal])

    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-screen w-4/5">
                <div className="topnavbar"></div>
                <div className="flex h-4/5 w-full bg-ad-lightgrey">
                    <div className="flex flex-col h-4/5 w-full py-2 px-2">
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full text-white">Goal</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setActiveGoal("LoseWeight")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (activeGoal==="LoseWeight" ? "bg-ad-golden" : "bg-white")}>Lose weight</button>
                                <button onClick={() => {setActiveGoal("Maintain")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 " + (activeGoal==="Maintain" ? "bg-ad-golden" : "bg-white")}>Maintain</button>
                                <button onClick={() => {setActiveGoal("GainMuscle")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-r-lg " + (activeGoal==="GainMuscle" ? "bg-ad-golden" : "bg-white")}>Gain muscle</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full text-white">Sex</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setSex("Male")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/2 rounded-l-lg " + (sex ==="Male" ? "bg-ad-golden" : "bg-white")}>Male</button>
                                <button onClick={() => {setSex("Female")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/2 rounded-r-lg " + (sex === "Female" ? "bg-ad-golden" : "bg-white")}>Female</button>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Height</div>
                            <div className="flex w-3/5 h-1/2 justify-start">
                                <input type="text" className="w-1/2 h-full rounded"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Age</div>
                            <div className="flex w-3/5 h-1/2 justify-start">
                                <input type="text" className="w-1/2 h-full rounded"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Weight</div>
                            <div className="flex w-3/5 h-1/2 justify-start">
                                <input type="text" className="w-1/2 h-full rounded"></input>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Body Percentage</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setBodyFatPercentage("Lean")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (activeGoal==="LoseWeight" ? "bg-ad-golden" : "bg-white")}>Lean</button>
                                <button onClick={() => {setBodyFatPercentage("Medium")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 " + (activeGoal==="Maintain" ? "bg-ad-golden" : "bg-white")}>Medium</button>
                                <button onClick={() => {setBodyFatPercentage("High")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-r-lg " + (activeGoal==="GainMuscle" ? "bg-ad-golden" : "bg-white")}>High</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setBodyFatPercentage("Lean")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded bg-ad-golden"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
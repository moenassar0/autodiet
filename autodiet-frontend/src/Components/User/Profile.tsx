import { useEffect, useState } from "react";
import { validateUser, getToken } from "../../HelperFunctions";
import { UserSideNavbar } from "./UserSideNavbar"
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios";

export const Profile = () => {

    const navigate = useNavigate();

    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [activeGoal, setActiveGoal] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [bodyFatPercentage, setBodyFatPercentage] = useState('');

    function editDetails(){
        console.log(activeGoal, sex, weight, height, age, bodyFatPercentage);
    }

    useEffect(() => {
        const check = async () => {if(! await validateUser()){
            navigate("/");
        }}
        check();
        fetchUserData();
    }, [])

    useEffect(() => {
        console.log(activeGoal);
    }, [activeGoal])

    async function fetchUserData(){
        try{
            setCurrentlyFetching(true);
            const response = await axios.get('/user', getToken());
            const user_detail = (response.data.user_detail);
            setActiveGoal(user_detail.goal);
            setAge(user_detail.age);
            setWeight(user_detail.weight);
            setHeight(user_detail.height);
            setSex(user_detail.sex);
            setBodyFatPercentage(user_detail.bodyfat_percentage);
            setCurrentlyFetching(false);
        }catch{
            
        }
    }

    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-screen w-4/5">
                <div className="topnavbar"></div>
                {currentlyFetching 
                ? <div className="flex flex-col items-center justify-center h-full w-full"><img src="../logo2.png" className="h-14 w-28"></img><img src="../gh.gif" className="h-14 w-14"></img></div> 
                : 
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
                                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Age</div>
                            <div className="flex w-3/5 h-1/2 justify-start">
                                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Weight</div>
                            <div className="flex w-3/5 h-1/2 justify-start">
                                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white">Body Percentage</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setBodyFatPercentage("Lean")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (bodyFatPercentage==="Lean" ? "bg-ad-golden" : "bg-white")}>Lean</button>
                                <button onClick={() => {setBodyFatPercentage("Medium")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 " + (bodyFatPercentage==="Medium" ? "bg-ad-golden" : "bg-white")}>Medium</button>
                                <button onClick={() => {setBodyFatPercentage("High")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-r-lg " + (bodyFatPercentage==="High" ? "bg-ad-golden" : "bg-white")}>High</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => editDetails()} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded bg-ad-golden"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}
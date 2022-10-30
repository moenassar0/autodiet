import { useEffect, useState } from "react";
import { UserSideNavbar } from "./UserSideNavbar"

export const Profile = () => {

    const [activeGoal, setActiveGoal] = useState('');
    const [sex, setSex] = useState('');

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
                            <div className="flex items-center  w-1/5 h-full">Goal</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setActiveGoal("LoseWeight")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (activeGoal==="LoseWeight" ? "bg-ad-golden" : "bg-white")}>Lose weight</button>
                                <button onClick={() => {setActiveGoal("Maintain")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 " + (activeGoal==="Maintain" ? "bg-ad-golden" : "bg-white")}>Maintain</button>
                                <button onClick={() => {setActiveGoal("GainMuscle")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-r-lg " + (activeGoal==="GainMuscle" ? "bg-ad-golden" : "bg-white")}>Gain muscle</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full">Goal</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setActiveGoal("LoseWeight")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (activeGoal==="LoseWeight" ? "bg-ad-golden" : "bg-white")}>Lose weight</button>
                                <button onClick={() => {setActiveGoal("Maintain")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 " + (activeGoal==="Maintain" ? "bg-ad-golden" : "bg-white")}>Maintain</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
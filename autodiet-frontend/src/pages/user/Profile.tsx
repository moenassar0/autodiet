import { useEffect, useState } from "react";
import { validateUser, getToken } from "../../HelperFunctions";
import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { userNavbarLinks } from "../../types/consts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { ProfileField } from "../../components/utility/ProfileField";

export const Profile = () => {

    const navigate = useNavigate();

    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [activeGoal, setActiveGoal] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [bodyFatPercentage, setBodyFatPercentage] = useState('');
    const [activity, setActivity] = useState('');

    const goalButtonValues = ["Lose Weight", "Maintain", "Gain Muscle"];
    const bfButtonValues = ["Lean", "Medium", "High"];

    useEffect(() => {
        fetchUserData();
    }, [])

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
            setCurrentlyFetching(false);
        }
    }

    async function updateUserDetails(){
        try{
            setCurrentlyFetching(true);
            const response = await axios.post('/user', {goal: activeGoal, sex, weight, height, age, bodyfat_percentage: bodyFatPercentage, activity_level: "Medium"}, getToken());
            console.log(response);
            setCurrentlyFetching(false);
        }catch{
            setCurrentlyFetching(false);
        }
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Profile" username="Test">
                </AdminTopNavbar>
                {currentlyFetching 
                ? <div className="flex flex-col items-center justify-center h-full w-full"><img src="../logo2.png" className="h-14 w-28"></img><img src="../gh.gif" className="h-14 w-14"></img></div> 
                : 
                <div className="flex h-4/5 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey">
                    <div className="w-full flex flex-col h-4/5 sm:w-5/6 py-2 px-2">
                        <ProfileField title="Goal" buttonValues={goalButtonValues} hook={activeGoal} setHook={setActiveGoal}>

                        </ProfileField>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full font-medium dark:text-ad-golden text-black">Sex</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => {setSex("Male")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/2 rounded-l-lg " + (sex ==="Male" ? "dark:bg-ad-golden bg-admin-button" : "bg-white hover:bg-slate-200")}>Male</button>
                                <button onClick={() => {setSex("Female")}} className={"flex items-center justify-center h-1/2 justify-self-end w-1/2 rounded-r-lg " + (sex === "Female" ? "dark:bg-ad-golden bg-admin-button" : "bg-white hover:bg-slate-200")}>Female</button>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">Height</div>
                            <div className="flex w-4/5 sm:flex w-3/5 h-1/2 justify-start">
                                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">Age</div>
                            <div className="flex w-4/5 sm:flex w-3/5 h-1/2 justify-start">
                                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">Weight</div>
                            <div className="flex w-4/5 sm:flex w-3/5 h-1/2 justify-start">
                                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-1/2 h-full rounded px-1 py-1"></input>
                            </div>
                        </div>
                        <ProfileField title="Bodyfat Percentage" hook={bodyFatPercentage} setHook={setBodyFatPercentage} buttonValues={bfButtonValues}>
                            
                        </ProfileField>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center w-2/5 h-full text-white"></div>
                            <div className="flex w-4/5 sm:flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => updateUserDetails()} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded dark:bg-ad-golden bg-admin-button"}>Save Changes</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center w-1/5 h-full text-white"></div>
                            <div className="flex w-4/5 sm:flex w-3/5 h-full items-center justify-end">
                                <button onClick={() => updateUserDetails()} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded dark:bg-ad-golden bg-admin-button"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}
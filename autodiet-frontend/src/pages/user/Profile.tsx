import { useEffect, useState } from "react";
import { validateUser, getToken } from "../../HelperFunctions";
import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { userNavbarLinks } from "../../types/consts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { ProfileField } from "../../components/utility/ProfileField";
import { ProfileInput } from "../../components/utility/ProfileInput";
import { Select } from "../../components/utility/Select";

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
    const sexButtonValues = ["Male", "Female"];
    const activityOptions = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extremely Active"]

    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
        console.log(activity);
    }, [activity])

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
            setActivity(user_detail.activity_level);
            setCurrentlyFetching(false);
        }catch{
            setCurrentlyFetching(false);
        }
    }

    async function updateUserDetails(){
        try{
            setCurrentlyFetching(true);
            const response = await axios.post('/user', {goal: activeGoal, sex, weight, height, age, bodyfat_percentage: bodyFatPercentage, activity_level: activity}, getToken());
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
                <div className="flex h-4/5 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey">
                    <div className="w-full flex flex-wrap content-start h-4/5 sm:w-5/6 py-2 px-2 overflow-auto">
                        {currentlyFetching ? <img className="flex w-10 h-10 items-center justify-center" src="../logo512.png"></img> :
                        <>
                        <ProfileField title="Goal" buttonValues={goalButtonValues} hook={activeGoal} setHook={setActiveGoal}>
                        </ProfileField>
                        <ProfileField title="Sex" buttonValues={sexButtonValues} setHook={setSex} hook={sex}>
                        </ProfileField>
                        <ProfileInput title="Height" setHook={setHeight} hook={height} />
                        <ProfileInput title="Age" setHook={setAge} hook={age} />
                        <ProfileInput title="Weight" setHook={setWeight} hook={weight} />
                        <ProfileField title="Bodyfat Percentage" hook={bodyFatPercentage} setHook={setBodyFatPercentage} buttonValues={bfButtonValues}>
                        </ProfileField>
                        <div className="flex items-center w-full h-24">
                            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">Activity</div>
                            <div className="w-4/5 sm:w-3/5 flex h-full items-center">
                                <Select hook={activity} name="activity" setHook={setActivity} options={activityOptions} />
                            </div>                            
                        </div>
                        <div className="flex w-full h-24">
                            <div className="flex items-center w-1/5 h-full text-white"></div>
                            <div className="w-4/5 sm:w-3/5 flex h-full items-center justify-end">
                                <button onClick={() => updateUserDetails()} className={"flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded dark:bg-ad-golden bg-admin-button"}>Save Changes</button>
                            </div>
                        </div>
                        </>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import { TopNavbar } from "../../components/admin/TopNavbar";
import { activityOptions, bfButtonValues, goalButtonValues, sexButtonValues, userNavbarLinks } from "../../types/consts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { ProfileField } from "../../components/utility/ProfileField";
import { ProfileInput } from "../../components/utility/ProfileInput";
import { Select } from "../../components/utility/Select";
import { getUserDetails, saveUserDetails } from "../../api/services/Users";

export const Profile = () => {

    const [activeGoal, setActiveGoal] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [bodyFatPercentage, setBodyFatPercentage] = useState('');
    const [activity, setActivity] = useState('');

    useEffect(() => {
        fetchUserData();
    }, [])

    useEffect(() => {
        console.log(activity);
    }, [activity])

    async function fetchUserData(){
        const response = await getUserDetails();
        const user_detail = (response?.response.user_detail);
        setActiveGoal(user_detail.goal);
        setAge(user_detail.age);
        setWeight(user_detail.weight);
        setHeight(user_detail.height);
        setSex(user_detail.sex);
        setBodyFatPercentage(user_detail.bodyfat_percentage);
        setActivity(user_detail.activity_level);
    }

    async function updateUserDetails(){
        const data = {goal: activeGoal, sex, weight, height, age, bodyfat_percentage: bodyFatPercentage, activity_level: activity}
        await saveUserDetails(data);
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <TopNavbar title="Profile" username="Test">
                </TopNavbar>
                <div className="flex h-4/5 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey">
                    <div className="w-full flex flex-wrap content-start h-4/5 sm:w-5/6 py-2 px-2 overflow-auto">
                        <ProfileField title="Goal" buttonValues={goalButtonValues} hook={activeGoal} setHook={setActiveGoal}>
                        </ProfileField>
                        <ProfileField title="Sex" buttonValues={sexButtonValues} setHook={setSex} hook={sex}>
                        </ProfileField>
                        <ProfileInput placeholder="(cm)" title="Height" setHook={setHeight} hook={height} />
                        <ProfileInput placeholder="" title="Age" setHook={setAge} hook={age} />
                        <ProfileInput placeholder="(kg)" title="Weight" setHook={setWeight} hook={weight} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
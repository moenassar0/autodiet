import { useContext, useEffect, useState } from "react";
import Meal from "../../components/user/Meal";
import { calculateCalories, getNutritionFromMeals, getToken, sendNotification, tomorrowFromDay, yesterdayFromDay } from "../../HelperFunctions";
import { MealInterface } from "../../types/types";
import { Generator } from "../../Generator";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { Button } from "../../components/utility/Button";
import { TopNavbar } from "../../components/admin/TopNavbar";
import { getCustomizedMeals } from "../../api/services/Meals";
import { addOrUpdateUserMeals, getUser, getUserDetails, getUserMeals, sendEmail } from "../../api/services/Users";
import { CustomNotification } from "../../components/utility/CustomNotification";
import { NutritionDetails } from "../../components/utility/NutritionDetails";

export const Home = () => {
    const [date, setDate] = useState(new Date());
    const [meals, setMeals] = useState([] as any);
    const [mealSet, setMealSet] = useState([]);
    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [nutritionData, setNutritionData] = useState([] as any);
    const [hideNotification, setHideNotification] = useState(true);
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        fetchUsersMeals();
        fetchUserDetails();   
    }, [])

    useEffect(() => {
        fetchUsersMeals();
    }, [date])

    const fetchUsersMeals = async () => {
        const response = await getUserMeals({date: date.toISOString().slice(0, 10)});
        if(response?.response){
            setMeals(response?.response?.user_meals);
            setNutritionData(getNutritionFromMeals(response?.response.user_meals));
        }
    }

    //If user has no profile saved prompt him to go to his profile
    const fetchUserDetails = async () => {
        const response = await getUserDetails();
        if(response?.response?.user_detail == null){
            console.log(response?.response?.user_detail);
            setHideNotification(false);
            sendNotification();
        }
        return (calculateCalories(response?.response.user_detail));
    }

    const fetch = async () => {
        setCurrentlyFetching(true);
        const response = await getCustomizedMeals();
        if(response?.success) setMealSet(response.response)
        setCurrentlyFetching(false);
    }

    async function getMealPlan(){
        await fetch();
        const caloriesToEat = await fetchUserDetails();
        const mealPlanResponse = (await Generator(mealSet, caloriesToEat))
        setMeals(mealPlanResponse.gen_meal_plan);
        //Set nutrition for piechart
        setNutritionData(mealPlanResponse.nutrition);
        //Update user's meals in db
        await addOrUpdateUserMeals({meals: mealPlanResponse.gen_meal_plan, date: date.toISOString().slice(0, 10)});
    }

    const sendUserEmail = async () => {
        const data = {date: date.toISOString().slice(0, 10)};
        const response = await sendEmail(data);
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <TopNavbar title="Meals" username="Test">
                    <div className="flex w-1/2 h-full items-center gap-3">
                    <button className="w-10 h-1/2 dark:bg-ad-golden bg-admin-button text-white text-2xl dark:text-black rounded" title=">" 
                    onClick={() => {setSlide(false); setDate(yesterdayFromDay(date))}}>{"<"}</button>
                        <input onChange={(e) => {setDate(new Date(e.target.value))}} value={date.toISOString().slice(0, 10)} className="w-2/4 h-1/2 rounded flex items-center bg-admin-grey-background dark:bg-[#1F1F1F] dark:text-ad-golden" type="date"></input>
                        <button className="w-10 h-1/2 dark:bg-ad-golden bg-admin-button text-white text-2xl dark:text-black rounded" title=">"
                        onClick={() => {setSlide(true); setDate(tomorrowFromDay(date))}}>{">"}</button>
                    </div>
                    <div className="gap-4 flex w-auto h-full items-center">
                        <Button title="Email" onclickMethod={() => {sendUserEmail()}} styling=""></Button>
                        <Button title="Generate" onclickMethod={async () => { getMealPlan(); } } styling={meals?.length === 0 ? "animate-bounce" : ""}></Button>
                    </div>
                </TopNavbar>
                <div className="flex h-5/6 grow w-full">
                    <div className="overflow-hidden flex h-full w-full bg-admin-grey-background dark:bg-[#1F1F1F]">
                        <div className={(slide ? "fadeInLeft" : "slideright") + " grow w-full flex h-full sm:w-9/12 bg-admin-grey-background px-2 py-2 dark:bg-[#1F1F1F]"}>
                            <div className="flex flex-wrap content-start w-full h-auto overflow-y-scroll">
                                {meals?.map((meal: MealInterface) => (<div key={meal.id}><Meal meal={meal}></Meal></div>))}
                            </div>
                        </div>
                    </div>
                    <NutritionDetails meals={meals} nutritionData={nutritionData}></NutritionDetails>
                </div>
            </div>
            <CustomNotification body="Go to your profile and save your details" turnOff={hideNotification} setTurnOff={setHideNotification}></CustomNotification>
            <div className="absolute bg-black right-5 bottom-5 w-10 h-10 rounded-full">
            </div>
        </div>
    )
}
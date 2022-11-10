import { useContext, useEffect, useState } from "react";
import axios from "../../api/axios"
import Meal from "../../components/user/Meal";
import PlanGenerator from "../../PlanGenerator";
import { Link, Outlet } from "react-router-dom";
import { UserSideNavbar } from "../../components/user/UserSideNavbar";
import { getToken, sendNotification } from "../../HelperFunctions";
import { TopNavBar } from "../../components/utility/TopNavBar";
import { MealInterface } from "../../types/types";
import { Generator } from "../../Generator";
import { firebase_init } from "../../api/firebase_init_test";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { Button } from "../../components/utility/Button";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { getCustomizedMeals } from "../../api/services/Meals";
import { PieChart } from "../../components/charts/PieChart";
import { addOrUpdateUserMeals, getUserMeals } from "../../api/services/Users";
import { CustomNotification } from "../../components/utility/CustomNotification";
import { drawNotification } from "../../DrawFunctions";
import { NutritionDetails } from "../../components/utility/NutritionDetails";

export const Home = () => {
    const [date, setDate] = useState(new Date());
    const [meals, setMeals] = useState([] as any);
    const [mealSet, setMealSet] = useState([]);
    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [nutritionData, setNutritionData] = useState([] as any);
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        drawNotification();
        fetch();
        fetchUsersMeals();
        
    }, [])

    useEffect(() => {
        fetchUsersMeals();
    }, [date])

    const fetchUsersMeals = async () => {
        const response = await getUserMeals({date: date.toISOString().slice(0, 10)});
        console.log(response?.response?.user_meals);
        setMeals(response?.response?.user_meals);
    }

    const fetch = async () => {
        setCurrentlyFetching(true);
        console.time('Execution Time 2');
        const response = await getCustomizedMeals();
        if(response?.success) setMealSet(response.response)
        console.log(response?.response);
        console.timeEnd('Execution Time 2');
        setCurrentlyFetching(false);
    }

    const sendCustomNotification = () => {
        return(
            <>
            </>
        )
    }

    async function getMealPlan(){
        await fetch();
        console.log(mealSet);
        const mealPlanResponse = (await Generator(mealSet))
        setMeals(mealPlanResponse.gen_meal_plan);
        console.log(mealPlanResponse.gen_meal_plan);
        setNutritionData(mealPlanResponse.nutrition);
        const response2 = await addOrUpdateUserMeals({meals: mealPlanResponse.gen_meal_plan, date: date.toISOString().slice(0, 10)});
        console.log(response2);
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test">
                    <div className="flex w-1/2 h-full items-center gap-3">
                    <button className="w-10 h-1/2 dark:bg-ad-golden bg-admin-button text-white text-2xl dark:text-black rounded" title=">" onClick={() => {
                            let tomorrow = (date.getDate());
                            console.log(tomorrow);
                            var nextDay = new Date(date);
                            nextDay.setDate(date.getDate() - 1);
                            setDate(nextDay);
                            //setDate(tomorrow)
                            }}>{"<"}</button>
                        <input value={date.toISOString().slice(0, 10)} className="w-2/4 h-1/2 rounded flex items-center bg-admin-grey-background dark:bg-[#1F1F1F] dark:text-ad-golden" type="date"></input>
                        <button className="w-10 h-1/2 dark:bg-ad-golden bg-admin-button text-white text-2xl dark:text-black rounded" title=">" onClick={() => {
                            let tomorrow = (date.getDate());
                            console.log(tomorrow);
                            var nextDay = new Date(date);
                            nextDay.setDate(date.getDate() + 1);
                            setDate(nextDay);
                            //setDate(tomorrow)
                            }}>{">"}</button>
                    </div>
                    <div className="gap-4 flex w-auto h-full items-center">
                        <Button title="Notification" onclickMethod={() => { sendCustomNotification(); sendNotification(); } } styling={""}></Button>
                        <Button title="Generate" onclickMethod={async () => { getMealPlan(); } } styling={meals?.length === 0 ? "animate-bounce" : ""}></Button>
                    </div>
                </AdminTopNavbar>
                <div className="flex h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F]">
                    <div className="w-full flex h-full sm:w-9/12 bg-admin-grey-background px-2 py-2 dark:bg-[#1F1F1F]">
                        <div className="flex flex-wrap content-start w-full h-auto overflow-y-scroll">
                            {meals?.map((meal: MealInterface) => (<div key={meal.id}><Meal meal={meal}></Meal></div>))}
                        </div>
                    </div>
                    <NutritionDetails meals={meals} nutritionData={nutritionData}></NutritionDetails>
                </div>
            </div>
            <CustomNotification></CustomNotification>
        </div>
    )
}
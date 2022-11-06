import { useContext, useEffect, useState } from "react";
import axios from "../../api/axios"
import Meal from "../../components/user/Meal";
import PlanGenerator from "../../PlanGenerator";
import { Link, Outlet } from "react-router-dom";
import { UserSideNavbar } from "../../components/user/UserSideNavbar";
import { getToken, sendNotification } from "../../HelperFunctions";
import PlanGenerator2 from "../../PlanGenerator2";
import { TopNavBar } from "../../components/utility/TopNavBar";
import { MealInterface } from "../../types/types";
import { Generator } from "../../Generator";
import { firebase_init } from "../../api/firebase_init_test";

export const Home = () => {
    const [generatedMeals, setGeneratedMeals] = useState(false);
    const [meals, setMeals] = useState([] as any);
    const [mealSet, setMealSet] = useState([]);
    const [currentlyFetching, setCurrentlyFetching] = useState(false);

    useEffect(() => {
        fetch();
        firebase_init();
    }, [])

    const fetch = async () => {
        try{
            setCurrentlyFetching(true);
            console.time('Execution Time 2');
            const response = await axios.get('/meals', getToken());
            console.log(response.data);
            console.timeEnd('Execution Time 2');
            setMealSet(response.data)
            setCurrentlyFetching(false);
        }catch{
            
        }
    }

    return(
        <div className="flex h-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-min-screen w-4/5">
                <TopNavBar title="Your Mealplan">
                    <button className="w-20 h-10 rounded bg-ad-golden"
                    onClick={ async () => {
                        setMeals(await Generator(mealSet));
                        
                                //let generatedMeals = PlanGenerator(DBMeals, staticMeal);
                                //console.log(generatedMeals);
                                //setMeals(generatedMeals);
                                //</TopNavBar>setGeneratedMeals(false)
                            }}>Generate</button>
                    <button className="w-20 h-10 rounded bg-ad-golden" onClick={() => {sendNotification()}}>Notific</button>
                </TopNavBar>
                <div className="flex h-4/5 w-full bg-ad-lightgrey px-2 py-2">
                    <div className="flex flex-wrap w-full h-auto overflow-y-scroll scrollbar">
                        {meals.map((meal: MealInterface) => (<div key={meal.id}><Meal meal={meal}></Meal></div>))}
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
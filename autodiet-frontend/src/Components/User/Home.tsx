import { useEffect, useState } from "react";
import axios from "../../api/axios"
import Meal from "./Meal";
import PlanGenerator from "../../PlanGenerator";
import { Link, Outlet } from "react-router-dom";
import { UserSideNavbar } from "./UserSideNavbar";
import { getToken } from "../../HelperFunctions";
import PlanGenerator2 from "../../PlanGenerator2";
import { TopNavBar } from "../utility/TopNavBar";
interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number,
  }
export const Home = () => {

    const [DBMeals, setDBMeals] = useState([]);
    const [generatedMeals, setGeneratedMeals] = useState(false);
    const [meals, setMeals] = useState([]);
    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [generate, setGenerate] = useState(false);

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        try{
            setCurrentlyFetching(true);
            console.time('Execution Time 2');
            const response = await axios.get('/meals', getToken());
            console.log(response);
            console.timeEnd('Execution Time 2');
            setDBMeals(response.data.meals);
            
            setCurrentlyFetching(false);
            //let meals2:Array<MealProps> = response.data.meals;
            //await PlanGenerator(meals2);
        }catch{
            
        }
    }

    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-min-screen w-4/5">
                <TopNavBar title="Your Mealplan">
                    <button className="w-20 h-10 rounded bg-ad-golden"
                    onClick={async () => {
                                let generatedMeals = PlanGenerator(DBMeals);
                                console.log(generatedMeals);
                                setMeals(generatedMeals);
                                setGeneratedMeals(false)}}>Generate</button>
                </TopNavBar>
                <div className="flex h-4/5 w-full bg-ad-lightgrey px-2 py-2">
                    <div className="flex flex-wrap w-full h-auto overflow-y-scroll scrollbar">
                        {generatedMeals 
                        ? <div className="flex flex-col items-center justify-center h-full w-full"><img src="../logo2.png" className="h-14 w-28"></img><img src="../gh.gif" className="h-14 w-14"></img></div>
                        : meals.map((meal: MealProps) => (<div key={meal.id}><Meal meal={meal}></Meal></div>))}
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
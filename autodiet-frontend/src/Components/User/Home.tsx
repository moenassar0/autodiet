import { useEffect, useState } from "react";
import axios from "../../api/axios"
import Meal from "./Meal";
import PlanGenerator from "../../PlanGenerator";
import { Link, Outlet } from "react-router-dom";
import { UserSideNavbar } from "./UserSideNavbar";
interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number
  }
export const Home = () => {

    const [DBMeals, setDBMeals] = useState([]);
    const [meals, setMeals] = useState([]);
    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [generate, setGenerate] = useState(false);
    const headers = {headers:{'Authorization' : "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjY3MDQ3NTQ3LCJleHAiOjE2NjcwNTExNDcsIm5iZiI6MTY2NzA0NzU0NywianRpIjoibkxZclNFbk9LSm1qUmNuWSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.f173l2m_MfWBeUyFjp4AO5v561J9qjg0Jv7Mg-b_4vw"}};

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        try{
            setCurrentlyFetching(true);
            console.time('Execution Time');
            const response = await axios.get('/meals', headers);
            console.log(response);
            console.timeEnd('Execution Time');
            setDBMeals(response.data.meals);
            console.log(meals);
            setCurrentlyFetching(false);
            //console.log(PlanGenerator(response.data.meals));
            let meals2:Array<MealProps> = response.data.meals;
            //await PlanGenerator(meals2);
        }catch{
            
        }
    }

    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="container">
                <div className="topnavbar"></div>
                <div className="mealplan-container">
                    <div className="meals-container scrollbar">
                        {currentlyFetching 
                        ? <div className="flex flex-col items-center justify-center h-full w-full"><img src="../logo2.png" className="h-14 w-28"></img><img src="../gh.gif" className="h-14 w-14"></img></div>
                        : meals.map((meal: MealProps) => (<div key={meal.id}><Meal meal={meal}></Meal></div>))}
                    </div>
                    <div className="nutrition-container">
                        <button onClick={() => {
                            let generatedMeals = PlanGenerator(DBMeals);
                            console.log(generatedMeals);
                            setMeals(generatedMeals)}}>Generate</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
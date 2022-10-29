import { useEffect, useState } from "react";
import axios from "../../api/axios"
import Meal from "./Meal";
interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number
  }
export const Home = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        try{
            console.time('Execution Time');
            const response = await axios.get('/meals');
            console.log(response);
            console.timeEnd('Execution Time');
            setMeals(response.data.meals);
            console.log(meals);
        }catch{
            
        }
    }

    return(
        <div className="flex">
            <div className="sidenavbar">
                <div className="sidenavbar-top"><img src="../logo2.png"></img></div>
                <div className="sidenavbar-items scrollbar">
                    <div className="sidenavbar-item"></div>
                    <div className="sidenavbar-item">Username</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                    <div className="sidenavbar-item">Meals</div>
                    <div className="sidenavbar-item">Profile</div>
                    <div className="sidenavbar-item">Preferences</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                    <div className="sidenavbar-item">Browse meals</div>
                    <div className="sidenavbar-item">Browse food items</div>
                    <div className="sidenavbar-item">Browse diets</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                </div> 
            </div>
            <div className="container">
                <div className="topnavbar"></div>
                <div className="mealplan-container">
                    <div className="meals-container scrollbar">
                        {meals.map((meal: MealProps) => (<Meal {...meal}></Meal>))}
                    </div>
                    <div className="nutrition-container">
                        asdasdasd
                    </div>
                </div>
            </div>

        </div>
    )
}
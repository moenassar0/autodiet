import { useEffect, useState } from "react"
import { getMealRecipe, getMeals } from "../../api/services/Meals"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { AdminBase } from "../../layouts/AdminBase"
import { adminNavbarLinks } from "../../types/consts"
import { Recipe } from "../../types/types"

export const AdminRecipes = () => {
    
    const [meals, setMeals] = useState([]);
    const [mealRecipe, setMealRecipe] = useState([]);
    const [currentMeal, setCurrentMeal] = useState(0);

    useEffect(() => {
        fetchMeals();
    }, [])

    useEffect(() => {
        getRecipe();
    }, [currentMeal])

    const fetchMeals = async () => {
        setMeals((await getMeals())?.response.meals);
    }

    const getRecipe = async () => {
        if(currentMeal){
            const response = await getMealRecipe(currentMeal.toString());
            console.log(response);
            setMealRecipe(response?.response.recipe);
        }
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={adminNavbarLinks}/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <AdminTopNavbar title={"Recipes"} username="Admin">
                </AdminTopNavbar>
                <div className="flex flex h-screen overflow-auto">
                    <div className="flex flex-wrap flex-col h-full grow w-1/2 bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                        <div className="flex h-10 w-full rounded bg-white hover:drop-shadow">Choose a meal</div>
                        {meals?.map((meal: any) => (<div key={meal.id} className="cursor-pointer hover:underline" onClick={() => {setCurrentMeal(meal.id)}}>{meal.title}</div>))}
                    </div>
                    <div className="flex flex-col h-full w-1/2 bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">

                    </div>
                </div>
            </div>
        </div>
    )
}
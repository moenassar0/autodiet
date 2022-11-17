import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { getMealRecipe, getMeals } from "../../api/services/Meals"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { SearchBar } from "../../components/utility/SearchBar"
import { Steps } from "../../components/utility/Steps"
import { AdminBase } from "../../layouts/AdminBase"
import { adminNavbarLinks } from "../../types/consts"
import { MealInterface, Recipe } from "../../types/types"

export const AdminRecipes = () => {

    const styles = {
        active: " bg-slate-400",
        meal: "flex w-full h-10 border-b border-slate-100 dark:border-slate-700 text-slate-700 py-2 pl-8 dark:text-slate-200 text-sm hover:bg-slate-400 cursor-pointer "
    }
    
    const [meals, setMeals] = useState([]);
    const [mealRecipe, setMealRecipe] = useState([]);
    const [currentMeal, setCurrentMeal] = useState({} as MealInterface);
    const [currentFoodItem, setCurrentFoodItem] = useState({} as any);
    const [addToRecipe, setAddToRecipe] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [stepCount, setStepCount] = useState(0);

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
            const response = await getMealRecipe(currentMeal.id.toString());
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
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                    <div className="flex h-full w-full">
                        <div className="flex flex-col h-full w-1/2 bg-white drop-shadow">
                            <SearchBar setSearchInput={setSearchInput}></SearchBar>
                            <div className="flex flex-wrap overflow-auto content-start h-full w-full rounded bg-white drop-shadow">
                                {meals?.map((meal: any) => (
                                    <div key={meal.id} className={styles.meal + (meal.id == currentMeal?.id?.toString() ? (styles.active) : "")} onClick={() => {setCurrentMeal(meal)}}>
                                        {meal.title}
                                    </div>))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col h-full w-1/2 bg-white drop-shadow">
                            <SearchBar setSearchInput={setSearchInput}></SearchBar>
                            {mealRecipe.length > 0 
                                ? mealRecipe.map((recipe: Recipe) => (
                                    <div key={recipe.id} className={styles.meal + (recipe.id == currentFoodItem?.id?.toString() ? (styles.active) : "")} onClick={() => {setCurrentFoodItem(recipe)}}>
                                        {recipe.title + " " + (recipe.serving_size * parseFloat(recipe.pivot.multiplier)) + recipe.serving_type}
                                    </div>
                                ))
                                : <div className="bg-white text-black w-full h-10">"No recipe found. Pick a meal."</div>}
                        </div>
                    </div>
                    <div className="flex h-10 w-full p-2">
                        <Button title="Link items" onclickMethod={()=>{}} styling="flex ml-auto"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
///////////////////////////////////////////////////////////////////////
/*
<div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4 gap-3">
        <Steps stepCount={stepCount}></Steps>
    {mealRecipe.length == 0 ? <section className="flex flex-col h-full w-full">

        
        <div className="flex h-10 w-full p-2 bg-white dark:bg-[#1D1D1E] rounded drop-shadow">
            <div className="flex w-10 h-full items-center justify-end">
                <FontAwesomeIcon icon={faSearch} className="text-admin-main dark:text-ad-golden" />
            </div>
            <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search.."
            className="w-full h-full flex px-2 py-2 outline-0 dark:bg-[#1F1F1F] dark:text-ad-golden" />
        </div>
        <div className="flex flex-wrap overflow-auto content-start h-full w-full rounded bg-white drop-shadow">
        {meals?.map((meal: any) => (
            <div key={meal.id} className={styles.meal} onClick={() => {setCurrentMeal(meal.id)}}>
                {meal.title}
            </div>))
        }
        </div>
    
    <div className="h-8 w-full flex px-2">
        <Button title="Next" onclickMethod={() => {setStepCount(stepCount + 1)}} styling="w-16 h-8 ml-auto"></Button>
    </div></section>
: 
<div className="flex flex-col h-full w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
    {mealRecipe.length > 0 ? <div><Button title="Add Recipe" styling="" onclickMethod={() => {setAddToRecipe(true)}}></Button></div> : ""}
    {mealRecipe.length > 0 
    ? mealRecipe.map((recipe: Recipe) => (
        <div className="bg-white text-black w-full h-10">
            {recipe.title + " " + (recipe.serving_size * parseFloat(recipe.pivot.multiplier)) + recipe.serving_type}
        </div>
    ))
    : <div className="bg-white text-black w-full h-10">"No recipe found. Pick a meal."</div>}
</div>    
}</div>
*/
///////////////////////////////////////////////////////////////////////

/*
{meals?.map((meal: any) => (<div key={meal.id} className="cursor-pointer hover:underline" onClick={() => {setCurrentMeal(meal.id)}}>{meal.title}</div>))}



<div className="flex flex-col h-full w-1/2 bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
    {mealRecipe.length > 0 ? <div><Button title="Add Recipe" styling="" onclickMethod={() => {setAddToRecipe(true)}}></Button></div> : ""}
    {mealRecipe.length > 0 
    ? mealRecipe.map((recipe: Recipe) => (
        <div className="bg-white text-black w-full h-10">
            {recipe.title}
        </div>
    ))
    : <div className="bg-white text-black w-full h-10">"No recipe found. Pick a meal."</div>}
</div>

*/








/*
{
<table className="border-collapse table-auto w-full text-sm">
    <thead className="top-0 left-0 sticky text-center bg-[#F5F5F6] dark:bg-[#3A3B3B]">
        <tr>
            <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-8 dark:text-ad-golden text-left">
                gg
            </th>
        </tr>
    </thead>
    <tbody className="w-60 bg-white dark:bg-admin-dark-background">
            <tr className="dark:hover:bg-[#855b00]">
                <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-8 dark:text-slate-200">
                    gg
                </td>
                <td className="flex gap-2 border-b border-slate-100 dark:border-slate-700 py-2 pl-2 ">

                </td>
            </tr>
    </tbody>
</table>
}

*/
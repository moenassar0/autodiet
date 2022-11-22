import { useEffect, useState } from "react"
import { getFoods, getFoodsByTitle } from "../../api/services/Foods"
import { addLink } from "../../api/services/MealRecipe"
import { getMealRecipe, getMeals } from "../../api/services/Meals"
import { TopNavbar } from "../../components/admin/TopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { BasePopup } from "../../components/utility/BasePopup"
import { Button } from "../../components/utility/Button"
import InputField from "../../components/utility/InputField"
import { PopupOverlay } from "../../components/utility/PopupOverlay"
import { SearchBar } from "../../components/utility/SearchBar"
import { getMultiplierFromFood } from "../../HelperFunctions"
import { adminNavbarLinks } from "../../types/consts"
import { InputFieldInterface, MealInterface, Recipe } from "../../types/types"

export const AdminRecipes = () => {

    const styles = {
        active: " bg-slate-400",
        meal: "flex w-full h-10 border-b border-slate-100 dark:border-slate-700 text-slate-700 py-2 pl-8 dark:text-slate-200 text-sm hover:bg-slate-400 cursor-pointer "
    }
    
    const [meals, setMeals] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [mealRecipe, setMealRecipe] = useState([]);
    const [currentMeal, setCurrentMeal] = useState({} as MealInterface);
    const [currentFoodItem, setCurrentFoodItem] = useState({} as any);
    const [searchInput, setSearchInput] = useState("");
    const [linkPopup, setLinkPopup] = useState(false);
    const [multiplier, setMultiplier] = useState(0);
    const [responseMessage, setResponseMessage] = useState("");

    const popupInput: Array<InputFieldInterface> = [{title:"", error:"", state:multiplier.toString(), setHook:setMultiplier, valid:true }]

    useEffect(() => {
        fetchMeals();
        fetchRecipes();
    }, [])

    useEffect(() => {
        getRecipe();
    }, [currentMeal])

    const fetchMeals = async () => {
        setMeals((await getMeals())?.response.meals);
    }

    const fetchRecipes = async () => {
        setRecipes((await getFoods())?.response.foods);
    }

    const getRecipe = async () => {
        if(currentMeal){
            const response = await getMealRecipe(currentMeal.id?.toString());
            console.log(response);
            setMealRecipe(response?.response.recipe);
        }
    }

    useEffect(() => {
        searchQuery();
    }, [searchInput])

    const searchQuery = async () => {
        const response = await getFoodsByTitle(searchInput);
        setRecipes(response?.response.foods);
    }

    const addRecipeLink = async () => {
        const rMultiplier = getMultiplierFromFood(multiplier, currentFoodItem);
        const data = {meal_id: currentMeal.id, recipe_item_id: currentFoodItem.id, multiplier:rMultiplier}
        const response = await addLink(data);
        if(response){
            setResponseMessage((response.success) ? "Success" : "Server Error");
        }
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={adminNavbarLinks}/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <TopNavbar title={"Recipes"} username="Admin">
                </TopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                    <div className="flex h-5/6 grow w-full">
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
                            <div className="flex flex-wrap overflow-auto content-start h-full w-full rounded bg-white drop-shadow">
                            {recipes?.length > 0 
                                ? recipes.map((recipe: Recipe) => (
                                    <div key={recipe.id} className={styles.meal + (recipe.id == currentFoodItem?.id?.toString() ? (styles.active) : "")} onClick={() => {setCurrentFoodItem(recipe)}}>
                                        {recipe.title}
                                    </div>
                                ))
                                : <div className="bg-white text-black w-full h-10">"No recipe found. Pick a meal."</div>}
                        </div></div>
                    </div>
                    <div className="flex h-10 w-full p-2">
                        <Button title="Link items" onclickMethod={()=>{setLinkPopup(true)}} styling="flex ml-auto"></Button>
                    </div>
                </div>
            </div>
            {
                linkPopup ?
                <>
                <PopupOverlay></PopupOverlay>
                    <BasePopup trigger={linkPopup} setTrigger={setLinkPopup} message={responseMessage} submitMethod={addRecipeLink} title="Link meal" submitButtonTitle="Link">
                        <div className="flex w-full h-10 rounded bg-white drop-shadow">
                            <span className="font-medium mr-1 ml-1">Linking</span>
                            <span className="font-medium underline">{currentMeal.title}</span>
                            <span className="font-medium mr-1 ml-1">with</span>
                            <span className="font-medium underline">{"  " + currentFoodItem.title}</span>
                        </div>
                        <InputField placeholder={currentFoodItem.serving_type} error="" title="Multipler" setHook={setMultiplier} state={multiplier.toString()} valid={true}></InputField>
                    </BasePopup> 
                </> 
                : ""
            }
        </div>
    )
}
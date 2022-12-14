import { useEffect, useState } from "react"
import { getFoods, getFoodsByTitle } from "../../api/services/Foods";
import { LoggedFood } from "../../components/user/LoggedFood";
import { BasePopup } from "../../components/utility/BasePopup";
import { Button } from "../../components/utility/Button";
import InputField from "../../components/utility/InputField";
import { PopupOverlay } from "../../components/utility/PopupOverlay";
import { SearchBar } from "../../components/utility/SearchBar";
import { getMultiplierFromFood, multiplyFoodNutrition } from "../../HelperFunctions";
import { UserBase } from "../../layouts/UserBase"
import { Recipe } from "../../types/types";

export const DietLog = () => {

    const [foods, setFoods] = useState([]);
    const [currFoodID, setCurrFoodID] = useState(-1);
    const [addPopup, setAddPopup] = useState(false);
    const [addedFoods, setAddedFoods] = useState([] as any);
    const [currentFoodItem, setCurrentFoodItem] = useState({} as any);
    const [foodServing, setFoodServing] = useState("");

    const [searchInput, setSearchInput] = useState('');
    const recordsToShow = foods.slice(0, 10);

    useEffect(() => {
        searchQuery();
    }, [searchInput])

    const searchQuery = async () => {
        const response = await getFoodsByTitle(searchInput);
        setFoods(response?.response.foods);
    }

    const styles = {
        active: " bg-slate-400",
        meal: "flex w-full h-10 border-b border-slate-100 dark:border-slate-700 text-slate-700 py-2 pl-8 dark:text-slate-200 text-sm hover:bg-slate-600 cursor-pointer "
    }

    useEffect(() => {
        searchQuery();
    }, [currentFoodItem])

    const addFoodItem = () => {
        const mult = (getMultiplierFromFood(parseFloat(foodServing), currentFoodItem));
        addedFoods.push(multiplyFoodNutrition(mult, currentFoodItem));
        setFoodServing("");
    }

    return(
        <div className="flex h-screen w-full">
            <UserBase topNavbarChildren={<></>} pageTitle="Diet Log">
                <div className="flex flex-col h-full w-full p-2 gap-2">
                    <div className="flex bg-white h-12 items-center w-full rounded drop-shadow bg-white dark:bg-admin-dark-background p-2 items-center">
                        <Button onclickMethod={() => {setAddPopup(true)}} styling="ml-auto" title="Add Food"></Button>
                    </div>
                    <div className="flex flex-col h-5/6 grow w-full rounded drop-shadow bg-white dark:bg-admin-dark-background p-2">
                        {addedFoods.length>0 ? addedFoods.map((food: any) => (
                            <LoggedFood food={food}></LoggedFood>
                        )) : ""}
                    </div>
                </div>
            </UserBase>
            {addPopup ?
            <>
                <PopupOverlay></PopupOverlay>
                <BasePopup trigger={addPopup} setTrigger={setAddPopup} message="" title="Choose an item to add" submitButtonTitle="Add" 
                    submitMethod={() => {addFoodItem()}} 
                    buttonChildren={<div className="flex grow w-full grow h-10"><InputField placeholder={currentFoodItem?.serving_type} title="Serving amount" error="" valid={true} state={foodServing} setHook={setFoodServing}></InputField></div>}>
                    <SearchBar setSearchInput={setSearchInput}></SearchBar>
                    {recordsToShow?.length > 0 
                        ? recordsToShow.map((recipe: Recipe) => (
                            <div key={recipe.id} className={(recipe.id === currentFoodItem.id ? "bg-slate-400 " : "" ) + styles.meal} onClick={() => {setCurrentFoodItem(recipe)}}>
                                {recipe.title + " " + recipe.calories + " calories for " + recipe.serving_size + " " + recipe.serving_type + " serving"}
                            </div>
                        ))
                        : <div className="p-2 text-black w-full h-10">"No recipe found. Pick a meal."</div>}
                </BasePopup>
            </>
            : ""}
        </div>
    )
}
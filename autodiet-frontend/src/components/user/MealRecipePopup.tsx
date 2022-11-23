import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { getMealByID } from "../../api/services/Meals";
import { getToken } from "../../HelperFunctions";
import { Recipe } from "../../types/types"
import { PopupOverlay } from "../utility/PopupOverlay";
import { RecipeCard } from "./RecipeCard";

type Props = {
    setTrigger:any,
    meal_id: number,
    meal_multiplier: number,
    meal_title:string
};

export const MealRecipePopup: React.FC<Props> = ({meal_multiplier, setTrigger, meal_id, meal_title}) => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getMeal();
    }, [])

    async function getMeal(){
        const response = await getMealByID(meal_id.toString());
        setRecipe(response?.response.recipe)
    }

    return(
        <>
        <PopupOverlay></PopupOverlay>
            <div className="absolute left-0 top-0 flex w-full h-screen z-20 items-center justify-center">
                <div className="w-4/5 sm:w-3/6 h-auto flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-auto gap-2 rounded-t-lg">
                    <div className="flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black">
                        <span>{meal_title}</span>
                        <span className="ml-auto">
                            <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800 dark:hover:text-ad-golden"icon={faClose}></FontAwesomeIcon>
                        </span>
                    </div>
                        {recipe.map((recipe:Recipe, i: number) => (
                            <RecipeCard key={i} recipe={recipe} meal_multiplier={meal_multiplier}></RecipeCard>
                        ))}
                    <div className="flex w-full h-full justify-end items-center py-2 px-2">
                        {/*<button onClick={submitMethod} className="flex w-24 h-8 items-center justify-center px-2 py-2 bg-admin-button text-white dark:text-black dark:bg-ad-golden rounded-2xl ml-0">Add</button>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
import { useEffect, useState } from "react"
import { getFoods } from "../../api/services/Foods";
import { BasePopup } from "../../components/utility/BasePopup";
import { Button } from "../../components/utility/Button";
import { PopupOverlay } from "../../components/utility/PopupOverlay";
import { UserBase } from "../../layouts/UserBase"
import { Recipe } from "../../types/types";

export const DietLog = () => {

    const [foods, setFoods] = useState([]);
    const [currFoodID, setCurrFoodID] = useState(-1);
    const [addPopup, setAddPopup] = useState(false);
    const [addedFoods, setAddedFoods] = useState([]);
    const [currentFoodItem, setCurrentFoodItem] = useState({} as any);

    const styles = {
        active: " bg-slate-400",
        meal: "flex w-full h-10 border-b border-slate-100 dark:border-slate-700 text-slate-700 py-2 pl-8 dark:text-slate-200 text-sm hover:bg-slate-400 cursor-pointer "
    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    const addFoodItem = () => {

    }


    const fetchRecipes = async () => {
        setFoods((await getFoods())?.response.foods);
    }

    return(
        <div className="flex h-screen w-full">
        <UserBase topNavbarChildren={<></>} pageTitle="Diet Log">
            <div className="flex flex-col h-full w-full p-2 gap-2">
            <div className="flex bg-white h-12 items-center w-full rounded px-2">
                <Button onclickMethod={() => {setAddPopup(true)}} styling="" title="Add Food"></Button>
            </div>
            <div className="flex bg-white h-5/6 grow w-full rounded drop-shadow">
                <div className="flex w-full h-12">
                    <div className="flex w-1/3 h-full">

                    </div>
                    <div className="flex w-1/3 h-full">
                        
                    </div>
                    <div className="flex w-1/3 h-full">
                        
                    </div>
                </div>
            </div>
            </div>

        </UserBase>
        {addPopup ?
        <>
            <PopupOverlay></PopupOverlay>
            <BasePopup trigger={addPopup} setTrigger={setAddPopup} message="" title="Choose an item to add" submitButtonTitle="" submitMethod={() => {addFoodItem()}}>
            {foods?.length > 0 
                ? foods.map((recipe: Recipe) => (
                    <div key={recipe.id} className={styles.meal} onClick={() => {setCurrentFoodItem(recipe)}}>
                        {recipe.title}
                    </div>
                ))
                : <div className="bg-white text-black w-full h-10">"No recipe found. Pick a meal."</div>}
            </BasePopup>
        </>
        : ""}
        </div>
    )
}
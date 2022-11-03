import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { getToken } from "../../HelperFunctions";

interface Recipe{
    "id": number,
    "title": string,
    "serving_size": number,
    "calories": number,
    "protein": number,
    "carbohydrate": number,
    "fat": number,
    "picture_url": string,
    "pivot": {
        "meal_id": number,
        "recipe_item_id": number,
        "multiplier": string
    }
}

type Props = {
    setTrigger:any,
    meal_id: number,
    meal_multiplier: number,
};

export const MealRecipePopup: React.FC<Props> = ({meal_multiplier, setTrigger, meal_id}) => {

    const [currentlyFetching, setCurrentlyFetching] = useState(false);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await fetchUserData();
        }
        fetch();
    }, [])

    useEffect(() => {
        console.log(meal_id);
    }, [setTrigger])

    async function fetchUserData(){
        try{
            setCurrentlyFetching(true);
            const response = await axios.get('/meal/' + meal_id, getToken());
            console.log(response);
            setRecipe(response.data.recipe)
            setCurrentlyFetching(false);
        }catch(error){
            console.log(error);
        }
        setCurrentlyFetching(false);
    }

    return(
        <>
            <div className="absolute bg-black top-0 left-0 h-screen w-full opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-full z-20">
                <div className="w-full h-4/5 px-2 sm:w-1/2 relative bg-ad-lightgrey flex flex-col h-96 rounded py-2 overflow-auto">
                    <div className="h-11 px-2 sm:flex items-center justify-between w-full h-1/6">
                        <span className="flex justify-start items-center h-full w-1/6 text-ad-golden">Meal X</span>
                        <span onClick={() => {setTrigger(false)}} className="flex justify-center items-center h-5/6 w-10 text-ad-golden cursor-pointer rounded-full hover:bg-ad-hoveredblack">X</span>
                    </div>
                    <div className='px-2'><hr className="border border-ad-golden"></hr></div>
                    <div className="flex items-start justify-start flex-col w-full px-2 gap-10">
                    {recipe.map((recipe:Recipe) => (<div className="text-ad-golden" key={recipe.id}>{recipe.title + "   " + Math.round(recipe.serving_size * meal_multiplier * parseFloat(recipe.pivot.multiplier)) + "g"}</div>))}
                    </div>
                </div>
            </div>
        </>
    )
}
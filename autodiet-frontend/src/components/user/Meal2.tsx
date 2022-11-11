import { useState } from "react";
import { MealRecipePopup } from "./MealRecipePopup";
import { MealInterface } from "../../types/types"
type Props = {
    meal: MealInterface
};

const Meal2: React.FC<Props> = ({meal}) => {

    const [popup, setPopup] = useState(false);

    return(
        <section>
            {popup ? <MealRecipePopup  meal_title={meal.title} meal_multiplier={meal.multiplier} meal_id={meal.id} setTrigger={setPopup} /> : ""}
            <div onClick={() => {setPopup(!popup)}}
            className="flex flex-col m-2 h-32 w-72 bg-white dark:bg-black dark:hover:bg-ad-hoveredblack rounded px-2 py-2 justify-start cursor-pointer">
                <div className="flex flex-col justify-start text-ad-golden w-full h-1/3">
                    <span className="w-full h-2/3 text-lg">Meal {}</span>
                    <span className="w-full h-1/3 text-small">{Math.round(meal.calories)} Calories</span>
                </div>{/*212 160*/ }
                <div className="flex w-full justify-start items-center h-2/3 text-white rounded px-2">
                    <img className="w-14 h-12 mr-2 rounded" src={meal.picture_url}></img>
                    <span>{meal.title}</span>
                </div>
            </div>
        </section>
    )
}

export default Meal2;
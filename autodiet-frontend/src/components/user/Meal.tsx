import { useState } from "react";
import { MealRecipePopup } from "./MealRecipePopup";
import { MealInterface } from "../../types/types"
type Props = {
    meal: MealInterface
};

const Meal: React.FC<Props> = ({meal}) => {

    const [popup, setPopup] = useState(false);

    return(
        <section>
            {popup ? <MealRecipePopup  meal_title={meal.title} meal_multiplier={meal.multiplier} meal_id={meal.id} setTrigger={setPopup} /> : ""}
            <div onClick={() => {setPopup(!popup)}}
            className="flex flex-col m-2 h-56 w-22 bg-white drop-shadow hover:drop-shadow-xl dark:bg-black dark:hover:bg-ad-hoveredblack rounded px-2 py-2 justify-start cursor-pointer">
                <div className="flex flex-col justify-start dark:text-ad-golden w-full h-2/5 gap-1">
                    <span className="w-full h-min-1/3 h-2/4 font-medium text-lg">{meal.title}</span>
                    <span className="w-full h-1/3 text-small dark:text-admin-grey-background text-slate-500">{Math.round(meal.calories)} Calories</span>
                    <span className="w-full h-1/3 text-xs dark:text-admin-grey-background text-slate-500">P32 C70 F10</span>
                </div>
                <div className="flex w-full justify-start items-center h-3/5 dark:text-white">
                    <img className="w-full h-full rounded" src={meal.picture_url}></img>
                </div>
            </div>
        </section>
    )
}

export default Meal;
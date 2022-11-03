import { useState } from "react";
import { MealRecipePopup } from "./MealRecipePopup";

interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number,
    multiplier: number,
  }

type Props = {
    meal: MealProps
};

const Meal: React.FC<Props> = ({meal}) => {

    const [popup, setPopup] = useState(false);

    return(
        <section>
            {popup ? <MealRecipePopup  meal_multiplier={meal.multiplier} meal_id={meal.id} setTrigger={setPopup} /> : ""}
            <div onClick={() => {setPopup(!popup)}} className="meal cursor-pointer hover:bg-ad-hoveredblack">
                <div className="meal-title">
                    <span>Meal {}</span>
                    <span className="text-small">{Math.round(meal.calories)} Calories</span>
                </div>
                <div className="meal-content">
                    <img src="../logo512.png"></img>
                    <span>{meal.title}</span>
                </div>
                <div className="meal-title">
                    <span>Protein: {Math.round(meal.protein)}</span>
                </div>
            </div>
        </section>
    )
}

export default Meal;
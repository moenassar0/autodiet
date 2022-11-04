import { useState } from "react";
import { MealRecipePopup } from "./MealRecipePopup";
import { MealInterface } from "../../types/types";

type Props = {
    meal: MealInterface
};

const MealCard: React.FC<Props> = ({meal}) => {
    return(
        <div className="">
            <div className="flex flex-col h-48 w-60 mr-2 mb-2 rounded-t cursor-pointer hover:opacity-70 hover:scale-105 ease-linear duration-600">
                <div className="h-4/6 w-full rounded-t">
                    <img src={meal.picture_url} className="w-full h-full rounded-t"></img>
                </div>
                <div className="bg-white h-1/6 w-full text-black text-start px-1 py-1">{meal.title}</div>
                <div className="bg-black h-1/6 w-full rounded-b text-white text-start px-1 py-1 text-xs">{meal.calories + " Calories"}</div>
            </div>
        </div>
    )
}

export default MealCard;
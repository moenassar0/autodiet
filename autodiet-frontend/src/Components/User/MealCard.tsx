import { useState } from "react";
import { MealRecipePopup } from "./MealRecipePopup";
import { Meal } from "../../types/types";

type Props = {
    meal: Meal
};

const MealCard: React.FC<Props> = ({meal}) => {
    return(
        <div className="">
            <div className="flex flex-col h-48 w-60 mr-2 mb-2 rounded-t cursor-pointer hover:opacity-70 hover:scale-105 ease-linear duration-600">
                <div className="h-3/6 w-full rounded-t">
                    <img src="../oat.png" className="w-full h-full rounded-t"></img>
                </div>
                <div className="bg-white h-2/6 w-full"></div>
                <div className="bg-black h-1/6 w-full rounded-b"></div>
            </div>
        </div>
    )
}

export default MealCard;
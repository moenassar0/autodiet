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

const MealCard: React.FC<Props> = ({meal}) => {
    return(
        <div className="">
            
        </div>
    )
}

export default MealCard;
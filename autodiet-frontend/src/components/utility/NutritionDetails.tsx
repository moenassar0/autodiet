import { MealInterface } from "../../types/types"
import { PieChart } from "../charts/PieChart"

export const NutritionDetails: React.FC<{meals: MealInterface, nutritionData: any}> = ({meals, nutritionData}) => {
    return(
        <div className="hidden sm:flex content-start gap-4 flex-wrap h-full grow w-3/12 bg-admin-grey-background px-2 py-2 dark:bg-[#1F1F1F] overflow-y-scroll">
            <div className="hidden lg:flex h-54 w-full justify-center">
                {meals ? <PieChart nutritionData={nutritionData} labels={[]} dataFields={[]}/> : ""}
            </div>
            <div className="flex dark:text-ad-golden w-full flex-col h-auto bg-white drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-background dark:hover:opacity-80 rounded px-2 py-2 cursor-pointer">
                <div className="flex w-full">
                    <span className="text-center text-xl w-full">Calories 2130</span>
                </div>
                <div className="flex w-full">
                    <span className="text-lg w-full">Protein:</span>
                    <span className="text-lg">{Math.round(nutritionData.protein) + "g"}</span>
                </div>
                <div className="flex w-full">
                    <span className="text-lg w-full">Fat:</span>
                    <span className="text-lg">{Math.round(nutritionData.fats) + "g"}</span>
                </div>
                <div className="flex w-full">
                    <span className="text-lg w-full">Carbohydrates:</span>
                    <span className="flex self-end">{Math.round(nutritionData.carbs) + "g"}</span>
                </div>
            </div>
        </div>
    )
}
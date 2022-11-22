export const LoggedFood: React.FC<{food: any}> = ({food}) => {
    return(
        <div className="flex w-full h-10 border-b border-slate-100 dark:border-slate-700 text-slate-700 py-2 pl-8 dark:text-slate-200 text-sm hover:bg-slate-400 cursor-pointer">
            <div className="flex w-1/3 h-full">
                {food.title}
            </div>
            <div className="flex w-1/3 h-full">
                {(food.serving_size * parseFloat(food.mult)) + " " + food.serving_type}
            </div>
            <div className="flex w-1/3 h-full">
                {food.calories + " Calories"}
            </div>
        </div>
    )
}
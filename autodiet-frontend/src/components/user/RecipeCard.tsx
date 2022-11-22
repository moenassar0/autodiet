import { Recipe } from "../../types/types";

export const RecipeCard: React.FC<{recipe: Recipe, meal_multiplier: number}> = ({recipe, meal_multiplier}) => {
    return(
        <div className="flex w-full h-full hover:bg-slate-100 dark:hover:bg-admin-dark-sidenav">
            <div className="h-16 flex items-center w-3/5 cursor-pointer px-2">
                <img className="w-12 h-12 rounded-full mr-2" src={recipe.picture_url}></img>
                <span className="">{recipe.title}</span>
            </div>
            <div className="h-16 flex items-center w-2/5 cursor-pointer px-2">
                {recipe.serving_type == "grams" 
                ? <span className="">{Math.round((parseFloat(recipe.pivot.multiplier) * meal_multiplier * recipe.serving_size)) + " " + recipe.serving_type}</span> 
                : <span className="">{recipe.pivot.multiplier + " " + recipe.serving_type}</span>
                }
            </div>
        </div>
    )
} 
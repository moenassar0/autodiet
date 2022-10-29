interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number
  }

type Props = {
    meal: MealProps
};

const Meal: React.FC<Props> = ({meal}) => {
    return(
        <div className="meal">
            <div className="meal-title">
                <span>Meal {}</span>
                <span className="text-small">{meal.calories} Calories</span>
            </div>
            <div className="meal-content">
                <img src="../logo512.png"></img>
                <span>{meal.title}</span>
            </div>
            <div className="meal-title">
                <span>Protein: {meal.protein}</span>
            </div>
        </div>
    )
}

export default Meal;
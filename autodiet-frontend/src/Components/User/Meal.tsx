interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number
  }

function Meal(props: MealProps){
    return(
        <>
            <div className="meal">
                <div className="meal-title">
                    <span>Meal 1</span>
                    <span className="text-small">671 Calories</span>
                </div>
                <div className="meal-content">
                    <img src="../logo512.png"></img>
                    <span>{props.title}</span>
                </div>
                <div className="meal-title">
                    <span>Protein: </span>
                </div>
            </div>
        </>
    )
}

export default Meal;
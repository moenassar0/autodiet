interface MealProps {
    id: number,
    title: string,
    calories: number,
    protein: number,
    carbohydrate: number,
    fat: number
}
function PlanGenerator (meals:Array<MealProps>):any {
}

export default PlanGenerator;
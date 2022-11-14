import { PopupOverlay } from "../utility/PopupOverlay"
import { addUser } from "../../api/services/Users"
import { useEffect, useState } from "react"
import { InputFieldInterface } from "../../types/types"
import { Popup } from "../utility/Popup"
import { addMeal, editMeal } from "../../api/services/Meals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

export const AddMealPopup: React.FC<{edit:boolean, mealID?: number, setTrigger: any, trigger: boolean}> = ({edit, mealID, setTrigger, trigger}) => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0);
    const [fat, setFat] = useState(0);
    const [type, setType] = useState("");
    const [proteinPercentage, setProteinPercentage] = useState(0);

    const [message, setMessage] = useState("");

    useEffect(() => {
        if(calories && protein) {
            setProteinPercentage((Math.round((((protein * 4) / calories)) * 100)))}
    }, [proteinPercentage, protein, calories])

    const inputs: Array<InputFieldInterface> = [
        { title:"Title", error:"asd", setHook:setTitle, state:title, valid:true },
        { title:"Calories", error:"asd", setHook:setCalories, state:calories.toString(), valid:true },
        { title:"Protein", error:"asd", setHook:setProtein, state:protein.toString(), valid:true },
        { title:"Carbohydrate", error:"asd", setHook:setCarbohydrate, state:carbohydrate.toString(), valid:true },
        { title:"Type", error:"asd", setHook: setType, state:type, valid:true },
        { title:"Fat", error:"asd", setHook: setFat, state:fat.toString(), valid:true },
        { title:"Protein Percentage", error:"asd", setHook: setProteinPercentage, state:proteinPercentage.toString(), valid:true },
    ];

    const handleSubmit = async () => {
        if(!edit){
            const response = await addMeal({title, calories, type, protein, carbohydrate, fat, protein_percentage: proteinPercentage, picture_url:"asd"});
            if(!response?.success) setMessage("Server Error");
            else setMessage("Meal added!");
        }else if(edit){
            const meal = {id: mealID,title, calories, type, protein, carbohydrate, fat, protein_percentage: proteinPercentage, picture_url:"asd"};
            const response = await editMeal(meal);
            console.log(meal);
            console.log(((response?.response)))
            if(!response?.success) setMessage("Server Error");
            else setMessage("Meal edited!");
        }
    }

    return(
        <section>
           {trigger ? 
            (   <>
                    <PopupOverlay></PopupOverlay>
                    <Popup title={(edit ? "Edit Meal" : "Add Meal")} edit={edit} message={message} inputs={inputs} submitMethod={handleSubmit}>
                        <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800"icon={faClose}></FontAwesomeIcon>
                    </Popup>
                </>
            ) : ("") } 
        </section>
    )
}
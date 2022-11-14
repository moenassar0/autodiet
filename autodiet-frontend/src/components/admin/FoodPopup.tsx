import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { InputFieldInterface } from "../../types/types";
import { Popup } from "../utility/Popup";
import { PopupOverlay } from "../utility/PopupOverlay";

export const FoodPopup: React.FC<{edit:boolean, userID?: number, setTrigger: any, trigger: boolean}> = ({userID, edit, setTrigger, trigger}) => {
    
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0);
    const [fat, setFat] = useState(0);
    const [servingSize, setServingSize] = useState('')
    const [servingType, setServingType] = useState('');
    const [validType, setValidType] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if(servingType == "Grams" || servingType == "Large" || servingType == "Medium") 
            setValidType(true);
        else setValidType(false)
    }, [servingType])

    const inputs: Array<InputFieldInterface> = [
        { title:"Title", error:"asd", setHook:setTitle, state:title, valid:true },
        { title:"Calories", error:"asd", setHook:setCalories, state:calories.toString(), valid:true },
        { title:"Protein", error:"asd", setHook:setProtein, state:protein.toString(), valid:true },
        { title:"Carbohydrate", error:"asd", setHook:setCarbohydrate, state:carbohydrate.toString(), valid:true },
        { title:"Fat", error:"asd", setHook: setFat, state:fat.toString(), valid:true },
        { title: "Serving Type", error:"Please choose from: Grams, Large, Medium", setHook:setServingType, state:servingType, valid:validType},
        { title: "Serving Size", error:"", setHook:setServingSize, state:servingSize, valid:true},
    ];
    
    return(
        <section>
           {trigger ? 
            (   <>
                    <PopupOverlay></PopupOverlay>
                    <Popup title={(edit ? "Edit Meal" : "Add Meal")} edit={edit} message={message} inputs={inputs} submitMethod={()=>{}}>
                        <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800"icon={faClose}></FontAwesomeIcon>
                    </Popup>
                </>
            ) : ("") } 
        </section>
    )
}
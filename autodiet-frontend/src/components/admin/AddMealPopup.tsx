import { PopupOverlay } from "../utility/PopupOverlay"
import { addUser } from "../../api/services/Users"
import { useState } from "react"
import { InputFieldInterface } from "../../types/types"
import { Popup } from "../utility/Popup"

export const AddMealPopup: React.FC<{setTrigger: any, trigger: boolean}> = ({setTrigger, trigger}) => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbohydrates, setCarbohydrates] = useState(0);

    const inputs: Array<InputFieldInterface> = [
        {
            title:"Title", error:"asd", setHook:setTitle, state:title, valid:true
        },
        {
            title:"Calories", error:"asd", setHook:setCalories, state:calories.toString(), valid:true
        },
        {
            title:"Protein", error:"asd", setHook:setProtein, state:protein.toString(), valid:true
        },
        {
            title:"Carbohydrate", error:"asd", setHook:setCarbohydrates, state:carbohydrates.toString(), valid:true
        },
    ];

    /*const handleSubmit = async () => {
        const response = await addUser({username, email, password, user_role: "User"});
        if(!response?.success) setMessage("Server Error");
        else setMessage("User added!");
    }*/

    return(
        <section>
           {trigger ? 
            (   <>
                <PopupOverlay></PopupOverlay>
                <Popup title="Add Meal" message={""} inputs={inputs} submitMethod={() => {console.log("gg")}}/>
                </>
            ) : ("") } 
        </section>
    )
}
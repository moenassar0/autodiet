import { PopupOverlay } from "../utility/PopupOverlay"
import InputField from "../../components/utility/InputField"
import { addUser } from "../../api/services/Users"
import { useState } from "react"
import { InputFieldInterface } from "../../types/types"
import { Popup } from "../utility/Popup"

export const AddUserPopup: React.FC<{setTrigger: any, trigger: boolean}> = ({setTrigger, trigger}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const inputs: Array<InputFieldInterface> = [
        {
            title:"Username", error:"asd", setHook:setUsername, state:username, valid:true
        },
        {
            title:"Email", error:"asd", setHook:setEmail, state:email, valid:true
        },
        {
            title:"Password", error:"asd", setHook:setPassword, state:password, valid:true
        },
    ];

    const handleSubmit = async () => {
        const response = await addUser({username, email, password, user_role: "User"});
        if(!response?.success) setMessage("Server Error");
        else setMessage("User added!");
    }

    return(
        <section>
           {trigger ? 
            (   <>
                <PopupOverlay></PopupOverlay>
                <Popup title="Add User" message={message} inputs={inputs} submitMethod={handleSubmit}/>
                </>
            ) : ("") } 
        </section>
    )

}
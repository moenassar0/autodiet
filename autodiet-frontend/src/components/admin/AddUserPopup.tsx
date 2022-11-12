import { PopupOverlay } from "../utility/PopupOverlay"
import { addUser, editUser } from "../../api/services/Users"
import { useEffect, useState } from "react"
import { InputFieldInterface } from "../../types/types"
import { Popup } from "../utility/Popup"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AddUserPopup: React.FC<{edit:boolean, userID?: number, setTrigger: any, trigger: boolean}> = ({userID, edit, setTrigger, trigger}) => {


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
        if(!edit){
            const response = await addUser({username, email, password, user_role: "User"});
            if(!response?.success) setMessage("Server Error");
            else setMessage("User added!");
        }
        else if(edit){
            const response = await editUser({username, email, password, id: userID});
            if(!response?.success) setMessage("Server Error"); else setMessage("User edited!");
            console.log(response?.response)
        }
    }

    return(
        <section>
           {trigger ? 
            (   <>
                <PopupOverlay></PopupOverlay>
                
                <Popup title={edit ? "Edit User" : "Add User"} message={message} inputs={inputs} submitMethod={handleSubmit}>
                    <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800"icon={faClose}></FontAwesomeIcon>
                </Popup>
                </>
            ) : ("") } 
        </section>
    )
}
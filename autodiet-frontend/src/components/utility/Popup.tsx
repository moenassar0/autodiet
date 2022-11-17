import { InputFieldInterface } from "../../types/types";
import InputField from "./InputField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { BasePopup } from "./BasePopup";

export const Popup: React.FC<{children: any, edit: boolean, message: string, submitMethod: any, title: string, inputs: Array<InputFieldInterface>}> = ({children, edit, title, inputs, submitMethod, message}) => {
    return(
        <BasePopup closeButton={children} message={message} title={title} submitMethod={submitMethod}
        submitButtonTitle={(edit ? "Edit" : "Add")} trigger={null} setTrigger={null}>
        {
            inputs.map((input, i) => (
                <InputField key={i} title={input.title} 
                error={input.error} setHook={input.setHook} 
                state={input.state} 
                valid={input.valid}></InputField>
            ))
        }
        </BasePopup>

    )
}
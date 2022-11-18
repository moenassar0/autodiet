import { InputFieldInterface } from "../../types/types";
import InputField from "./InputField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { BasePopup } from "./BasePopup";
import { convertBase64 } from "../../HelperFunctions";

export const Popup: React.FC<{hasPicture?: boolean, children: any, edit: boolean, message: string, submitMethod: any, title: string, inputs: Array<InputFieldInterface>, setPictureBase64?: any}> = ({hasPicture, setPictureBase64, children, edit, title, inputs, submitMethod, message}) => {
    async function handleChange(e: any) {
        const file = e.target.files[0];
        const base64: any = await convertBase64(file);
        const base64split = base64.split(",");
        let word = base64split[1];
        setPictureBase64(word);
    };
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
        {hasPicture ? <label htmlFor="edit-picture" className="flex text-center bg-ad-golden text-black rounded-full w-32 p-1 cursor-pointer h-10">Choose Picture<input type="file" id="edit-picture" className='hidden' onChange={(e) => {handleChange(e)}}/></label> : ""}
        </BasePopup>
    )
}
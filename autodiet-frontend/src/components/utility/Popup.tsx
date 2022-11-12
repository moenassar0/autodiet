import { InputFieldInterface } from "../../types/types";
import InputField from "./InputField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export const Popup: React.FC<{children: any, message: string, submitMethod: any, title: string, inputs: Array<InputFieldInterface>}> = ({children, title, inputs, submitMethod, message}) => {
    return(
        <div className="absolute flex w-full h-screen z-20 items-center justify-center">
        <div className="w-4/5 sm:w-3/6 h-auto flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-auto gap-2 rounded-t-lg">
            <div className="flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black">
                <span>{title + "   "} {message ? message : ""}</span>
                <span className="ml-auto">{children}</span>
            </div>
            {
                inputs.map((input, i) => (
                    <InputField key={i} title={input.title} 
                    error={input.error} setHook={input.setHook} 
                    state={input.state} 
                    valid={input.valid}></InputField>
                ))
            }
            <div className="flex w-full h-full justify-end items-center py-2 px-2">
                <button onClick={submitMethod} className="flex w-24 h-8 items-center justify-center px-2 py-2 bg-admin-button text-white dark:text-black dark:bg-ad-golden rounded-2xl ml-0">Add</button>
            </div>
        </div>
    </div>
    )
}
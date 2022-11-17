import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BasePopup: React.FC<{closeButton?:any, message: string, children: any, title: string, trigger: any, setTrigger: any, submitMethod: () => {}, submitButtonTitle: string}> = ({closeButton, submitButtonTitle, submitMethod, title, setTrigger, trigger, children, message}) => {
    return(
        <div className="absolute flex items-center justify-center w-full h-auto z-20 min-h-screen">
            <div className="w-4/5 sm:w-3/6 max-h-screen flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-auto gap-2 rounded-t-lg">
                <div className="flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black">
                    <span>{title + "   "} {message ? message : ""}</span>
                    <span className="ml-auto">{closeButton ? closeButton : <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800"icon={faClose}></FontAwesomeIcon>}</span>
                </div>
                {children}
                <div className="flex w-full h-16 justify-end items-center py-2 px-2">
                    <button onClick={submitMethod} className="flex w-24 h-8 items-center justify-center px-2 py-2 bg-admin-button text-white dark:text-black dark:bg-ad-golden rounded-2xl ml-0">
                        {submitButtonTitle}
                    </button>
                </div>
            </div>
        </div>
    )
}
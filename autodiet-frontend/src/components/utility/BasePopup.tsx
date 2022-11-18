import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "./Button"

export const BasePopup: React.FC<{closeButton?:any, message: string, children: any, title: string, trigger: any, setTrigger: any, submitMethod: any, submitButtonTitle: string}> = ({closeButton, submitButtonTitle, submitMethod, title, setTrigger, trigger, children, message}) => {
    const styles ={
        popupContainer: "absolute flex items-center justify-center w-full h-auto z-20 min-h-screen",
        popupContent: "w-full max-h-screen flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-auto gap-2 rounded-t-lg",
        popupTitle: "flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black",
        buttonDiv: "flex w-full h-16 justify-end items-center py-2 px-2"
    }
    return(
        <div className={styles.popupContainer}>
            <div className="flex-col w-4/5 max-h-screen flex bg-white dark:bg-admin-background">
                <div className={styles.popupTitle}>
                    <span>{title + "   "} {message ? message : ""}</span>
                    <span className="ml-auto">{closeButton ? closeButton : <FontAwesomeIcon onClick={() => {setTrigger(false)}} className="cursor-pointer text-slate-500 hover:text-slate-800"icon={faClose}></FontAwesomeIcon>}</span>
                </div>
                <div className={styles.popupContent}>
                    {children}
                </div>
                <div className={styles.buttonDiv}>
                    <Button title={submitButtonTitle} onclickMethod={submitMethod} styling="" />
                </div>
            </div>
        </div>
    )
}
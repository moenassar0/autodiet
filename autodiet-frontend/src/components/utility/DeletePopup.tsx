import { Button } from "./Button"

export const DeletePopup: React.FC<{trigger: boolean, setTrigger: any, children: any, submitMethod: any}> = ({children, submitMethod}) => {
    return(
        <div className="absolute flex w-full h-screen z-20 items-center justify-center">
            <div className="w-4/5 sm:w-3/6 h-auto flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-auto gap-2 rounded-t-lg">
                <div className="flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black">
                    <span>Are you sure you want to delete?</span>
                    <span className="ml-auto">{children}</span>
                </div>
                <div className="flex w-full h-16 justify-end items-center py-2 px-2">
                    <Button title="Delete" styling="" onclickMethod={submitMethod}></Button>
                </div>
            </div>
        </div>
    )
}
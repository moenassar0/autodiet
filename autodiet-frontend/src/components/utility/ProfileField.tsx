export const ProfileField: React.FC<{buttonValues:any, children: any, title: string, hook: string, setHook: any}> = ({children, title, hook, setHook, buttonValues}) => {
    
    return(
        <div className="flex w-full h-24">
            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">{title}</div>
            <div className="w-4/5 sm:w-3/5 flex h-full items-center justify-end drop-shadow-md">
                {
                    buttonValues.map((button: string) => (
                        <button onClick={() => {setHook(button)}}
                        className={"text-xs sm:text-lg flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded " + (hook===button ? "dark:bg-ad-golden bg-admin-button" : "bg-white hover:bg-slate-200")}>
                            {button}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
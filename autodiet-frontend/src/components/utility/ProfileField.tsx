export const ProfileField: React.FC<{buttonValues:any, children: any, title: string, hook: string, setHook: any}> = ({children, title, hook, setHook, buttonValues}) => {
    
    return(
        <div className="flex w-full h-1/6 drop-shadow-md">
            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">{title}</div>
            <div className="flex w-4/5 sm:flex w-3/5 h-full items-center justify-end">
                {
                    buttonValues.map((button: string) => (
                        <button onClick={() => {setHook(button)}}
                        className={"text-xs flex items-center justify-center h-1/2 justify-self-end w-1/3 rounded-l-lg " + (hook===button ? "dark:bg-ad-golden bg-admin-button" : "bg-white hover:bg-slate-200")}>
                            {button}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
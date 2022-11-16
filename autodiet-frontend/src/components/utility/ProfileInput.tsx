export const ProfileInput: React.FC<{title: string, hook: string, setHook: any}> = ({title, hook, setHook,})  => {
    return(
        <div className="flex items-center w-full h-24">
            <div className="flex items-center w-1/5 h-full font-medium dark:text-ad-golden text-black">{title}</div>
            <div className="w-4/5 flex sm:w-3/5 h-1/2 justify-start drop-shadow-md">
                <input type="text" value={hook} onChange={(e) => setHook(e.target.value)} className="w-1/2 grow h-full rounded px-1 py-1"></input>
            </div>
        </div>
    )
}
export const SlideThroughMeals = () => {
    return(
        <div className="flex justify-center items-center w-full h-full bg-admin-dark-background opacity-70 rounded">
        <div
        className="slideright flex flex-col m-2 h-56 w-72 bg-white drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-background dark:hover:opacity-80 rounded px-2 py-2 justify-start cursor-pointer">
            <div className="flex flex-col justify-start dark:text-ad-golden w-full h-2/5 gap-1">
                <span className="w-full h-1/3 font-medium ">{"Title"}</span>
                <span className="w-full h-1/3 text-small dark:text-admin-grey-background text-slate-500">{"500" + "Calories"}</span>
                <span className="w-full h-1/3 text-xs dark:text-admin-grey-background text-slate-500">P32 C70 F10</span>
            </div>
            <div className="flex w-full justify-start items-center h-3/5 dark:text-white">
                <img className="w-full h-full rounded" src={"../oat.png"}></img>
            </div>
        </div>
        <div
        className="slideright flex flex-col m-2 h-56 w-72 bg-white drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-background dark:hover:opacity-80 rounded px-2 py-2 justify-start cursor-pointer">
            <div className="flex flex-col justify-start dark:text-ad-golden w-full h-2/5 gap-1">
                <span className="w-full h-1/3 font-medium ">{"Title"}</span>
                <span className="w-full h-1/3 text-small dark:text-admin-grey-background text-slate-500">{"500" + "Calories"}</span>
                <span className="w-full h-1/3 text-xs dark:text-admin-grey-background text-slate-500">P32 C70 F10</span>
            </div>
            <div className="flex w-full justify-start items-center h-3/5 dark:text-white">
                <img className="w-full h-full rounded" src={"../oat.png"}></img>
            </div>
        </div>
        <div
        className="slideright flex flex-col m-2 h-56 w-72 bg-white drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-background dark:hover:opacity-80 rounded px-2 py-2 justify-start cursor-pointer">
            <div className="flex flex-col justify-start dark:text-ad-golden w-full h-2/5 gap-1">
                <span className="w-full h-1/3 font-medium ">{"Title"}</span>
                <span className="w-full h-1/3 text-small dark:text-admin-grey-background text-slate-500">{"500" + "Calories"}</span>
                <span className="w-full h-1/3 text-xs dark:text-admin-grey-background text-slate-500">P32 C70 F10</span>
            </div>
            <div className="flex w-full justify-start items-center h-3/5 dark:text-white">
                <img className="w-full h-full rounded" src={"../oat.png"}></img>
            </div>
        </div>
        </div>

    )
}
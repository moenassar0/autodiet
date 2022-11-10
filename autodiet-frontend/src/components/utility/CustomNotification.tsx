import { useEffect, useState } from "react"

export const CustomNotification = () => {
    const [turnOff, setTurnOff] = useState(false);

    function closeNotification(delay:number){
        setInterval(() => {setTurnOff(true)}, delay);
    }

    useEffect(() => {
        closeNotification(6000);
    }, [])

    return(
        <div onClick={() => {closeNotification(100)}} className={(turnOff ? "hidden opacity-0" : "") + " animate-wiggle ease-in duration-300 absolute bottom-0 right-0 h-min-screen h-28 w-72 rounded bg-admin-main drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-background dark:hover:opacity-80 justify-start cursor-pointer mr-4 mb-4"}>
            <div className="flex h-1/4 w-full items-center justify-center">
                <span className="text-lg text-white dark:text-ad-golden font-medium">AutoDiet</span>
            </div>
            <div className="flex h-3/4 w-full text-white dark:text-ad-golden px-2 py-1">
                <span>Please go to your profile to save your details!</span>
            </div>
        </div>
    )
}
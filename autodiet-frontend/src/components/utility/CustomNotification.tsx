import { useEffect, useState } from "react"

export const CustomNotification: React.FC<{turnOff: boolean, setTurnOff: any, body: string}> = ({turnOff, setTurnOff, body}) => {

    function closeNotification(delay:number){
        setInterval(() => {setTurnOff(true)}, delay);
    }

    useEffect(() => {
        closeNotification(6000);
    }, [])

    return(
        <div className={(turnOff ? "hidden opacity-0" : "") + " animate-wiggle ease-in duration-300 absolute bottom-0 right-0 h-min-screen h-28 w-72 rounded bg-admin-main drop-shadow hover:drop-shadow-xl dark:bg-admin-dark-sidenav dark:hover:opacity-80 justify-start cursor-pointer mr-4 mb-4"}>
            <div className="flex h-1/4 w-full items-center justify-center">
                <span className="text-lg text-white dark:text-ad-golden font-medium">AutoDiet</span>
            </div>
            <div className="flex h-3/4 w-full text-white dark:text-ad-golden px-2 py-1">
                <span>{body}</span>
            </div>
        </div>
    )
}
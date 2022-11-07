import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react"

export const AdminTopNavbar:React.FC<{title: string, username: string, children: any}> = ({title, username, children}) => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          setTheme('dark');
        }
        else {
          setTheme('light');
        }
      }, [])

    useEffect(() => {
        
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
            console.log(theme);
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    return(
        <div className="flex h-1/6 max-h-16 w-full bg-white drop-shadow justify-start dark:bg-admin-dark-topnav">
            <span className="flex items-center pl-6 font-medium text-2xl dark:text-ad-golden text-admin-main">{title}</span>
            {children}
            <div onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} className="ml-auto flex items-center justify-center self-center bg-admin-grey-background dark:text-black dark:bg-ad-golden drop-shadow h-9 w-9 mr-4 rounded-full hover:bg-slate-200 cursor-pointer">
                <FontAwesomeIcon icon={faLightbulb} className="text-blue" />
            </div>
            <div className="flex items-center self-center w-40 h-10 rounded">
                <img className="w-6 h-6 rounded-full mr-2" src="../logo512.png"></img>
                <span className="w-1/3 text-md dark:text-slate-200">{username}</span>
            </div>
        </div>
    )
}
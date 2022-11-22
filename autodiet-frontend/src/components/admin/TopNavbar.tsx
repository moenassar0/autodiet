import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react"
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";

export const TopNavbar:React.FC<{title: string, username: string, children: any}> = ({title, username, children}) => {

    const {setCurrentTheme, themeType} = useTheme();
    const {setUser, user} = useUser();

    useEffect(() => {
        if(themeType === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [themeType])

    return(
        <div className="flex gap-4 h-1/6 overflow-auto max-h-16 w-full bg-white drop-shadow justify-start dark:bg-admin-dark-topnav">
            <div className="h-full w-min-10 flex items-center pl-6 font-medium text-2xl dark:text-ad-golden text-admin-main">{title}</div>
            {children}
            <div className="flex h-full w-2/6 items-center ml-auto mr-2 gap-2">
                <div onClick={() => {setCurrentTheme(themeType === "light" ? "dark" : "light")}} className="ml-auto flex items-center justify-center self-center bg-admin-grey-background dark:text-black dark:bg-ad-golden drop-shadow h-9 mr-4 rounded-full hover:bg-slate-200 cursor-pointer">
                    <FontAwesomeIcon icon={faLightbulb} className="w-10 text-blue" />
                </div>
                
                <div className="flex items-center self-center w-40 h-10 rounded">
                    <img className="w-6 h-6 rounded-full" src="../logo512.png"></img>
                    <span className="w-1/3 text-md dark:text-slate-200">{user.username}</span>
                </div>
            </div>
        </div>
    )
}
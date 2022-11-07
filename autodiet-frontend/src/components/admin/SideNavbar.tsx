import { useState } from "react";
import { UilAlignRight } from '@iconscout/react-unicons'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faChartLine, faDrumstickBite, faPlateWheat, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { SideNavbarItem } from "./SideNavbarItem";
import { Link } from "react-router-dom"

export const AdminSideNavbar = () => {

    const [openNavbar, setOpenNavbar] = useState(true);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }
    
    const navbarlinks = [
        { path: "/admin/users", icon: faUser, title: "Users" },
        { path: "/admin/meals", icon: faPlateWheat, title: "Meals" },
        { path: "/admin/food", icon: faDrumstickBite, title: "Foods" },
        { path: "/admin/users", icon: faChartLine, title: "Graphs" },
        { path: "/admin/users", icon: faRightFromBracket, title: "Logout" },
    ];

    return(
        <div className={(openNavbar ? "w-2/6 sm:w-1/6" : "w-10") + " ease-in duration-150 flex flex-wrap content-start items-center h-screen bg-admin-main dark:bg-admin-dark-sidenav overflow-auto"}>
            <div className="flex w-full h-10 bg-grey px-2 py-2">
                <div onClick={toggleNavbar} className={"flex self-start items-center justify-center h-8 ml-auto cursor-pointer dark:hover:bg-admin-dark-background " + (openNavbar ? "w-8" : "w-full")}>
                    <FontAwesomeIcon icon={faBars} className="text-white dark:text-ad-golden" />
                </div>
            </div>
            <div className={(openNavbar ? "" : "hidden") + " flex items-center justify-center w-5/6 h-20 pl-3"}>
            <img src="../logo2.png" className="h-11 w-22"></img>
            </div>
            {
                navbarlinks.map((link) => (
                    <SideNavbarItem path={link.path} condition={openNavbar} icon={link.icon}  title={link.title}></SideNavbarItem>
                ))
            }
        </div>
    )
}
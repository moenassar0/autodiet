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

    return(
        <div className={(openNavbar ? "w-2/6 sm:w-1/6" : "w-10") + " ease-in duration-150 flex flex-wrap content-start items-center h-screen bg-admin-main dark:bg-admin-dark-sidenav overflow-auto"}>
            <div className="flex w-full h-24 bg-grey px-2 py-2">
                <div onClick={toggleNavbar} className={"flex self-start items-center justify-center h-8 ml-auto cursor-pointer " + (openNavbar ? "w-8" : "w-full")}>
                    <FontAwesomeIcon icon={faBars} className="text-white" />
                </div>
            </div>
            <SideNavbarItem path="/admin/users" condition={openNavbar} icon={faUser} title="Users"></SideNavbarItem>
            <SideNavbarItem path="/admin/meals" condition={openNavbar} icon={faPlateWheat} title="Meals"></SideNavbarItem>
            <SideNavbarItem path="/admin/food" condition={openNavbar} icon={faDrumstickBite} title="Foods"></SideNavbarItem>
            <SideNavbarItem path="/admin/users" condition={openNavbar} icon={faChartLine} title="Graphs"></SideNavbarItem>
            <SideNavbarItem path="/admin/users" condition={openNavbar} icon={faRightFromBracket} title="Logout"></SideNavbarItem>
        </div>
    )
}
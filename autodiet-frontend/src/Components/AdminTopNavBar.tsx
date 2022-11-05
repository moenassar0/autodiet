import { useState } from "react";
import { UilAlignRight } from '@iconscout/react-unicons'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faChartLine, faDrumstickBite, faPlateWheat, faUser, faBars } from '@fortawesome/free-solid-svg-icons'



export const AdminTopNavBar = () => {

    const [openNavbar, setOpenNavbar] = useState(true);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }

    return(
        <div style={{width: !openNavbar ? "50px" : "300px"}} className="ease-in duration-150 flex flex-wrap content-start items-center h-screen w-1/6 bg-admin-main overflow-auto">
            <div className="flex w-full h-24 bg-grey px-2 py-2">
                <div onClick={toggleNavbar} className={"flex self-start items-center justify-center h-8 ml-auto cursor-pointer " + (openNavbar ? "w-8" : "w-full")}>
                    <FontAwesomeIcon icon={faBars} className="text-white" />
                </div>
            </div>
            <div className={(openNavbar ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2"}>
                <FontAwesomeIcon icon={faUser} className={"text-white " + (openNavbar ? "mr-2" : "")} />
                <span className={openNavbar ? "" : "hidden"}> 
                    Users
                </span>
            </div>
            <div className={(openNavbar ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2"}>
                <FontAwesomeIcon icon={faPlateWheat} className={"text-white " + (openNavbar ? "mr-2" : "")} />
                <span className={openNavbar ? "" : "hidden"}> 
                    Meals
                </span>
            </div>
            <div className={(openNavbar ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2"}>
                <FontAwesomeIcon icon={faDrumstickBite} className={"text-white " + (openNavbar ? "mr-2" : "")} />
                <span className={openNavbar ? "" : "hidden"}> 
                    Foods
                </span>
            </div>
            <div className={(openNavbar ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2"}>
                <FontAwesomeIcon icon={faChartLine} className={"text-white " + (openNavbar ? "mr-2" : "")} />
                <span className={openNavbar ? "" : "hidden"}> 
                    Graphs
                </span>
            </div>
            <div className={(openNavbar ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2 place-self-end"}>
                <FontAwesomeIcon icon={faRightFromBracket} className={"text-white " + (openNavbar ? "mr-2" : "")} />
                <span className={openNavbar ? "" : "hidden"}> 
                    Logout
                </span>
            </div>
        </div>
    )
}
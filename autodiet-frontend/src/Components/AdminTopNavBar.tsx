import { useState } from "react";
import { UilAlignRight } from '@iconscout/react-unicons'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'



export const AdminTopNavBar = () => {

    const [openNavbar, setOpenNavbar] = useState(true);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }

    return(
        <div style={{width: !openNavbar ? "50px" : "300px"}} className="ease-in duration-150 flex flex-wrap content-start items-center h-screen w-1/6 bg-admin-main overflow-auto">
            <div className="flex w-full h-24 bg-grey px-2 py-2">
                <div onClick={toggleNavbar} className={"flex self-start items-center w-8 justify-center h-8 ml-auto cursor-pointer " }>
                <FontAwesomeIcon icon={faBars} className="text-white" />
                </div>
            </div>
            <div className="flex w-full h-32 bg-black px-2 py-2">

            </div>
            <div className="flex w-full h-32 bg-black px-2 py-2">

            </div>
            <div className="flex w-full h-32 bg-black px-2 py-2">

            </div>
        </div>
    )
}
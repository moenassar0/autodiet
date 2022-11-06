import { SideNavBarItemInterface } from "../../types/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

export const SideNavbarItem: React.FC<SideNavBarItemInterface> = ({title, icon, condition, path}) => {
    return(
        <div className={(condition ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-center h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-1 py-2"}>
            <Link className="flex w-full justify-center items-center" to={path}>
                <FontAwesomeIcon icon={icon} className={"text-white " + (condition ? "mr-2" : "") + (title==="Logout" ? " hover:text-red-500" : "")} />
                <span className={condition ? "" : "hidden"}> 
                    {title}
                </span>
            </Link>
        </div>
    )
}
import { SideNavBarItemInterface } from "../types/types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SideNavbarItem: React.FC<SideNavBarItemInterface> = ({title, icon, condition}) => {
    return(
        <div className={(condition ? "w-5/6" : "justify-center w-full") + " rounded-r-full flex items-center justify-start h-12 hover:bg-admin-hoverednav text-white hover:text-admin-hoveredtext cursor-pointer px-2 py-2"}>
            <FontAwesomeIcon icon={icon} className={"text-white " + (condition ? "mr-2" : "")} />
            <span className={condition ? "" : "hidden"}> 
                {title}
            </span>
        </div>
    )
}
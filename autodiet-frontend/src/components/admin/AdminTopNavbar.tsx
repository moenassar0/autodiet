import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AdminTopNavbar = () => {
    return(
        <div className="flex h-1/6 max-h-16 w-full bg-white drop-shadow justify-end">
            <div className="flex items-center justify-center self-center bg-admin-grey-background drop-shadow h-9 w-9 mr-4 rounded-full hover:bg-slate-200 cursor-pointer">
            <FontAwesomeIcon icon={faLightbulb} className="text-blue" />
            </div>
            <div className="flex items-center self-center w-40 h-10 rounded">
                <img className="w-6 h-6 rounded-full mr-1" src="../logo512.png"></img>
                <span className="w-1/3 text-md">Admin</span>
            </div>
        </div>
    )
}
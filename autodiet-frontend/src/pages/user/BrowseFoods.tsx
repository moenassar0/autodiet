import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { UserBase } from "../../layouts/UserBase"

export const BrowseFoods = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const [fetchedFoods, setFetchedFoods] = useState<any[]>([])

    return(
        <UserBase pageTitle="Foods" topNavbarChildren={
            <div className="px-2 flex self-center h-10 w-full py-2 dark:bg-[#1D1D1E] rounded">
                <div className="flex w-10 h-full items-center justify-end">
                    <FontAwesomeIcon icon={faSearch} className="text-admin-main dark:text-ad-golden" />
                </div>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search.."
                className="w-full h-full flex px-2 py-2 outline-0 dark:bg-[#1F1F1F] dark:text-ad-golden" />
            </div>
        }>
            <div className="flex flex-wrap h-auto w-full overflow-auto px-4 py-4">
                asasd
            </div>
        </UserBase>
    )
}
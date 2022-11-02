import { useEffect, useState } from "react"
import { UserSideNavbar } from "./UserSideNavbar"

export const BrowseMeals = () => {

    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        searchQuery();
    }, [])

    const searchQuery = async () => {
        try{

        }catch{
            
        }
    }

    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="container">
                <div className="topnavbar"></div>
                <div className="px-2 flex h-10 w-full py-2 bg-black">
                    <input onChange={(e) => setSearchInput(e.target.value)} type="text" className="w-full h-full flex px-2 py-2 rounded" />
                </div>
            </div>
        </div>
    )
}
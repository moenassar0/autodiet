import { useEffect, useState } from "react"
import axios from "../../api/axios";
import { getToken } from "../../HelperFunctions";
import { UserSideNavbar } from "./UserSideNavbar"

export const BrowseMeals = () => {

    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        searchQuery();
    }, [searchInput])

    const searchQuery = async () => {
        try{
            const response = await axios.get('/meals/' + searchInput, getToken());
            console.log(response);

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
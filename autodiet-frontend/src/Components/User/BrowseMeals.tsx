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
        <div className="flex h-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-full w-full">
            <div className="topnavbar"></div>
                <div className="flex flex-col h-4/5 w-full bg-ad-lightgrey px-4 py-4">
                    <div className="px-2 flex h-10 w-full py-2">
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" className="w-full h-full flex px-2 py-2 rounded" />
                    </div>
                    <div className="flex flex-wrap h-auto w-full overflow-auto px-4 py-4">
                        <div className="flex flex-col h-48 w-60 mr-2 mb-2 rounded-t cursor-pointer hover:opacity-70 hover:scale-105 ease-linear duration-600">
                            <div className="h-3/6 w-full rounded-t">
                                <img src="../oat.png" className="w-full h-full rounded-t"></img>
                            </div>
                            <div className="bg-white h-2/6 w-full"></div>
                            <div className="bg-black h-1/6 w-full rounded-b"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
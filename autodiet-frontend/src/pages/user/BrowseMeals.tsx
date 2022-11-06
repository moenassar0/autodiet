import { useEffect, useState } from "react"
import axios from "../../api/axios";
import { getToken } from "../../HelperFunctions";
import MealCard from "../../components/user/MealCard";
import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import { MealInterface } from "../../types/types";
import { EmptyState } from "../../components/utility/EmptyState";

export const BrowseMeals = () => {

    const [searchInput, setSearchInput] = useState('');
    const [fetchedMeals, setFetchedMeals] = useState<any[]>([])

    useEffect(() => {
        searchQuery();
    }, [searchInput])

    const searchQuery = async () => {
        try{
            const response = await axios.get('/meals/' + searchInput, getToken());
            console.log(response.data.meals);
            setFetchedMeals(response.data.meals);
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
                    {!(fetchedMeals.length > 0) 
                        ? <EmptyState/>
                        : fetchedMeals.map((meal: MealInterface) => (<div key={meal.id}><MealCard meal={meal}></MealCard></div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
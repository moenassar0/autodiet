import { useEffect, useState } from "react"
import axios from "../../api/axios";
import { getToken } from "../../HelperFunctions";
import MealCard from "../../components/user/MealCard";
import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import { MealInterface } from "../../types/types";
import { EmptyState } from "../../components/utility/EmptyState";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";

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
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test">
                </AdminTopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F]">
                    <div className="px-2 flex h-10 w-full py-2">
                        <div className="flex w-10 h-full"></div>
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
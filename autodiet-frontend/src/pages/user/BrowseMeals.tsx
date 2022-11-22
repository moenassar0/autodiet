import { useEffect, useState } from "react"
import axios from "../../api/axios";
import { getToken } from "../../HelperFunctions";
import MealCard from "../../components/user/MealCard";
import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import { MealInterface } from "../../types/types";
import { EmptyState } from "../../components/utility/EmptyState";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { TopNavbar } from "../../components/admin/TopNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <TopNavbar title="Meals" username="Test">
                <div className="px-2 flex self-center h-10 w-full py-2 dark:bg-[#1D1D1E] rounded">
                    <div className="flex w-10 h-full items-center justify-end">
                            <FontAwesomeIcon icon={faSearch} className="text-admin-main dark:text-ad-golden" />
                        </div>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search.."
                        className="w-full h-full flex px-2 py-2 outline-0 dark:bg-[#1F1F1F] dark:text-ad-golden" />
                </div>
                </TopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F]">
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
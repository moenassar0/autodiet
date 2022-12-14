import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { getFoodsByTitle } from "../../api/services/Foods";
import MealCard from "../../components/user/MealCard";
import { Button } from "../../components/utility/Button";
import { EmptyState } from "../../components/utility/EmptyState";
import { UserBase } from "../../layouts/UserBase"
import { MealInterface } from "../../types/types";

export const BrowseFoods = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const [fetchedFoods, setFetchedFoods] = useState<any[]>([])
    const [currentRecordLoads, setCurrentRecordLoads] = useState(10);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerLoad] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerLoad;
    const currentRecords = fetchedFoods?.slice(0, indexOfLastRecord);

    useEffect(() => {
        searchQuery();
    }, [searchInput])

    const searchQuery = async () => {
        const response = await getFoodsByTitle(searchInput);
        setFetchedFoods(response?.response.foods);
    }

    const loadMoreRecords = () => {
        setCurrentPage(currentPage + 1);
    }

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
                <div className="flex flex-wrap h-auto w-full overflow-auto px-4 py-4">
                    {!currentRecords
                        ? <EmptyState/>
                        : currentRecords.map((meal: MealInterface) => (<div key={meal.id}><MealCard meal={meal}></MealCard></div>))}
                </div>
                <Button title="Load more" styling="" onclickMethod={loadMoreRecords} />
            </div>
        </UserBase>
    )
}
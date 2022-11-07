import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { DataTable } from "../../components/admin/DataTable"
import { getMeals } from "../../api/services/Meals";
import { MealHeaders } from "../../types/types"
import { adminNavbarLinks } from "../../types/consts"
import { AddMealPopup } from "../../components/admin/AddMealPopup"

export const AdminMeals = () => {

    const [meals, setMeals] = useState([]);
    const [addMealsPopup ,setAddMealsPopup] = useState(false);
    
    async function fetchMeals(){
        const response = await getMeals();
        if(response?.success){ setMeals(response.response.meals);
        console.log(response)}
    }

    useEffect(() => {
        fetchMeals();
    }, [])

    return(
            <div className="flex h-screen w-full">
                <AddMealPopup trigger={addMealsPopup} setTrigger={setAddMealsPopup} />
                <SideNavbar navbarlinks={adminNavbarLinks}/>
                <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                    <AdminTopNavbar title="" username="Admin">

                    </AdminTopNavbar>
                    <div className="h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                        <div className="flex items-center justify-start h-12 w-full rounded-t bg-white dark:bg-admin-dark-background dark:text-ad-golden px-3 pl-8">
                            <span className="text-lg font-semibold dark:text-ad-golden">Meals</span>
                            <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton dark:bg-ad-golden dark:text-black rounded-full px-1 py-1">
                                <button onClick={() => {setAddMealsPopup(true)}}>Add Meal<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                            </div>
                        </div>
                        <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                            <div className="flex flex-col w-full h-auto">
                                {meals ? <DataTable data={meals} headers={MealHeaders}></DataTable> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
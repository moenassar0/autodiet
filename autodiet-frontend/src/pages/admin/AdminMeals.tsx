import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { DataTable } from "../../components/admin/DataTable"
import { deleteMeal, getMeals } from "../../api/services/Meals";
import { MealHeaders } from "../../types/types"
import { adminNavbarLinks } from "../../types/consts"
import { AddMealPopup } from "../../components/admin/AddMealPopup"
import { PopupOverlay } from "../../components/utility/PopupOverlay"
import { DeletePopup } from "../../components/utility/DeletePopup"
import { AdminBase } from "../../layouts/AdminBase"

export const AdminMeals = () => {

    const [meals, setMeals] = useState([]);
    const [addMealsPopup, setAddMealsPopup] = useState(false);
    const [editMealsPopup, setEditMealsPopup] = useState(false);
    const [deleteMealsPopup, setDeleteMealsPopup] = useState(false);
    const [mealID, setMealID] = useState(0);

    async function fetchMeals(){
        const response = await getMeals();
        if(response?.success) setMeals(response.response.meals);
    }

    const editFun = (id: number) => {
        setMealID(id);
        setEditMealsPopup(true);
    }

    const delFunction = () => {
        deleteMeal(mealID.toString());
        setDeleteMealsPopup(false);
        fetchMeals();
    }

    useEffect(() => {
        fetchMeals();
    }, [])

    return(
        <section>
            <AddMealPopup edit={false} trigger={addMealsPopup} setTrigger={setAddMealsPopup} />
            <AddMealPopup mealID={mealID} edit={true} trigger={editMealsPopup} setTrigger={setEditMealsPopup} />
            <AdminBase navbarProps={<></>} navbarTitle="Meals">
                <div className="flex items-center justify-start h-12 w-full rounded-t bg-white dark:bg-admin-dark-background dark:text-ad-golden px-3 pl-8">
                    <span className="text-lg font-semibold dark:text-ad-golden">Meals</span>
                    <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton dark:bg-ad-golden dark:text-black rounded-full px-1 py-1">
                        <button onClick={() => {setAddMealsPopup(true)}}>Add Meal<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                    </div>
                </div>
                <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                    <div className="flex flex-col w-full h-auto">
                        {meals ? <DataTable editFunction={editFun} deleteFunction={(id: number) => {setMealID(id); setDeleteMealsPopup(true)}} data={meals} headers={MealHeaders}></DataTable> : ""}
                    </div>
                </div>
                {deleteMealsPopup ? 
                <>
                    <PopupOverlay></PopupOverlay>
                    <DeletePopup trigger={deleteMealsPopup} setTrigger={setDeleteMealsPopup} submitMethod={delFunction}>
                    </DeletePopup>
                </> : ""}
            </AdminBase>
        </section>
    )
}
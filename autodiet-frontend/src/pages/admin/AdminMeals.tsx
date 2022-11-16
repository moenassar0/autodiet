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
            <AdminBase addButton={<button onClick={() => {setAddMealsPopup(true)}}>Add Meal<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>} 
            navbarProps={<></>} navbarTitle="Meals" dataTable={meals ? <DataTable editFunction={editFun} deleteFunction={(id: number) => {setMealID(id); setDeleteMealsPopup(true)}} data={meals} headers={MealHeaders}></DataTable> : ""}>
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
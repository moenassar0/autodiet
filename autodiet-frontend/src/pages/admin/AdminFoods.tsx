import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { deleteFood, getFoods } from "../../api/services/Foods"
import { DataTable } from "../../components/admin/DataTable"
import { FoodPopup } from "../../components/admin/FoodPopup"
import { DeletePopup } from "../../components/utility/DeletePopup"
import { PopupOverlay } from "../../components/utility/PopupOverlay"
import { AdminBase } from "../../layouts/AdminBase"
import { FoodItemHeaders } from "../../types/types"

export const AdminFoods = () => {

    const [foods, setFoods] = useState([]);
    const [currFoodID, setCurrFoodID] = useState(-1);
    const [addPopup, setAddPopup] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false);

    async function fetchFoodItems(){
        const response = await getFoods();
        if(response?.success) setFoods(response.response.foods)
    }

    const editFood = (id: number) => {
        setCurrFoodID(id);
        setEditPopup(true);
    }

    const deleteFuntion = () => {
        deleteFood(currFoodID.toString());
        setDeletePopup(false);
        fetchFoodItems();
    }

    useEffect(() => {
        fetchFoodItems();
    }, [])

    return(
        <section>
            <FoodPopup edit={false} trigger={addPopup} setTrigger={setAddPopup} ></FoodPopup>
            <FoodPopup userID={currFoodID} edit={true} trigger={editPopup} setTrigger={setEditPopup} ></FoodPopup>
            <AdminBase navbarTitle="Foods" navbarProps={<></>}>
                <div className="flex items-center justify-start h-12 w-full rounded-t bg-white dark:bg-admin-dark-background dark:text-ad-golden px-3 pl-8">
                    <span className="text-lg font-semibold dark:text-ad-golden">Food Items</span>
                    <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton dark:bg-ad-golden dark:text-black rounded-full px-1 py-1">
                        <button onClick={()=>{setAddPopup(true)}}>Add Food Item<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                    </div>
                </div>
                <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                    <div className="flex flex-col w-full h-auto">
                        {foods ? <DataTable deleteFunction={(id: number) => {setCurrFoodID(id); setDeletePopup(true);}} editFunction={editFood} data={foods} headers={FoodItemHeaders}></DataTable> : ""}
                    </div>
                </div>
            </AdminBase>
            {deletePopup ? 
                <>
                    <PopupOverlay></PopupOverlay>
                    <DeletePopup trigger={deletePopup} setTrigger={setDeletePopup} submitMethod={deleteFuntion}>
                    </DeletePopup>
                </> : ""}
        </section>
    )
}
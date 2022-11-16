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
            <AdminBase navbarTitle="Foods" navbarProps={<></>}
                    addButton={<button onClick={()=>{setAddPopup(true)}}>Add Food Item<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>}
                    dataTable={foods ? <DataTable deleteFunction={(id: number) => {setCurrFoodID(id); setDeletePopup(true);}} editFunction={editFood} data={foods} headers={FoodItemHeaders}></DataTable> : ""}>
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
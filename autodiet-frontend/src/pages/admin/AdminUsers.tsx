import { useEffect, useState } from "react"
import { SideNavbar } from "../../components/admin/SideNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DataTable } from "../../components/admin/DataTable"
import { firebase_init } from "../../api/firebase_init_test";
import axios from "axios";
import { sendNotification } from "../../HelperFunctions";
import { getUsers, editUser, addUser, deleteUser } from "../../api/services/Users";
import { UserInterface, UserHeaders } from '../../types/types'
import { AddUserPopup } from "../../components/admin/AddUserPopup";
import { adminNavbarLinks } from "../../types/consts";
import { PopupOverlay } from "../../components/utility/PopupOverlay";
import { Popup } from "../../components/utility/Popup";
import { DeletePopup } from "../../components/utility/DeletePopup";
import { AdminBase } from "../../layouts/AdminBase";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [addUsersPopup ,setAddUsersPopup] = useState(false);
    const [editUsersPopup ,setEditUsersPopup] = useState(false);
    const [deleteUsersPopup ,setDeleteUsersPopup] = useState(false);
    const [popupFunction, setPopupFunction] = useState(() => {});
    const [userID, setUserID] = useState(0);
    
    async function fetchUsers(){
        const response = await getUsers();
        if(response?.success){ setUsers(response.response.users);
        console.log(response)}
        else setUsers([]);
    }

    const deletefunc = async (id:number) => {
        const response = await deleteUser(userID.toString());
        console.log(response?.response)
        fetchUsers();
    }

    const editfunc = async (id: number) => {
        setEditUsersPopup(true);
        setUserID(id);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return(
        <section>
            <AddUserPopup edit={false} trigger={addUsersPopup} setTrigger={setAddUsersPopup}/>
            <AddUserPopup userID={userID} edit={true} trigger={editUsersPopup} setTrigger={setEditUsersPopup}/>
            <AdminBase navbarProps={<></>} navbarTitle={"Users"} 
            addButton={<button onClick={() => {setAddUsersPopup(true)}}>Add User<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>}
            dataTable={users ? <DataTable editFunction={editfunc} deleteFunction={(id:number)=>{setUserID(id); setDeleteUsersPopup(true)}} deletePopup={deleteUsersPopup} setDeletePopup={setDeleteUsersPopup} data={users} headers={UserHeaders}></DataTable> : ""}>
                {deleteUsersPopup ? 
                <>
                <PopupOverlay></PopupOverlay>
                <DeletePopup trigger={deleteUsersPopup} setTrigger={setDeleteUsersPopup} submitMethod={deletefunc}>
                </DeletePopup>
                </> : ""}
            </AdminBase>
        </section>
    )
}
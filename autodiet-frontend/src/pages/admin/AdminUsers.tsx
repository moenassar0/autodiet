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
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { AddUserPopup } from "../../components/admin/AddUserPopup";
import { adminNavbarLinks } from "../../types/consts";
import { PopupOverlay } from "../../components/utility/PopupOverlay";
import { Popup } from "../../components/utility/Popup";

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
        <div className="flex h-screen w-full">
            <AddUserPopup edit={false} trigger={addUsersPopup} setTrigger={setAddUsersPopup}/>
            <AddUserPopup userID={userID} edit={true} trigger={editUsersPopup} setTrigger={setEditUsersPopup}/>
            <SideNavbar navbarlinks={adminNavbarLinks}/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <AdminTopNavbar title="" username="Admin"> 
                </AdminTopNavbar>
                <div className="h-5/6 grow w-full bg-admin-grey-background px-4 py-4 dark:bg-[#1F1F1F]">
                    <div className="flex items-center justify-start h-12 w-full rounded-t bg-white px-3 pl-8 dark:bg-admin-dark-background dark:text-ad-golden">
                        <span className="text-lg font-semibold">Users</span>
                        <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton dark:text-black dark:bg-ad-golden rounded-full px-1 py-1">
                            <button onClick={() => {setAddUsersPopup(true)}}>Add User<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                        </div>
                    </div>
                    <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                        <div className="flex flex-col w-full h-auto">
                            {users ? <DataTable editFunction={editfunc} deleteFunction={(id:number)=>{setUserID(id); setDeleteUsersPopup(true)}} deletePopup={deleteUsersPopup} setDeletePopup={setDeleteUsersPopup} data={users} headers={UserHeaders}></DataTable> : ""}
                        </div>
                    </div>
                </div>
            </div>
            {deleteUsersPopup ? <><PopupOverlay></PopupOverlay><Popup title="Are you sure you want to delete this user?" inputs={[]} edit={false} submitMethod={deletefunc} message={""}>
                
            </Popup></> : ""}
        </div>
    )
}
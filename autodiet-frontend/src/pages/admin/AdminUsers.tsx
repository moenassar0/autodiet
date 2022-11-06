import { useEffect, useState } from "react"
import { AdminSideNavbar } from "../../components/admin/AdminSideNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DataTable } from "../../components/admin/DataTable"
import { firebase_init } from "../../api/firebase_init_test";
import axios from "axios";
import { sendNotification } from "../../HelperFunctions";
import { getUsers } from "../../api/services/Users";
import { UserInterface, UserHeaders } from '../../types/types'
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";

export const AdminUsers = () => {

    const [users, setUsers] = useState([]);
    
    async function fetchUsers(){
        try{
            const response = await getUsers();
            console.log(response.users);
            setUsers(response.users);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return(
        <div className="flex h-screen w-full">
            <AdminSideNavbar/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <AdminTopNavbar />
                <div className="h-5/6 grow w-full bg-admin-grey-background px-4 py-4">
                    <div className="flex items-center justify-start h-12 w-full rounded-t bg-white px-3 pl-8">
                        <span className="text-lg font-semibold">Users</span>
                        <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton rounded-full px-1 py-1">
                            <button>Add User<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                        </div>
                    </div>
                    <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                        <div className="flex flex-col w-full h-auto">
                            <DataTable data={users} headers={UserHeaders}></DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
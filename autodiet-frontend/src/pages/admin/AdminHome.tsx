import { useEffect, useState } from "react"
import { AdminSideNavbar } from "../../components/admin/AdminSideNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { DataTable } from "../../components/admin/DataTable";
import { firebase_init } from "../../api/firebase_init_test";
import axios from "axios";
import { sendNotification } from "../../HelperFunctions";

export const AdminHome = () => {
    
    useEffect(() => {
        sendNotification();
    }, [])
    firebase_init();
    return(
        <div className="flex h-screen w-full">

            <AdminSideNavbar/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                {/*<!-- Topnavbar -->*/}
                <div className="flex h-1/6 max-h-16 w-full bg-white drop-shadow">
                    <div className="flex items-center ml-auto self-center w-40 h-10 rounded">
                        <img className="w-7 h-6 rounded-full mr-1" src="../logo512.png"></img>
                        <span className="w-1/3 text-md">Admin</span>
                    </div>
                </div>
                <div className="h-5/6 grow w-full bg-admin-grey-background px-4 py-4">
                    <div className="flex items-center justify-start h-12 w-full rounded-t bg-white px-3 pl-8">
                        <span className="text-lg font-semibold">Users</span>
                        <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1">
                            <button>Add User<FontAwesomeIcon className="ml-2" icon={faPlus}/></button>
                        </div>
                    </div>
                    <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                        <div className="flex flex-col w-full h-auto">
                            <DataTable></DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AdminSideNavbar } from "../../components/admin/AdminSideNavbar"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { DataTable } from "../../components/admin/DataTable"

export const AdminMeals = () => {
    return(
            <div className="flex h-screen w-full">
                <AdminSideNavbar/>
                <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                    <AdminTopNavbar />
                    <div className="h-5/6 grow w-full bg-admin-grey-background px-4 py-4">
                        <div className="flex items-center justify-start h-12 w-full rounded-t bg-white px-3 pl-8">
                            <span className="text-lg font-semibold">Users</span>
                            <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1">
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
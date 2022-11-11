import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { userNavbarLinks } from "../../types/consts"

export const Chatbox = () => {
    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test">
                </AdminTopNavbar>
                <div className="flex h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F]">

                </div>
            </div>
        </div>
    )
}
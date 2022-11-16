import React from "react"
import { AdminTopNavbar } from "../components/admin/AdminTopNavbar"
import { SideNavbar } from "../components/admin/SideNavbar"
import { adminNavbarLinks } from "../types/consts"

export const AdminBase: React.FC<{navbarProps: any, children: any, navbarTitle: string, addButton: any, dataTable: any}> = ({dataTable, addButton, navbarProps, children, navbarTitle}) => {
    return(
        <div className="flex h-screen w-full">
        <SideNavbar navbarlinks={adminNavbarLinks}/>
        <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
            <AdminTopNavbar title={navbarTitle} username="Admin">
                {navbarProps}
            </AdminTopNavbar>
            <div className="h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                <div className="flex items-center justify-start h-12 w-full rounded-t bg-white px-3 pl-8 dark:bg-admin-dark-background dark:text-ad-golden">
                    <span className="text-lg font-semibold">{navbarTitle}</span>
                    <div className="flex w-28 justify-center ml-auto h-2/3 bg-admin-button text-white hover:bg-admin-hoveredbutton dark:text-black dark:bg-ad-golden rounded-full px-1 py-1">
                        {addButton}
                    </div>
                </div>
                <div className="flex h-5/6 grow w-full overflow-y-scroll rounded drop-shadow">
                    <div className="flex flex-col w-full h-auto">
                        {dataTable}
                    </div>
                </div>
            </div>
        </div>
        {children}
    </div>
    )
}
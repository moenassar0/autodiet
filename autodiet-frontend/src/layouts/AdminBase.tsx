import React from "react"
import { AdminTopNavbar } from "../components/admin/AdminTopNavbar"
import { SideNavbar } from "../components/admin/SideNavbar"
import { adminNavbarLinks } from "../types/consts"

export const AdminBase: React.FC<{navbarProps: any, children: any, navbarTitle: string}> = ({navbarProps, children, navbarTitle}) => {
    return(
        <div className="flex h-screen w-full">
        <SideNavbar navbarlinks={adminNavbarLinks}/>
        <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
            <AdminTopNavbar title={navbarTitle} username="Admin">
                {navbarProps}
            </AdminTopNavbar>
            <div className="h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                {children}
            </div>
        </div>
    </div>
    )
}
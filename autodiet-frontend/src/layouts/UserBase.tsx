import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TopNavbar } from "../components/admin/TopNavbar"
import { SideNavbar } from "../components/admin/SideNavbar"
import { userNavbarLinks } from "../types/consts"

export const UserBase: React.FC<{topNavbarChildren: any, children: any, pageTitle: string}> = ({topNavbarChildren, children, pageTitle}) => {
    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <TopNavbar title={pageTitle} username="Test">
                {topNavbarChildren}
                </TopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F]">
                    {children}
                </div>
            </div>
        </div>
    )
}
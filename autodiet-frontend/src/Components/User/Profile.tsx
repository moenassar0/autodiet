import { UserSideNavbar } from "./UserSideNavbar"

export const Profile = () => {
    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-screen w-4/5">
                <div className="topnavbar"></div>
                <div className="flex h-4/5 w-full bg-ad-lightgrey">
                    
                </div>
            </div>
        </div>
    )
}
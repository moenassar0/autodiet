import { UserSideNavbar } from "./UserSideNavbar"

export const Profile = () => {
    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-screen w-4/5">
                <div className="topnavbar"></div>
                <div className="flex h-4/5 w-full bg-ad-lightgrey">
                    <div className="flex flex-col h-4/5 w-full py-2 px-2">
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full">Goal</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3 rounded-l-lg">Lose weight</button>
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3">Maintain</button>
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3 rounded-r-lg">Gain muscle</button>
                            </div>
                        </div>
                        <div className="flex w-full h-1/6">
                            <div className="flex items-center  w-1/5 h-full">Goal</div>
                            <div className="flex w-3/5 h-full items-center justify-end">
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3 rounded-l-lg">Lose weight</button>
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3">Maintain</button>
                                <button className="flex items-center justify-center bg-ad-golden h-1/2 justify-self-end w-1/3 rounded-r-lg">Gain muscle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
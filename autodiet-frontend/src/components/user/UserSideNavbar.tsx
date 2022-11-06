import { Link } from "react-router-dom"

export const UserSideNavbar = () =>{
    return(
        <div className="flex h-min-screen w-1/5 bg-ad-darkgrey flex-col px-2 py-4">
            <div className="flex items-center justify-start"><div className="navbar-icon"></div></div>
            <div className="sidenavbar-items scrollbar">
                <div className="flex w-full h-16 text-ad-golden items-center justify-start">Username</div>
                <div className='flex w-full h-8 text-ad-golden items-center justify-start'>
                    <hr className="border w-full border-ad-golden"></hr>
                </div>
                <Link to="/user/home"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Meals</div></Link>
                <Link to="/user/profile"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Profile</div></Link>
                <div className='flex w-full h-8 text-ad-golden items-center justify-start'>
                    <hr className="border w-full border-ad-golden"></hr>
                </div>
                <Link to="/user/meals"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Browse meals</div></Link>
                <Link to="/user/foods"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Browse foods</div></Link>
                <div className='flex w-full h-8 text-ad-golden items-center justify-start'>
                    <hr className="border w-full border-ad-golden"></hr>
                </div>
            </div>
        </div>
    )
}
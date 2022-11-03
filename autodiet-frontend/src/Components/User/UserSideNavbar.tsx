import { Link } from "react-router-dom"

export const UserSideNavbar = () =>{
    return(
        <div className="sidenavbar">
            <div className="flex items-center justify-start"><div className="navbar-icon"></div></div>
            <div className="sidenavbar-items scrollbar">
                
                <div className="flex w-full h-16 text-ad-golden items-center justify-start">Username</div>

                <Link to="/user/home"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Meals</div></Link>
                <Link to="/user/profile"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Profile</div></Link>

                <Link to="/user/meals"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Browse meals</div></Link>
                <Link to="/user/foods"><div className="flex w-full h-8 text-ad-golden items-center justify-start hover:underline cursor-pointer">Browse foods</div></Link>
                <div className="sidenavbar-item">Browse diets</div>
                <div className='sidenavbar-item'><hr></hr></div>
            </div>
        </div>
    )
}
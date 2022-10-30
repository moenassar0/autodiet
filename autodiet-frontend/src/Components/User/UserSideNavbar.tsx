import { Link } from "react-router-dom"

export const UserSideNavbar = () =>{
    return(
        <div className="sidenavbar">
            <div className="sidenavbar-top"><img src="../logo2.png"></img></div>
            <div className="sidenavbar-items scrollbar">
                <div className="sidenavbar-item"></div>
                <div className="sidenavbar-item">Username</div>
                <div className='sidenavbar-item'><hr></hr></div>
                <div className="sidenavbar-item">Meals</div>
                <Link to="/user/profile"><div className="cursor-pointer sidenavbar-item">Profile</div></Link>
                <div className="sidenavbar-item">Preferences</div>
                <div className='sidenavbar-item'><hr></hr></div>
                <div className="sidenavbar-item">Browse meals</div>
                <div className="sidenavbar-item">Browse food items</div>
                <div className="sidenavbar-item">Browse diets</div>
                <div className='sidenavbar-item'><hr></hr></div>
            </div>
        </div>
    )
}
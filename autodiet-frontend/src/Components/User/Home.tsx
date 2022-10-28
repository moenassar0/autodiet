export const Home = () => {
    return(
        <div className="flex">
            <div className="sidenavbar">
                <div className="sidenavbar-top"><img src="../logo2.png"></img></div>
                <div className="sidenavbar-items scrollbar">
                    <div className="sidenavbar-item"></div>
                    <div className="sidenavbar-item">Username</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                    <div className="sidenavbar-item">Meals</div>
                    <div className="sidenavbar-item">Profile</div>
                    <div className="sidenavbar-item">Preferences</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                    <div className="sidenavbar-item">Browse meals</div>
                    <div className="sidenavbar-item">Browse food items</div>
                    <div className="sidenavbar-item">Browse diets</div>
                    <div className='sidenavbar-item'><hr></hr></div>
                </div> 
            </div>
            <div className="container">
                <div className="topnavbar"></div>
                <div className="mealplan-container">
                    <div className="meals-container">
                        <div className="meal">

                        </div>
                    </div>
                    <div className="nutrition-container">

                    </div>
                </div>
            </div>

        </div>
    )
}
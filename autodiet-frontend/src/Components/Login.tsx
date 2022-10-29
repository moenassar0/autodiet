import { Navbar } from "./LandingPage/Navbar"

export const Login = () => {
    return(
        <>
            <div className='translucent-overlay'></div>
            <Navbar />
            <div className='navbar-line'><hr></hr></div>
            <div className='hero-content flex items-center px-6'>
                <img className='hero-image' src="../../hero.png"></img>
            </div>
        </>
    )
}
import { Navbar } from "./LandingPage/Navbar"

export const Register = () => {
    return(
        <>
        <div className='translucent-overlay'></div>
        <Navbar />
        <div className='navbar-line'><hr></hr></div>
        <div className='hero-content flex items-center px-6'>
            <div className="flex flex-col w-full max-w-lg h-96 items-center bg-ad-lightgrey rounded-t">
                <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                    Create a new account
                </div>
                <div className="flex flex-col w-full items-center gap-10">
                </div>
            </div>
            <img className='hero-image' src="../../hero.png"></img>
        </div>
    </>
    )
}
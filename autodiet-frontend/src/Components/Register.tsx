import { Navbar } from "./LandingPage/Navbar"

export const Register = () => {
    
    function register(){
        
    }

    return(
        <>
        <div className='translucent-overlay'></div>
        <Navbar />
        <div className='navbar-line'><hr></hr></div>
        <div className='hero-content flex items-center px-6'>
            <div className="flex flex-col w-full max-w-lg min-h-96 h-auto items-center bg-ad-lightgrey rounded-t">
                <div className="flex items-center justify-center w-full h-12 bg-black mb-8 rounded-t text-ad-golden font-bold text-lg">
                    Create a new account
                </div>
                <div className="flex flex-col w-full justify-center gap-10 px-2">
                    <div className="flex items-center place-content-between w-full h-10">
                        <span className="w-2/5 text-ad-golden text-lg">Email</span>
                        <input className="w-3/5 py-2 px-4 bg-black text-white"type="text"></input>
                    </div>
                    <div className="flex items-center place-content-between w-full h-10">
                        <span className="w-2/5 text-ad-golden text-lg">Username</span>
                        <input className="w-3/5 py-2 px-4 bg-black text-white"type="text"></input>
                    </div>
                    <div className="flex items-center place-content-between w-full h-10">
                        <span className="w-2/5 text-ad-golden text-lg">Password</span>
                        <input className="w-3/5 py-2 px-4 bg-black text-white"type="text"></input>
                    </div>
                    <div className="flex items-center place-content-between w-full h-10">
                        <span className="w-2/5 text-ad-golden text-lg">Repeat password</span>
                        <input className="w-3/5 py-2 px-4 bg-black text-white"type="text"></input>
                    </div>
                    <div className="flex items-center self-end w-3/5 h-10">
                        <button onClick={register} className="w-full h-full mb-10 bg-ad-golden text-black rounded">Register</button>
                    </div>
                </div>
            </div>
            <img className='hero-image' src="../../hero.png"></img>
        </div>
    </>
    )
}
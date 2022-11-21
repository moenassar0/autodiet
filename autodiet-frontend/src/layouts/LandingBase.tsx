import { useNavigate } from "react-router-dom";

export const LandingBase: React.FC<{children: any}> = ({children}) => {

    const navigate = useNavigate();

    const goToRegisterPage = () => {
        navigate("/register");
    }

    const goToLoginPage = () => {
        navigate("/login");
    }
    
    return(
        <div className="flex flex-col w-full h-screen">
            <div className="flex items-center bg-black h-14 w-full p-2 z-20">
                <div className="w-26 h-12"><img className="w-full h-full" src="../AutoDiet-1.png"></img></div>
                <div className="flex h-full w-1/2 grow justify-end">
                    <button onClick={goToLoginPage} className="w-24 h-full bg-ad-golden font-medium text-black rounded-full hover:opacity-80">LOGIN</button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-5/6 grow relative">
                <div className="grad"></div>
                {children}
            </div>
        </div>
    )
}
import { useState } from "react"
import { Button } from "../../components/utility/Button"
import { UserBase } from "../../layouts/UserBase"

export const SlideTest = () => {
    const [slide, setSlide] = useState(false);
    return(
        <UserBase pageTitle="Slide" topNavbarChildren={""}>
            <Button styling="" title="Slide" onclickMethod={() => {setSlide(!slide)}}></Button>
            <div className="relative overflow-hidden w-full h-full flex bg-black">

                <div className="boxslide">
                <span className="text-white">ASASDASD</span>
                </div>
            </div>
        </UserBase>
    )
}
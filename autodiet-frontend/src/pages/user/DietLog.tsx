import { useEffect, useState } from "react"
import { Button } from "../../components/utility/Button";
import { UserBase } from "../../layouts/UserBase"

export const DietLog = () => {

    const [foods, setFoods] = useState([]);
    const [currFoodID, setCurrFoodID] = useState(-1);
    const [addPopup, setAddPopup] = useState(false);

    useEffect(() => {

    }, [])

    return(
        <UserBase topNavbarChildren={<></>} pageTitle="Diet Log">
            <div className="flex bg-white h-12 items-center w-full rounded px-2">
                <Button onclickMethod={() => {}} styling="" title="Add Food"></Button>
            </div>
        </UserBase>
    )
}
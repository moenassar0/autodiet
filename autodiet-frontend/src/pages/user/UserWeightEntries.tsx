import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import ReactFrappeChart from "react-frappe-charts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { AdminTopNavbar } from "../../components/admin/TopNavbar";
import { LineChart } from "../../components/charts/LineChart";
import { useEffect, useState } from "react";
import { addOrUpdateWeightEntries, getUserEntries } from "../../api/services/Users";
import { Button } from "../../components/utility/Button";
import { CustomNotification } from "../../components/utility/CustomNotification";

export const UserWeightEntries = () => {

    const [dates, setDates] = useState([]);
    const [date, setDate] = useState('');
    const [weight, setWeight] = useState(0);
    const [weights, setWeights] = useState([]);
    const [hideNotification, setHideNotification] = useState(true);

    useEffect(() => {
        fetchEntries()
    }, [])

    const fetchEntries = async () => {
        const response = await getUserEntries();
        if(response?.success){ 
            setDates(response.response.dates)
            setWeights(response.response.weights);
        }
    }

    const insertEntry = async () => {
        const response = await addOrUpdateWeightEntries({date, weight});
        console.log(date, "date", "weight", weight);
        console.log(response);
        setHideNotification(false);
        fetchEntries();
    }


    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Your Weight History" username="Test">

                </AdminTopNavbar>
                <div className="flex flex-col min-h-[83%] h-full gap-2 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey px-4 py-4">
                    <div className="flex flex-wrap items-start justify-start h-16 w-full rounded drop-shadow bg-white dark:bg-admin-dark-background px-2 py-2 gap-2 items-center">
                        <span className="text-lg dark:text-ad-golden text-black font-medium">Insert an entry:</span>
                        <input className="outline-none border border-slate-500 w-1/3 p-1" type="date" onChange={(e) => {setDate(e.currentTarget.value)}}>

                        </input>
                        <input className="outline-none border border-slate-500 w-1/3 p-1" type="text" onChange={(e) => {setWeight(parseInt(e.currentTarget.value))}} placeholder="Weight (kg)">

                        </input>
                        <Button onclickMethod={insertEntry} styling="" title="Submit"></Button>
                    </div>
                    <div className="w-full h-full flex flex-col rounded drop-shadow bg-white dark:bg-admin-dark-background">
                        <div className="flex w-full h-18 rounded justify-center dark:text-ad-golden ">
                            Weight Entry History
                        </div>
                        <div className="h-52 sm:h-72 flex w-full lg:h-96 justify-center  dark:text-ad-golden ">
                            <LineChart labels={dates} dataFields={weights} />
                        </div>
                    </div>
                </div>
            </div>
            {<CustomNotification body="Weight entry added!" turnOff={hideNotification} setTurnOff={setHideNotification} /> }
        </div>
    )
}
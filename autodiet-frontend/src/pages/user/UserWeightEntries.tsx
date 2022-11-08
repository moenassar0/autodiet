import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import ReactFrappeChart from "react-frappe-charts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { DoughnutChart } from "../../components/charts/DoughnutChart";
import { useEffect, useState } from "react";
import { getUserEntries } from "../../api/services/Users";

export const UserWeightEntries = () => {

    const [dates, setDates] = useState([]);
    const [weights, setWeights] = useState([]);

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

    return(
        <div className="flex h-screen w-full sm:h-full flex w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Your Weight History" username="Test"> 
                </AdminTopNavbar>
                <div className="flex flex-col h-min-5/6 gap-2 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey px-4 py-4">
                    <div className="flex flex-wrap items-start justify-start h-16 w-full rounded drop-shadow bg-white dark:bg-ad-lightgrey px-2 py-2">
                        <input className="w-1/3" type="date">

                        </input>
                        <input className="w-1/3" type="text" placeholder="Weight (kg)">

                        </input>
                        <button className="w-1/4 dark:bg-ad-golden dark:text-black text-white bg-admin-button rounded-full">Submit</button>
                    </div>
                    <div className="h-auto grow w-full bg-white ">
                        <DoughnutChart labels={dates} dataFields={weights} />
                    </div>
                    <div className="flex w-full h-16 bg-black mt-1 mb-1 rounded">

                    </div>  
                </div>
            </div>
        </div>
    )
}
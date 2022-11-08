import { UserSideNavbar } from "../../components/user/UserSideNavbar"
import ReactFrappeChart from "react-frappe-charts";
import { SideNavbar } from "../../components/admin/SideNavbar";
import { userNavbarLinks } from "../../types/consts";
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar";
import { DoughnutChart } from "../../components/charts/DoughnutChart";

export const UserWeightEntries = () => {
    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test"> 
                </AdminTopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-ad-lightgrey px-4 py-4">
                    <div className="flex flex-wrap items-start justify-start h-1/3 w-full rounded drop-shadow bg-white dark:bg-ad-lightgrey px-2 py-2">
                        <input className="w-1/2" type="date">

                        </input>
                        <input className="w-1/2" type="text" placeholder="Weight (kg)">

                        </input>
                        <button>Submit</button>
                    </div>
                    <div className="h-1/2 grow w-full bg-white overflow-y-scroll">
                        <DoughnutChart />
                    </div>

                </div>
            </div>
        </div>
    )
}
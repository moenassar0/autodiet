import { UserSideNavbar } from "./UserSideNavbar"
import ReactFrappeChart from "react-frappe-charts";

export const UserWeightEntries = () => {
    return(
        <div className="flex h-min-screen w-full">
            <UserSideNavbar />
            <div className="flex flex-col h-screen w-4/5">
                <div className="topnavbar"></div>
                <div className="flex flex-col h-4/5 w-full bg-ad-lightgrey px-4 py-4 !text-white">
                    <div className="h-full w-full bg-ad-golden">
                    <ReactFrappeChart
                        type="line"
                        colors={["#000000"]}
                        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                        height={350}
                        data={{
                            labels: ["11/1", "11/2", "11/3", "11/4", "11/5", "11/6", "Sat", "Sun"],
                            datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
                        }}
                    />
                    </div>

                </div>
            </div>
        </div>
    )
}
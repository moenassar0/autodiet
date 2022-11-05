import { useState } from "react"
import { AdminTopNavBar } from "./AdminTopNavBar";

export const AdminHome = () => {

    const [openNavbar, setOpenNavbar] = useState(false);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }

    return(
        <div className="flex h-screen w-full">
            <AdminTopNavBar/>
            <div className="flex flex-col w-5/6 h-screen">
                <div className="flex h-1/6 max-h-16 w-full bg-white drop-shadow">
                    <div className="flex items-center ml-auto self-center w-40 h-10 rounded">
                        <img className="w-7 h-6 rounded-full mr-1" src="../logo512.png"></img>
                        <span className="w-1/3 text-md">Admin</span>
                    </div>
                </div>
                <div className="h-5/6 w-full bg-admin-grey-background px-4 py-4">
                    <div className="flex h-full w-full overflow-y-scroll rounded bg-white">
                        <table className="w-full h-auto border border-collapse px-2 rounded">
                            <tbody>
                            <tr className="bg-admin-main text-white rounded text-left">
                                <th>Username</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const AdminHome = () => {
    return(
        <div className="flex h-screen w-full">
            <div className="h-screen w-1/6 bg-admin-main">
                
            </div>
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
                            <tr className="h-20">
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            <tr className="h-20">
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            <tr className="h-20">
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            <tr className="h-20">
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
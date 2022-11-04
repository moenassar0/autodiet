export const AdminHome = () => {
    return(
        <div className="flex h-screen w-full">
            <div className="h-full w-1/6 bg-admin-main">
                
            </div>
            <div className="flex flex-col w-5/6 h-full">
                <div className="flex h-16 w-full bg-white drop-shadow">
                    <div className="flex items-center ml-auto self-center w-40 h-10 rounded">
                        <img className="w-7 h-6 rounded-full mr-1" src="../logo512.png"></img>
                        <span className="w-1/3 text-md">Admin</span>
                    </div>
                </div>
                <div className="h-screen w-full bg-admin-grey-background">
                    
                </div>
            </div>
        </div>
    )
}
export const DataTable = () => {
    return(          
            <div className="shadow-sm overflow-hidden">
                <table className="border-collapse table-auto w-full text-sm">
                <thead className="text-center bg-[#F5F5F6]">
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-8 dark:text-slate-200 text-left">Username</th>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">Email</th>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    <tr>
                        <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-8 dark:text-slate-400">croozeraid</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-2 dark:text-slate-400">mnassar@gmail.com</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-2 dark:text-slate-400">
                            <button></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserInterface } from '../../types/types'

export const DataTable: React.FC<{users:Array<UserInterface>}> = ({users}) => {
    return(          
            <div className="h-auto w-full shadow-sm">
                <table className="border-collapse table-auto w-full text-sm">
                <thead className="text-center bg-[#F5F5F6]">
                    <tr>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-8 dark:text-slate-200 text-left">Username</th>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">Email</th>
                        <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="w-60 bg-white dark:bg-slate-800">
                {users.map((user: UserInterface) => (
                    <tr key={user.id}>
                        <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-8 dark:text-slate-400">{user.username}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-2 dark:text-slate-400">{user.email}</td>
                        <td className="flex gap-2 border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-2 dark:text-slate-400">
                            <button className='flex w-28 justify-center h-2/3 text-white bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1 font-medium'>Edit User<FontAwesomeIcon className="self-center ml-2" icon={faEdit}/></button>
                            <button className='flex w-28 justify-center h-2/3 text-white bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1 font-medium'>Delete User<FontAwesomeIcon className="text-red-700 self-center ml-2" icon={faTrash}/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
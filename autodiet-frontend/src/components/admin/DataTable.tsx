import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserInterface, UserHeaders } from '../../types/types'
import { Key } from 'react';

export const DataTable: React.FC<{data:Array<Object>, headers:Array<string>}> = ({data, headers}) => {
    //Scalable data table for CRUD operations.
    //Headers are keys in the data object
    //Headers will be mapped as table headers and then the data array will be mapped using the headers
    return(          
            <div className="h-auto w-full shadow-sm">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead className="text-center bg-[#F5F5F6] dark:bg-[#3A3B3B]">
                        <tr>
                            {headers?.map((header, i) => (
                                <th key={i} className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-8 dark:text-slate-200 text-left">
                                    {header.toUpperCase()}
                                </th>
                            ))}
                            <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-8 dark:text-slate-200 text-left">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-60 bg-white dark:bg-admin-dark-background">
                        {data.map((data:any, i) => (
                            <tr key={data.id}>
                            {headers?.map((header, i) => (
                                <td key={i} className="border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-8 dark:text-slate-400">
                                    {data[header]}
                                </td>
                            ))}
                                <td className="flex gap-2 border-b border-slate-100 dark:border-slate-700 text-slate-500 py-2 pl-2 dark:text-slate-400">
                                    <button onClick={() => {console.log(data.id)}} className='flex w-28 justify-center h-2/3 text-white bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1 font-medium'>
                                        Edit
                                        <FontAwesomeIcon className="self-center ml-2" icon={faEdit}/>
                                    </button>
                                    <button className='flex w-28 justify-center h-2/3 text-white bg-admin-button hover:bg-admin-hoveredbutton rounded-full px-1 py-1 font-medium'>
                                        Delete
                                        <FontAwesomeIcon className="text-red-700 self-center ml-2" icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}
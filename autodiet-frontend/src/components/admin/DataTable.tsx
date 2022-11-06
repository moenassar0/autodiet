import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserInterface } from '../../types/types'
import { Key } from 'react';

export const DataTable: React.FC<{data:any}> = ({data}) => {
    const user = data[0];
    let headers:Array<string> = [];
    if(user){
        headers = (Object.keys(user));
        console.log(headers);
    }
    
    //const headers2:any = Object.keys(headers)
    return(          
            <div className="h-auto w-full shadow-sm">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead className="text-center bg-[#F5F5F6]">
                        <tr>
                            {headers?.map((header) => (
                                <th className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="w-60 bg-white dark:bg-slate-800">
                        {data.map((user:any) => (
                            <tr>
                            {headers?.map((header) => (
                                <td className="border-b dark:border-slate-600 font-medium text-slate-400 py-2 pl-2 dark:text-slate-200 text-left">
                                    {user[header]}
                                </td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

/*
            {users.map((datum:any, index:number) => {
              return (
                <tr key={datum.id}>
                  {headers2.map((header:any, index: Key | null | undefined) => {
                      <td key={index}>
                          <span>{datum[header]}</span>                      
                      </td>
                  })}
                </tr>
              );
            })}
*/
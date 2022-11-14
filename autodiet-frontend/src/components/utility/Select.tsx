export const Select: React.FC<{setHook: any, name: string, options: Array<string>}> = ({setHook, name, options}) => {
    return(
        <select className="w-1/2 rounded h-2/3 drop-shadow bg-white  flex p-2" name="activity" onChange={(e) => {setHook(e.target.value)}}>
            {options.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}
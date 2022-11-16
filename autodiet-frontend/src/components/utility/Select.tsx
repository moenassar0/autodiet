export const Select: React.FC<{hook: string, setHook: any, name: string, options: Array<string>}> = ({setHook, name, hook, options}) => {
    return(
        <select value={hook} className="w-1/2 grow rounded h-2/3 drop-shadow bg-white  flex p-2" name={name} onChange={(e) => {setHook(e.target.value)}}>
            {options.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}
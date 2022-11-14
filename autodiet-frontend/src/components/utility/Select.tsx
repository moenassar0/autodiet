export const Select: React.FC<{setHook: any, name: string, options: Array<string>}> = ({setHook, name, options}) => {
    return(
        <select name="activity" onChange={(e) => {setHook(e.target.value)}}>
            {options.map((option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}
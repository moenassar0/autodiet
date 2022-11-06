import { InputFieldInterface } from "../../types/types"


//change to interface
const InputField: React.FC<InputFieldInterface> = ({title, error, state, setHook, valid}) => {

    return(
        <>
            <div className="flex items-center place-content-between w-full h-10">
                <span className="w-2/5 text-ad-golden text-lg">{title}</span>
                <input 
                    onChange={(e) => setHook(e.target.value)} 
                    className={"w-3/5 py-2 px-4 text-white bg-black rounded focus:outline-none focus:ring-2 focus:border-ad-golden focus:ring-ad-golden" +
                    (!valid && state ? "focus:border-red-500 focus:ring-red-500 border-red-500 text-red-600" : "")} type="password">
                </input>
            </div>
            {!valid && state ? <p className="w-3/5 flex self-end text-red-600">{error}</p> : ""}
        </>
    )
}
export default InputField
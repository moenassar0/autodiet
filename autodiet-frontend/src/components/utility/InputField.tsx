import { InputFieldInterface } from "../../types/types"


//change to interface
const InputField: React.FC<InputFieldInterface> = ({title, error, state, setHook, valid, placeholder}) => {
    const styles = {
        container: "flex items-center place-content-between w-full h-10 px-2 py-1",
        title: "w-2/5 text-admin-main dark:text-ad-golden text-lg",
        inputFieldNormal: "h-full w-3/5 py-2 px-4 bg-admin-main text-white dark:bg-black rounded focus:outline-none focus:ring-2 focus:border-admin-button focus:ring-admin-button dark:focus:border-ad-golden dark:focus:ring-ad-golden ",
        inputFieldInvalid: "focus:border-red-500 focus:ring-red-500 border-red-500 text-red-600"
    }
    return(
        <>
            <div className={styles.container}>
                <span className={styles.title}>{title}</span>
                <input
                    placeholder={placeholder}
                    value={state} 
                    onChange={(e) => setHook(e.target.value)} 
                    className={styles.inputFieldNormal +
                    (!valid && state ? styles.inputFieldInvalid : "")} type="text">
                </input>
            </div>
            {!valid && state ? <p className="w-3/5 flex self-end text-red-600">{error}</p> : ""}
        </>
    )
}
export default InputField
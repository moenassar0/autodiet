import { PopupOverlay } from "../utility/PopupOverlay"
import InputField from "../../components/utility/InputField"

export const AddUserPopup: React.FC<{setTrigger: any, trigger: boolean}> = ({setTrigger, trigger}) => {

    return(
        <section>
           {trigger ? 
            (   <>
                <PopupOverlay></PopupOverlay>
                <div className="absolute flex w-full h-screen z-20 items-center justify-center">
                    <div className="w-4/5 sm:w-3/6 h-auto flex flex-wrap bg-white content-start dark:bg-admin-dark-background text-admin-main dark:text-ad-golden overflow-y-scroll gap-2 rounded-t-lg">
                        <div className="flex w-full h-16 text-xl font-medium items-center px-2 rounded-t-lg border-b border-black">
                            <span>Add User</span>
                        </div>
                        <InputField title="Username" error="asd" setHook={null} state="" valid={true}></InputField>
                        <InputField title="Email" error="asd" setHook={null} state="" valid={true}></InputField>
                        <InputField title="Password" error="asd" setHook={null} state="" valid={true}></InputField>
                        <div className="flex w-full h-full justify-end items-center py-2 px-2">
                            <button className="flex w-24 h-8 items-center justify-center px-2 py-2 bg-admin-button text-white dark:text-black dark:bg-ad-golden rounded-2xl ml-0">Add</button>
                        </div>
                    </div>
                </div>
                </>
            ) : ("") } 
        </section>
    )

}

/*
                <div className="w-48 sm:flex top-5 absolute left-0 right-0 ml-auto mr-auto w-48 h-96 h-max-screen bg-white z-20">

                </div>
*/
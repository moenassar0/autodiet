import { PopupOverlay } from "../utility/PopupOverlay"

export const AddUserPopup: React.FC<{setTrigger: any, trigger: boolean}> = ({setTrigger, trigger}) => {

    return(
        <section>
           {trigger ? 
            (   <>
                <PopupOverlay></PopupOverlay>
                <div className="absolute flex w-full h-screen z-20 items-center justify-center">
                    <div className="w-4/5 sm:w-4/6 h-5/6 flex flex-wrap bg-white overflow-y-scroll rounded-t-lg">
                        <div className="flex w-full h-12 text-lg bg-ad-golden items-center px-2 rounded-t-lg border-b border-black">
                            <span>Add User</span>
                        </div>
                    </div>
                </div>
                </>
            )
            : 
            ("")
            } 
        </section>
    )

}

/*
                <div className="w-48 sm:flex top-5 absolute left-0 right-0 ml-auto mr-auto w-48 h-96 h-max-screen bg-white z-20">

                </div>
*/
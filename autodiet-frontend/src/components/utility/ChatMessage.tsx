import { getChatDate } from "../../HelperFunctions"
import { ChatMessageInterface } from "../../types/types"

export const ChatMessage: React.FC<{message: ChatMessageInterface, admin: boolean}> = ({message, admin}) => {
    return(
        <div className={(admin ? "justify-end" : "") + " flex items-start w-full h-auto"}>
            <div className="flex flex-col flex-wrap w-1/2 bg-[#EDEEF0] p-3 rounded-xl dark:bg-[#1E1E1E] bg-admin-grey-background hover:drop-shadow">
                <span className="dark:text-ad-golden text-admin-button font-medium">{message.name}</span>
                <span className="text-slate-700 dark:text-slate-200">{message.text}</span>
                <span className="flex text-xs self-end opacity-60 dark:text-ad-golden">{ message.timestamps ? getChatDate(message.timestamps) : ""}</span>
            </div>
        </div>
    )
}
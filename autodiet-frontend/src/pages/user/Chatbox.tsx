import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, where } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { db } from "../../api/firebase"
import { getUser } from "../../api/services/Users"
import { TopNavbar } from "../../components/admin/TopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { getChatDate } from "../../HelperFunctions"
import { userNavbarLinks } from "../../types/consts"
import { UserInterface } from "../../types/types"

export const Chatbox = () => {

    const [messages, setMessages] = useState([] as any);
    const [inputMessage, setInputMessage] = useState("");
    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        if(messagesEndRef.current){
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
      
    }
  
    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        let userID: any = -1;
        getUserID().then((id) => {
            userID = id
            const q = query(collection(db, 'messages'), where("userID", "==", userID),orderBy('timestamps'));
            const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
                let messages: any = [];
                querySnapshot.forEach((doc: any) => {
                    messages.push({...doc.data(), id: doc.id});
                });
                setMessages(messages);
            })
            return () => unsubscribe()
        });
    }, [])

    const getUserID = async () => {
        const response = await getUser();
        if(response?.response){
            const userID = response.response.id;
            const userName = response.response.username;
            let user: UserInterface = {username: userName, id: userID, email:""};
            return user.id;
        }
    }

    const sendMessage = async () => {
        const response = await getUser();
        if(response?.response && inputMessage.length != 0){
            const userID = response.response.id;
            const userName = response.response.username;
            await addDoc(collection(db, 'messages'), {
                text: inputMessage,
                name: userName,
                timestamps: serverTimestamp(),
                type: "client_r",
                userID
            })
            setInputMessage("");
        }
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <TopNavbar title="Chat history" username="Test">
                </TopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-2 py-2 dark:text-ad-golden">
                    <div className="flex flex-col gap-2 h-full w-full px-3 py-2 rounded bg-white drop-shadow dark:bg-admin-dark-background gap-1 overflow-auto">
                    {messages?.map((message: any, i: number) => (
                            <div key={i} className={(message.type == "client_r" ? "justify-end" : "") + " flex items-start w-full h-auto"}>
                                <div className="flex flex-col flex-wrap w-1/2 bg-[#EDEEF0] p-3 rounded-xl dark:bg-[#1E1E1E] bg-admin-grey-background hover:drop-shadow">
                                <span className="dark:text-ad-golden text-admin-button font-medium">{message.name}</span>
                                <span className="text-slate-700 dark:text-slate-200">{message.text}</span>
                                <span className="flex text-xs self-end opacity-60">{ message.timestamps ? getChatDate(message.timestamps) : ""}</span>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="flex items-center justify-between border-t p-1 border-gray-300 bg-white rounded-b dark:bg-[#2D2D2D] flex w-full h-3/12">
                        <input type="text" placeholder="Type a message" value={inputMessage} onChange={(e) => {setInputMessage(e.currentTarget.value)}} className="outline-none flex w-2/3 p-1 bg-admin-grey-background dark:bg-admin-dark-background dark:text-ad-golden text-black"></input>
                        <Button title="Send" onclickMethod={sendMessage} styling={"w-1/3"}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
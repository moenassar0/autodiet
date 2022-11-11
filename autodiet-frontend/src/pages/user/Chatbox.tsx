import { query, collection, onSnapshot, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../api/firebase"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { userNavbarLinks } from "../../types/consts"

export const Chatbox = () => {

    const [messages, setMessages] = useState([] as any);
    const [inputMessage, setInputMessage] = useState("");

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
            let messages: any = [];
            querySnapshot.forEach((doc: any) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        })
        return () => unsubscribe()
    }, [])

    const sendMessage = () => {
        
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test">
                </AdminTopNavbar>
                <div className="flex flex-col h-9/12 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-2 py-2 dark:text-ad-golden">
                    <div className="flex flex-col h-5/6 w-full px-3 py-2 rounded bg-white drop-shadow dark:bg-admin-dark-background gap-1">
                    {messages?.map((message: any, i: number) => (
                            <div key={i} className="flex w-full h-10">
                                <span className="rounded dark:bg-[#1E1E1E] bg-admin-grey-background p-1">{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between border-t p-1 border-gray-300 bg-white rounded-b dark:bg-[#2D2D2D] flex w-full h-3/12">
                        <input value={inputMessage} onChange={(e) => {setInputMessage(e.currentTarget.validationMessage)}} placeholder="Type a message" className="outline-none flex w-2/3 p-1 bg-admin-grey-background dark:bg-admin-dark-background text-gray-300"></input>
                        <Button title="Send" onclickMethod={sendMessage} styling={"w-1/3"}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
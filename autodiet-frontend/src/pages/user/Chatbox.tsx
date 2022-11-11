import { query, collection, onSnapshot, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../api/firebase"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { userNavbarLinks } from "../../types/consts"

export const Chatbox = () => {

    const [messages, setMessages] = useState([] as any);

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

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={userNavbarLinks}/>
            <div className="flex flex-col h-min-screen w-4/6 grow">
                <AdminTopNavbar title="Meals" username="Test">
                </AdminTopNavbar>
                <div className="flex flex-col h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-2 py-2 dark:text-ad-golden">
                    <div className="flex flex-col h-5/6 w-full px-3 py-2 rounded bg-[#2D2D2D] gap-1">
                    {messages?.map((message: any, i: number) => (
                            <div key={i} className="flex w-full h-10">
                                <span className="rounded bg-[#1E1E1E] p-1">{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white flex w-full h-1/5 rounded">
                        <input className=""></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
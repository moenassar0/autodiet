import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../api/firebase"
import { getUser } from "../../api/services/Users"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { userNavbarLinks } from "../../types/consts"
import { UserInterface } from "../../types/types"

export const Chatbox = () => {

    const [messages, setMessages] = useState([] as any);
    const [inputMessage, setInputMessage] = useState("");

    useEffect(() => {
        let userID: any = -1;
        getUserID().then((id) => {
            userID = id
            console.log(userID);
            const q = query(collection(db, 'messages'), where("userID", "==", userID),orderBy('timestamps'));
            const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
                let messages: any = [];
                querySnapshot.forEach((doc: any) => {
                    messages.push({...doc.data(), id: doc.id});
                });
                console.log(messages);
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
        if(response?.response){
            const userID = response.response.id;
            const userName = response.response.username;
            await addDoc(collection(db, 'messages'), {
                text: inputMessage,
                name: userName,
                timestamps: serverTimestamp(),
                type: "client_r",
                userID
            })
        }
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
                        <input type="text" placeholder="Type a message" value={inputMessage} onChange={(e) => {setInputMessage(e.currentTarget.value)}} className="outline-none flex w-2/3 p-1 bg-admin-grey-background dark:bg-admin-dark-background dark:text-ad-golden text-black"></input>
                        <Button title="Send" onclickMethod={sendMessage} styling={"w-1/3"}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
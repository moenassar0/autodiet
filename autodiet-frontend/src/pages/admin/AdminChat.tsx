import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, getDocs, where, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../api/firebase"
import { getUser } from "../../api/services/Users"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { ChatMessage } from "../../components/utility/ChatMessage"
import { getChatDate } from "../../HelperFunctions"
import { AdminBase } from "../../layouts/AdminBase"
import { adminNavbarLinks, userNavbarLinks } from "../../types/consts"
import { ChatMessageInterface } from "../../types/types"

export const AdminChat = () => {

    const [messages, setMessages] = useState([] as any);
    const [inputMessage, setInputMessage] = useState("");
    const [currentUserID, setCurrentUserID] = useState(-1);
    const [users, setUsers] = useState([] as any);
    const [active, setActive] = useState("");

    const styles = {
        usersDiv: "flex w-full h-16 hover:bg-[#E5F8F9] cursor-pointer p-1 items-center justify-start dark:hover:bg-admin-dark-sidenav",
    }

    useEffect(() => {
        fetchMessages();
        const q = query(collection(db, 'messages'), where("userID", "==", currentUserID), orderBy("timestamps"));
        const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
            let messages: any = [];
            querySnapshot.forEach((doc: any) => {
                messages.push({...doc.data(), id: doc.id});
            });
            console.log(messages);
            setMessages(messages);
        })
        return () => unsubscribe()
        /*const unsub = onSnapshot(doc(db, "messages", "text"), (doc) => {
            console.log("Current data: ", doc.data());
        });*/
    }, [currentUserID])

    //fetch messages sent to admin to find the users
    const fetchMessages = async () => {
        const q = query(collection(db, 'messages'), orderBy('timestamps'));
        const querySnapshot = await getDocs(q);
        let messages: Array<object> = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data()?.userID);
        });
        console.log(messages);
        let uniqueChars = messages.filter((element, index) => {
            return messages.indexOf(element) === index;
        });
        //set the unique ids found from the sent messages to users
        setUsers(uniqueChars);
    }

    const sendMessage = async () => {
        const response = await getUser();
        console.log(response);
        if(response?.response){
            const userID = response.response.id;
            const userName = response.response.username;
            await addDoc(collection(db, 'messages'), {
                text: inputMessage,
                name: userName,
                timestamps: serverTimestamp(),
                type: "admin_r",
                userID: currentUserID
            })
        }
    }

    return(
        <div className="flex h-screen w-full">
            <SideNavbar navbarlinks={adminNavbarLinks}/>
            <div className="w-4/6 sm:w-5/6 flex flex-col grow h-screen">
                <AdminTopNavbar title="Chat" username="Admin">
                </AdminTopNavbar>
                <div className="h-5/6 grow w-full bg-admin-grey-background dark:bg-[#1F1F1F] px-4 py-4">
                    <div className="flex w-full h-full ">
                        <div className="flex flex-wrap drop-shadow content-start h-full w-[175px] bg-white dark:bg-admin-dark-background dark:text-ad-golden rounded-md overflow-auto mr-2">
                            {
                                users ? users.map((user: any) => (
                                    <div onClick={() => {setCurrentUserID(user)}} key={user} className={(currentUserID == user ? "bg-[#E5F8F9] dark:bg-admin-dark-sidenav " : "") + styles.usersDiv}>
                                        <img className="w-8 h-8 rounded-full mr-1" src="../logo512.png"></img>
                                        <span className="font-medium">UserID: {user}</span>
                                    </div>
                                )) : ""
                            }
                        </div>
                        <div className="flex w-4/6 flex-col grow h-full">
                            <div className="flex flex-wrap w-full h-full gap-2 content-start overflow-auto rounded-md drop-shadow bg-white dark:bg-admin-dark-background px-2">
                                {
                                    messages ? messages.map((message: ChatMessageInterface, i: number) => (
                                        <ChatMessage key={i} message={message} admin={true}></ChatMessage>        
                                    )) : ""
                                }
                            </div>
                            <div className="flex items-center justify-between border-t p-1 border-gray-300 bg-white rounded-b dark:bg-[#2D2D2D] flex w-full h-3/12">
                                <input type="text" placeholder="Type a message" value={inputMessage} onChange={(e) => {setInputMessage(e.currentTarget.value)}} className="outline-none flex w-2/3 p-1 bg-admin-grey-background dark:bg-admin-dark-background dark:text-ad-golden text-black"></input>
                                <Button title="Send" onclickMethod={async () => {await sendMessage()}} styling={"w-1/3"}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}



    /*useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamps'));
        const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
            let messages: any = [];
            let users: any = [];
            querySnapshot.forEach((doc: any) => {
                messages.push({...doc.data(), id: doc.id});
                console.log(doc._document.data.value.mapValue.fields.userID);
            });
            console.log(messages);
            console.log(users);
            setMessages(messages);
        })
        return () => unsubscribe()
    }, [])*/
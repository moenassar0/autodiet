import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, getDocs, where, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../api/firebase"
import { getUser } from "../../api/services/Users"
import { AdminTopNavbar } from "../../components/admin/AdminTopNavbar"
import { SideNavbar } from "../../components/admin/SideNavbar"
import { Button } from "../../components/utility/Button"
import { AdminBase } from "../../layouts/AdminBase"
import { userNavbarLinks } from "../../types/consts"

export const AdminChat = () => {

    const [messages, setMessages] = useState([] as any);
    const [inputMessage, setInputMessage] = useState("");
    const [currentUserID, setCurrentUserID] = useState(-1);
    const [users, setUsers] = useState([] as any);


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

    const fetchMessages = async () => {
        
        const q = query(collection(db, 'messages'), orderBy('timestamps'));
        const querySnapshot = await getDocs(q);
        let messages: Array<object> = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            messages.push(doc.data()?.userID);
        });
        console.log(messages);
        let uniqueChars = messages.filter((element, index) => {
            return messages.indexOf(element) === index;
        });
        setUsers(uniqueChars);
        console.log(uniqueChars);
    }

    const fetchUsersMessages = async (id: number) => {
        setCurrentUserID(id);
        const q = query(collection(db, 'messages'), where("userID", "==", id), orderBy("timestamps"));
        const querySnapshot = await getDocs(q);
        let qMessages: Array<object> = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            qMessages.push(doc.data());
        });
        console.log(qMessages);
        setMessages(qMessages);
        /*
        const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
            let messages: any = [];
            querySnapshot.forEach((doc: any) => {
                messages.push({...doc.data(), id: doc.id});
            });
            console.log(messages);
            setMessages(messages);
        })
        return () => unsubscribe()
        */
    }

    return(
        <AdminBase navbarTitle="Chat Requests" navbarProps={<></>} >
            <div className="flex w-full h-full ">
                <div className="flex flex-wrap drop-shadow content-start h-full w-[300px] bg-white dark:bg-admin-dark-background dark:text-ad-golden rounded-md overflow-auto mr-2">
                    {
                        users ? users.map((user: any) => (
                            <div onClick={() => {setCurrentUserID(user)}} key={user} className="flex w-full h-16 hover:bg-[#E5F8F9] cursor-pointer p-1 items-center justify-start">
                                <img className="w-8 h-8 rounded-full mr-1" src="../logo512.png"></img>
                                <span className="font-medium">UserID: {user}</span>
                            </div>
                        )) : ""
                    }
                </div>
                <div className="flex w-4/6 flex-row grow h-full">
                    <div className="flex flex-wrap w-full h-5/6 gap-2 content-start overflow-auto rounded-md drop-shadow bg-white dark:bg-admin-dark-background px-2">
                        {
                            messages ? messages.map((message: any, i: number) => (
                                <div key={i} className="flex w-5/6 h-16 items-center">
                                    <img className="w-8 h-8 rounded-full mr-1" src="../logo512.png"></img>
                                    <div className="flex flex-col">
                                        {/*<span className="text-slate-300 text-sm">{new Date(message.timestamps.seconds * 1000).toLocaleDateString("en-US")}</span>*/}
                                        <span className="text-slate-300 text-sm">{message.timestamps.toDate().toISOString()}</span>
                                        <span className="flex bg-[#EDEEF0] p-3 rounded-xl">{message.text}</span>
                                    </div>
                                </div>
                                
                            )) : ""
                        }
                    </div>
                    <div className="flex w-full grow h-1/6">
                    
                    </div>
                </div>
            </div>
        </AdminBase>
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
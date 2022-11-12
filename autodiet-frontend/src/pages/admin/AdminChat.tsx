import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, getDocs, where } from "firebase/firestore"
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
    }, [])

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
        const q = query(collection(db, 'messages'), where("userID", "==", id));
        const querySnapshot = await getDocs(q);
        let messages: Array<object> = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            messages.push(doc.data()?.userID);
        });
        console.log(messages);
        setMessages(messages);
    }

    return(
        <AdminBase navbarTitle="Chat Requests" navbarProps={<></>} >
            <div className="flex w-full h-full ">
                <div className="flex flex-wrap drop-shadow content-start h-full w-[300px] bg-white dark:bg-admin-dark-background dark:text-ad-golden rounded-md overflow-auto mr-2">
                    {
                        users ? users.map((user: any) => (
                            <div onClick={() => {fetchUsersMessages(user)}} key={user} className="flex w-full h-16 hover:bg-[#E5F8F9] cursor-pointer p-1 items-center justify-start">
                                <img className="w-8 h-8 rounded-full mr-1" src="../logo512.png"></img>
                                <span className="font-medium">UserID: {user}</span>
                            </div>
                        )) : "asd"
                    }
                </div>
                <div className="flex w-4/6 grow h-full rounded-md drop-shadow bg-white dark:bg-admin-dark-background px-2">
                    <div className="flex w-full h-16 items-center">
                        <img className="w-8 h-8 rounded-full mr-1" src="../logo512.png"></img>
                        <span className="flex bg-[#EDEEF0] p-3 rounded-xl">Message testing testing, text lopsmon teruansdkjj asd gg</span>
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
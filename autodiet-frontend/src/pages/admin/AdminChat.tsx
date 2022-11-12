import { query, collection, onSnapshot, orderBy, addDoc, serverTimestamp, getDocs } from "firebase/firestore"
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
        
        console.log(uniqueChars);
    }
    return(
        <AdminBase navbarTitle="Chat Requests" navbarProps={<></>} >
            <div className="flex w-full h-full bg-black">

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
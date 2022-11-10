import React, { Dispatch, SetStateAction, useState } from "react"

interface NotificationContextProps {
    body: string,
    on: boolean,
    setBody:Dispatch<SetStateAction<string>>,
    setOn: Dispatch<SetStateAction<boolean>>
}

export const NotificationContext = React.createContext<NotificationContextProps>({
    body: '',
    on: false,

} as NotificationContextProps);



export const NotificationProvider: React.FC<{children: any}> = ({children}) => {
    const [body, setBody] = useState("");
    const [on, setOn] = useState(false);

    return(
        <NotificationContext.Provider value={{
            body: '',
            setBody,
            setOn,
            on: false,
        }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => React.useContext(NotificationContext);
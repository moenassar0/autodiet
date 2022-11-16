import React, { Dispatch, SetStateAction, useState } from "react"

interface UserContextProps {
    user: user
    setUser: Dispatch<SetStateAction<user>>
}

export type user = {username: "", email: ""};

export const UserContext = React.createContext<UserContextProps>({
    user:{
        username: "",
        email: "",
    }

} as UserContextProps);

export const UserProvider: React.FC<{children: any}> = ({children}) => {
    const [user, setUser] = useState<user>({username: "", email: ""});

    return(
        <UserContext.Provider value={{
            user: user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext);
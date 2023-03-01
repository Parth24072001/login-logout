import { createContext, useContext, useState } from "react";
export const UserContext = createContext(null)
export const UserProvider = ({ children }) => {


    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("")


    return <UserContext.Provider value={{ email, setEmail, userName, setUserName }}>{children}</UserContext.Provider>;
}
export const useUser = () => {
    return useContext(UserContext);
}
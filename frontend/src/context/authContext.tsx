import { PropsWithChildren, createContext, useContext, useState } from "react";
import Cookies from "js-cookie"


const AuthContext = createContext<{
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void,
    checkIfLoggedIn:() =>void
}>({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    checkIfLoggedIn:()=>{}
});

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }
    const checkIfLoggedIn = () =>{
        const tokenExitsts = !!Cookies.get('token');
        if(tokenExitsts) {
            login();
        }else {
            logout();
        }
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout,checkIfLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
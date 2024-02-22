import { PropsWithChildren, createContext, useContext, useState } from "react";


const AuthContext = createContext<{
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void
}>({
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
});

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
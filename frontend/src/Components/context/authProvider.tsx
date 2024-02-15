import React, { createContext, PropsWithChildren,useContext,useEffect,useState } from "react";
import Cookies from "js-cookie"
const AuthContext = createContext<{ 
    isLoggedIn: boolean,
     isAdmin: boolean, 
     isInDashboard: boolean,
     login:()=>void,
     logout:()=>void,
     setAdmin:()=>void,
     removeAdmin:()=>void,
     inDashboard:()=>void,
     outDashboard:()=>void,

    
 }>({
    isLoggedIn: false,
    isAdmin: false,
    isInDashboard: false,
    login :()=>{},
    logout:()=>{},
    setAdmin:()=>{},
    removeAdmin:()=>{},
    inDashboard:()=>{},
    outDashboard:()=>{}
});



export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [isAdmin,setIsAdmin] = useState<boolean>(false);
    const [isInDashboard ,setIsInDashboard]= useState<boolean>(false);

    useEffect(()=>{
        const tokenExists = !!Cookies.get("token");
        if (tokenExists) {
            setIsLoggedIn(true)
        }else {
            setIsLoggedIn(false);
        }
    })

    const login = () =>{
        setIsLoggedIn(true);
    }

    const logout = async() =>{
        const response = await fetch(import.meta.env.VITE_BACKEND_URI+"auth/logout");
        if(response.ok) {
            Cookies.remove("token")
            setIsLoggedIn(false)
        }
        
        if(!response.ok) {
            Cookies.remove("token")
            setIsLoggedIn(false)
        }
  
    }
    const setAdmin = () =>{
        setIsAdmin(true);
    }

    const removeAdmin = () =>{
        setIsAdmin(false)
    }
    const inDashboard = () =>{
        setIsInDashboard(true);
    }

    const outDashboard = () =>{
        setIsInDashboard(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, isInDashboard,login,logout,setAdmin,removeAdmin,inDashboard,outDashboard }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () =>{
    return useContext(AuthContext)
}
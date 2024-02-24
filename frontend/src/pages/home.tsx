import { useEffect, useState } from "react";
import Index from "./index"
import {Login} from "./login"
import { useAuth } from "../context/authContext";

export default function Home() {

    const {isLoggedIn} = useAuth();
    useEffect(()=>{
        console.log(isLoggedIn)
    })
    return (
        <>
            {isLoggedIn && <Index />}
            {!isLoggedIn && <Login/>}
        </>

    )
}
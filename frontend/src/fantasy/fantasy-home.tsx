import "./../styles/fantasy.css"
import { useAuth } from "../context/authContext";
import NewTeam from "./newteam";
import { Login } from "../pages/login";
import { useEffect } from "react";
import Cookies from "js-cookie"
import { useFantasy } from "../context/fantasyFunctions";
import {MyTeam} from "./myteam";


export default function FantasyHome() {
    const { isLoggedIn, login,checkIfLoggedIn } = useAuth();
    const { hasTeam, team, checkForTeam } = useFantasy();

    useEffect(() => {
        checkIfLoggedIn();
        checkForTeam();
        const tokenExists = !!Cookies.get('token');
        if (tokenExists) {
            login();
        }
    }, [isLoggedIn,hasTeam])

    return (
        <>
            {!isLoggedIn && <Login />}

            { isLoggedIn && !hasTeam ? (
                <NewTeam />) :
                isLoggedIn && hasTeam ? (
                    <MyTeam team={team}/>
                ):(<h3>No team</h3>)
            
        }

        </>
    )

}
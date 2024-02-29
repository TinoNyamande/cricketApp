import React, { PropsWithChildren, createContext, useContext, useState } from "react"
import { useAuth } from "./authContext";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

interface TokenPayload {
    id:string
}
interface PlayerDetails {
    fullName:string,
    playerType:string,
    team:string,
    price:number
}
const PlayerDetailsDefault = {
    fullName:"",
    playerType:"",
    team:"",
    price:0
}
interface Team  {
    teamName:string,
    transfers:Number,
    balance:Number,
    userId:string,
    firstPlayer:PlayerDetails,
    secondPlayer:PlayerDetails,
    thirdPlayer:PlayerDetails,
    fourthPlayer:PlayerDetails,
    fifthPlayer:PlayerDetails,
    sixthPlayer:PlayerDetails,
    seventhPlayer:PlayerDetails,
    eighthPlayer:PlayerDetails,
    ninthPlayer:PlayerDetails,
    tenthPlayer:PlayerDetails,
    elevenPlayer:PlayerDetails,
    twelvePlayer:PlayerDetails,
    thirteenPlayer:PlayerDetails,
    fourteenPlayer:PlayerDetails,
    fifteenPlayer:PlayerDetails,
    sixteenPlayer:PlayerDetails,
  }
  const DefaultTeam =  {
    teamName:"",
    transfers:0,
    balance:0,
    userId:"",
    firstPlayer:PlayerDetailsDefault,
    secondPlayer:PlayerDetailsDefault,
    thirdPlayer:PlayerDetailsDefault,
    fourthPlayer:PlayerDetailsDefault,
    fifthPlayer:PlayerDetailsDefault,
    sixthPlayer:PlayerDetailsDefault,
    seventhPlayer:PlayerDetailsDefault,
    eighthPlayer:PlayerDetailsDefault,
    ninthPlayer:PlayerDetailsDefault,
    tenthPlayer:PlayerDetailsDefault,
    elevenPlayer:PlayerDetailsDefault,
    twelvePlayer:PlayerDetailsDefault,
    thirteenPlayer:PlayerDetailsDefault,
    fourteenPlayer:PlayerDetailsDefault,
    fifteenPlayer:PlayerDetailsDefault,
    sixteenPlayer:PlayerDetailsDefault,
  }
const FantasyContext = createContext<{
    getTeamLogo:(team:string)=>string,
    getTeamShortName:(team:string)=>string,
    checkForTeam:()=>void,
    team:Team,
    hasTeam:boolean
    
}>({
    getTeamLogo:(team:string)=>"",
    getTeamShortName:(team:string)=>"",
    checkForTeam:()=>{},
    team:DefaultTeam,
    hasTeam:false
})

export const FantasyProvider:React.FC<PropsWithChildren<{}>> = ({children}) =>{
    const getTeamLogo =(team:string)=> {
        let imagePath = "";
        switch(team) {
            case "Chennai Super Kings":
                imagePath = "/CSK.png";
                break;
            case "Royal Challengers Bangalore":
                imagePath="/rcb.png";
                break;
            case "Punjab Kings" :
                imagePath ="/pbks.png";
                break;
            case "Dehli Capitals" :
                imagePath = "/DC.png";
                break;
            case "Kolkata Knight Riders" :
                imagePath ="/KKR.png";
                break;
            case "Sunrisers Hyderabad" :
                imagePath = "/SRH.png";
                break;
            case "Rajastan Royals" :
                imagePath = "/rr.png";
                break;
            case "Lucknow Super Giants" :
                imagePath = "/LSG.png";
                break;
            case "Gujarat Titans" :
                imagePath = "/GT.png";
                break;
            case "Mumbai Indians":
                imagePath = "/MI.png";
                break;
        }
        return imagePath;
    }
    const getTeamShortName=(team:string)=> {
        let shortName = "";
        switch(team) {
            case "Chennai Super Kings":
                shortName = "CSK";
                break;
            case "Royal Challengers Bangalore":
                shortName="RCB";
                break;
            case "Punjab Kings" :
                shortName ="PBKS";
                break;
            case "Dehli Capitals" :
                shortName = "DC";
                break;
            case "Kolkata Knight Riders" :
                shortName ="KKR";
                break;
            case "Sunrisers Hyderabad" :
                shortName = "SRH";
                break;
            case "Rajastan Royals" :
                shortName = "RR";
                break;
            case "Lucknow Super Giants" :
                shortName = "LSG";
                break;
            case "Gujarat Titans" :
                shortName = "GT";
                break;
            case "Mumbai Indians":
                shortName = "MI";
                break;
        }
        return shortName;
    }
   const [team,setTeam] = useState<{
        teamName:string,
        transfers:Number,
        balance:Number,
        userId:string,
        firstPlayer:PlayerDetails,
        secondPlayer:PlayerDetails,
        thirdPlayer:PlayerDetails,
        fourthPlayer:PlayerDetails,
        fifthPlayer:PlayerDetails,
        sixthPlayer:PlayerDetails,
        seventhPlayer:PlayerDetails,
        eighthPlayer:PlayerDetails,
        ninthPlayer:PlayerDetails,
        tenthPlayer:PlayerDetails,
        elevenPlayer:PlayerDetails,
        twelvePlayer:PlayerDetails,
        thirteenPlayer:PlayerDetails,
        fourteenPlayer:PlayerDetails,
        fifteenPlayer:PlayerDetails,
        sixteenPlayer:PlayerDetails,
      
   }>({
        teamName:"",
        transfers:0,
        balance:0,
        userId:"",
        firstPlayer:PlayerDetailsDefault,
        secondPlayer:PlayerDetailsDefault,
        thirdPlayer:PlayerDetailsDefault,
        fourthPlayer:PlayerDetailsDefault,
        fifthPlayer:PlayerDetailsDefault,
        sixthPlayer:PlayerDetailsDefault,
        seventhPlayer:PlayerDetailsDefault,
        eighthPlayer:PlayerDetailsDefault,
        ninthPlayer:PlayerDetailsDefault,
        tenthPlayer:PlayerDetailsDefault,
        elevenPlayer:PlayerDetailsDefault,
        twelvePlayer:PlayerDetailsDefault,
        thirteenPlayer:PlayerDetailsDefault,
        fourteenPlayer:PlayerDetailsDefault,
        fifteenPlayer:PlayerDetailsDefault,
        sixteenPlayer:PlayerDetailsDefault,
   });
   const [hasTeam,setHasTeam] = useState(false);
   const {isLoggedIn} = useAuth();

   const checkForTeam = async () =>{
    try {
        const token = Cookies.get('token');
        const decodedToken:TokenPayload = jwtDecode(token)
        const userId = decodedToken.id
            const response = await fetch(import.meta.env.VITE_BACKEND_URI + "playerteam/team/user/" + userId);
            if(!response.ok) {
                setHasTeam(false);
            }
            const json = await response.json();
            if(json.message== true) {
                setHasTeam(true);
                setTeam(json.data)
            }else {
                setHasTeam(false)
            }
            return json;
        
       
    }catch(error) {
        console.log("Not logged in")
        setHasTeam(false)
    }

   }

    return (
        <FantasyContext.Provider value={{getTeamLogo,getTeamShortName,team,hasTeam,checkForTeam}}>
            {children}
        </FantasyContext.Provider>
    )
}

export const useFantasy = () => useContext(FantasyContext)
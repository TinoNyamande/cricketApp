import React, { PropsWithChildren, createContext, useContext, useState } from "react";


interface Player {
    team: string,
    fullName: string,
    price: number,
    type: string,

}
const PlayerContext = createContext<{
    firstPlayer: Player,
    secondPlayer: Player,
    thirdPlayer: Player,
    fourthPlayer: Player,
    fifthPlayer: Player,
    sixthPlayer: Player,
    seventhPlayer: Player,
    eighthPlayer: Player,
    ninthPlayer: Player,
    tenthPlayer: Player,
    elevenPlayer: Player,
    twelvePlayer: Player,
    thirteenPlayer: Player,
    fourteenPlayer: Player,
    fifteenPlayer: Player,
    sixteenPlayer: Player,
    currentPlayer:number,
    numberOfPlayers:number,
    playerAddedEvent:()=>void,
    getTeamImage:(team:string)=>string,
    updateCurrentPlayer:(num:number)=>void,
    setPlayer: (player: Player, playerNumber: number) => void
}>({

    firstPlayer: { fullName: "", team: "", type: "", price: 0 },
    secondPlayer: { fullName: "", team: "", type: "", price: 0 },
    thirdPlayer: { fullName: "", team: "", type: "", price: 0 },
    fourthPlayer: { fullName: "", team: "", type: "", price: 0 },
    fifthPlayer: { fullName: "", team: "", type: "", price: 0 },
    sixthPlayer: { fullName: "", team: "", type: "", price: 0 },
    seventhPlayer: { fullName: "", team: "", type: "", price: 0 },
    eighthPlayer: { fullName: "", team: "", type: "", price: 0 },
    ninthPlayer: { fullName: "", team: "", type: "", price: 0 },
    tenthPlayer: { fullName: "", team: "", type: "", price: 0 },
    elevenPlayer: { fullName: "", team: "", type: "", price: 0 },
    twelvePlayer: { fullName: "", team: "", type: "", price: 0 },
    thirteenPlayer: { fullName: "", team: "", type: "", price: 0 },
    fourteenPlayer: { fullName: "", team: "", type: "", price: 0 },
    fifteenPlayer: { fullName: "", team: "", type: "", price: 0 },
    sixteenPlayer: { fullName: "", team: "", type: "", price: 0 },
    currentPlayer:0,
    numberOfPlayers:0,
    playerAddedEvent:()=>{},
    getTeamImage:(team:string)=>"",
    updateCurrentPlayer:(num)=>{},
    setPlayer: (player, playerNumber) => { },

})
export const SelectPlayerProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [firstPlayer, setFirstPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [secondPlayer, setSecondPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [thirdPlayer, setThirdPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [fourthPlayer, setFourthPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [fifthPlayer, setFifthPlyer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [sixthPlayer, setSixthPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [seventhPlayer, setSeventhPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [eighthPlayer, setEighthPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [ninthPlayer, setNinthPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [tenthPlayer, setTenthPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [elevenPlayer, setElevenPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [twelvePlayer, setTwelvePlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [thirteenPlayer, setThirteenPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [fourteenPlayer, setFourteenPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [fifteenPlayer, setFifteenPlayer] = useState({ fullName: "", team: "", type: "", price: 0 });
    const [sixteenPlayer, setSixteenPlayer] = useState({ fullName: "", team: "", type: "", price: 0 })
    const [currentPlayer,setCurrentPlayer] = useState(0);
    const[numberOfPlayers,setNumberOfPlayers] = useState(0);

    const updateCurrentPlayer = (num:number) =>{
        setCurrentPlayer(num)
    }
    const playerAddedEvent = () => setNumberOfPlayers((prevNumber)=>prevNumber+1);
    const getTeamImage = (team:string) =>{
        let imagePath:string = "";
        switch (team) {
            case  "Chennai Super Kings":
                imagePath = "/public/raw images/Chennai Super Kings CSK.jpg";
                break;
            case "Dehli Capitals":
                imagePath ="/public/raw images/Dehli Capitals.jpg";
                break;
            case "Gujarat Titans":
                imagePath = "/public/raw images/Gujarat Titans.jpg";
                break;
            case "Kolkata Knight Riders":
                imagePath = "/public/raw images/Kolkata Knight Riders KKR.jpg";
                break;
            case "Lucknow Super Giants":
                imagePath = "/public/raw images/Lucknow Super Giants.jpg";
                break;
            case "Mumbai Indians" :
                imagePath ="/public/raw images/Mumbai Indians .jpg";
                break;
            case "Punjab Kings":
                imagePath = "/public/raw images/Punjab Kings.jpg";
                break;
            case "Rajastan Royals" :
                imagePath = "/public/raw images/Rajastan Royals.jpg";
                break;
            case "Royal Challengers Bangalore":
                imagePath= "/public/raw images/Royal Challengers Bangalore.jpg";
                break;
            case "Sunrisers Hyderabad" :
                imagePath="/public/raw images/Sunrisers Hyderbad.jpg";
                break;
        }
        return imagePath;
    }
    const setPlayer= (player: Player, playerNumber: number)=> {
        switch (playerNumber) {
            case 1 :
                setFirstPlayer(player);
                playerAddedEvent();
                break;
            case 2 :
                setSecondPlayer(player);
                playerAddedEvent();
                break;
            case 3:
                setThirdPlayer(player);
                playerAddedEvent();
                break;
            case 4 :
                setFourthPlayer(player);
                playerAddedEvent();
                break;
            case 5:
                setFifthPlyer(player);
                playerAddedEvent();
                break;
            case 6:
                setSixthPlayer(player);
                playerAddedEvent();
                break;
            case 7:
                setSeventhPlayer(player);
                playerAddedEvent();
                break;
            case 8:
                setEighthPlayer(player);
                playerAddedEvent();
                break;
            case 9:
                setNinthPlayer(player);
                playerAddedEvent();
                break;
            case 10:
                setTenthPlayer(player);
                playerAddedEvent();
                break;
            case 11:
                setElevenPlayer(player);
                playerAddedEvent();
                break;
            case 12 :
                setTwelvePlayer(player);
                playerAddedEvent();
                break;
            case 13:
                setThirteenPlayer(player);
                playerAddedEvent();
                break;
            case 14:
                setFourteenPlayer(player);
                playerAddedEvent();
                break;
            case 15:
                setFifteenPlayer(player);
                playerAddedEvent();
                break;
            case 16:
                setSixteenPlayer(player);
                playerAddedEvent();break

        }
    }
    return (
        <PlayerContext.Provider value={{
            firstPlayer, secondPlayer, thirdPlayer, fourthPlayer,
            fifthPlayer, sixthPlayer, seventhPlayer, eighthPlayer,
            ninthPlayer, tenthPlayer, elevenPlayer, twelvePlayer,
            thirteenPlayer, fourteenPlayer, fifteenPlayer, sixteenPlayer,
            setPlayer,currentPlayer,updateCurrentPlayer,getTeamImage,numberOfPlayers,playerAddedEvent
        }}>
            {children}
        </PlayerContext.Provider>
    )

}
export const useSelectPlayer =() => useContext(PlayerContext);
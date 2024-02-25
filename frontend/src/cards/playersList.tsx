import { List, ListItem, Box, Typography, Divider ,Button} from "@mui/material"
import { useSelectPlayer } from "../context/selectedPlayer"
import { useQuery } from "react-query"
interface PlayersListProps {
    closeModal:()=>void
}

const playersList = [
    {
        name: "Virat Kohli",
        team: "Royal Challengers Bangalore",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Rohit Sharma",
        team: "Chennai Super Kings",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Shubmn Gill",
        team: "Dehli Capitals",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Jasprit Bumrah",
        team: "Gujarat Titans",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Pat Cummins",
        team: "Kolkata Knight Riders",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Mitchel Starc",
        team: "Lucknow Super Giants",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Glen Maxwell",
        team: "Mumbai Indians" ,
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Ravindra Jadeja",
        team: "Punjab Kings",
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Rishab Pant",
        team: "Rajastan Royals" ,
        price: 10,
        type: "Batsmen"
    },
    {
        name: "KL Rahul",
        team: "Sunrisers Hyderabad" ,
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Yashavi Jaiswal",
        team: "Sunrisers Hyderabad" ,
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Jos Butler",
        team: "Rajastan Royals", 
        price: 10,
        type: "Batsmen"
    },
    {
        name: "Mohammed Siraj",
        team: "Rajastan Royals" ,
        price: 10,
        type: "Batsmen"
    }
]
export const PlayersList:React.FC<PlayersListProps> = ({closeModal}) => {
    const {setPlayer,currentPlayer} = useSelectPlayer();
    const handleClick = (player:any,currentPlayer:number) =>{
        setPlayer(player,currentPlayer);
        closeModal();
    }
    const {data} = useQuery('batters',async()=>{
       const response = fetch(import.meta.env.VITE_BACKEND_URI+"players/getplayersbytype/Batsman")
    })


    return (
        <List sx={{ backgroundColor: "blue", color: "white", overflow: "auto", width: "70%",marginLeft:"auto",marginRight:"auto" }}>
            {playersList.map((player) => (
                <ListItem sx={{ justifyContent: "space-between",background:"lightBlue",margin:"1%",padding:"0%" }}>
                    <Button fullWidth sx={{justifyContent: "space-between",backgroundColor:"pink"}} 
                    onClick={()=>handleClick(player,currentPlayer)}
                    >
                     <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
                        <Box sx={{marginRight:"5%"}} >Mumbai Indians</Box>
                        <Box >{player.name}</Box>
                        <Box>{player.price}</Box>
                     </Box>
                    <Divider/>
                    </Button>
                </ListItem>
                
            ))}
        </List>
    )
}
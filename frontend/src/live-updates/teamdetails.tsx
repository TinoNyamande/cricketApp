import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import NewsMain from "./news-main";
import { Box, Typography,Divider } from "@mui/material"

interface Player {
    _id: string,
    fullName: string,
    price: number,
    points: number,
    team: string,
    playerType: string
}

export default function TeamDetails() {
    const { team } = useParams();
    const { isLoading, data, isError, error} = useQuery(["team",team], async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}players/getPlayersByTeam/${team}`)
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error("Error occured")
        }
        return response.json();
    })
 
    return (
        <>
            <NewsMain />
            <div className="row">
                <Typography sx={{textAlign:"center",fontSize:"1.5em",margin:"2%"}}>{team}</Typography>
                <Divider/>
                {Array.isArray(data?.data) ? (
                    data.data.map((player: Player) => (
                       <div style={{padding:"2%"}} key={player._id} className="col-sm-6">
                           <Typography><Link className="my-link" to="/">{player.fullName}</Link></Typography>
                           <Typography>{player.playerType}</Typography>
                       </div>
                        
                    ))
                ) :
                    (
                        <Box><Typography>
                            No data available
                        </Typography></Box>
                    )}
            </div>
        </>
    )
}
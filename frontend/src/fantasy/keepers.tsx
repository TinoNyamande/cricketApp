import { useQuery } from "react-query";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import { useSelectPlayer } from "../context/selectedPlayer"
import { useFantasy } from "../context/fantasyFunctions";

import { useRef, useState } from "react"; // Import useRef hook
interface PlayersListProps {
    closeModal: () => void
}

interface Player {
    _id: string,
    fullName: string,
    price: number,
    points: number,
    team: string,
    playerType: string
}
export const Keepers: React.FC<PlayersListProps> = ({ closeModal }) => {
    const { setPlayer, currentPlayer } = useSelectPlayer();
    const { getTeamLogo, getTeamShortName } = useFantasy();
    const [searchQuery, setSearchQuery] = useState("");
    const handleClick = (player: any, currentPlayer: number) => {
        setPlayer(player, currentPlayer);
        closeModal();
    };

    const { data } = useQuery("keepers", async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "players/getPlayersByType/Wicket Keeper");
        if (!response.ok) {
            console.log(response.statusText);
        }
        return response.json();
    });
    const filteredPlayers = data?.data.filter((player: Player) =>
        player.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div style={{ maxHeight: "100vh", marginBottom: "2%", overflowY: "auto", marginTop: '1%' }} ref={containerRef}>
            <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
                <Box>
                    <Button sx={{ backgroundColor: "lightgray" }} variant="outlined" fullWidth onClick={closeModal}>Close</Button>
                </Box>
                <Box sx={{marginTop:"1%",width:"50%",marginLeft:"auto",marginRight:"auto"}}>
                    <TextField
                    sx={{backgroundColor:"white",label:{color:"gray",textAlign:"center"}}}
                      fullWidth
                      size="small"
                        label="Search Player"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            type: 'search',
                        }}
                    />
                </Box>
            </div>
            <br />
            <Divider />
            <br />
            {Array.isArray(filteredPlayers) ? (
                filteredPlayers.map((player: Player) => (
                    <div key={player._id} style={{ display: "flex", alignItems: "center" }}>
                        <img style={{ width: "5%" }} src={getTeamLogo(player.team)} alt={player.team} />
                        <Typography sx={{ width: "25%", color: "white" }}>{getTeamShortName(player.team)}</Typography>
                        <Typography sx={{ width: "25%", color: "white" }}>{player.fullName}</Typography>
                        <Typography sx={{ width: "25%", color: "white" }}>{player.price}m</Typography>
                        <Button sx={{ backgroundColor: "lightgray", color: "black" }} onClick={() => handleClick(player, currentPlayer)}>Select</Button>
                    </div>
                ))
            ) : (
                <h2>No data</h2>
            )}
        </div>
    );
};

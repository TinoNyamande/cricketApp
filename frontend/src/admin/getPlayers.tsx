import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
interface Player {
    _id:string,
    fullName:string,
    price:number,
    points:number,
    team:string,
    playerType:string
}
export default function GetPlayers() {
    const { isLoading, data, isError, error } = useQuery('all-players', async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "players/allplayers");
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error('Network response was not ok.');
        }
    
        // We return the parsed JSON data from the response
        return response.json();
    });
    
    // At this point, `data` might still be undefined or null because the query might still be loading or might have failed
    // So, you should handle those cases
    
    if (isError) {
        return (
            <div>
                <h4>Error occurred</h4>
            </div>
        );
    }
    
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    
    // At this point, `data` should contain the parsed JSON data
    // Ensure `data` is an array before mapping over it
    // Also, remember to return the JSX from the map function
    return (
        <div className="container" style={{marginTop:"5%"}}>
            <Button sx={{backgroundColor:"blue"}} fullWidth ><Link to="/admin/addplayer">Add </Link></Button>
        <div className="row" style={{fontSize:"1.5em",fontWeight:"bold"}}>
            <div className="col-sm-3">Player name</div>
            <div className="col-sm-3">Team</div>
            <div className="col-sm-3">Type</div>
            <div className="col-sm-1">Price</div>
        </div>
            {Array.isArray(data.data) ? (
                data.data.map((player: Player) => (
                    <div className="row" key={player._id}>
                        <div className="col-sm-3">{player.fullName}</div>
                        <div className="col-sm-3">{player.team}</div>
                        <div className="col-sm-3">{player.playerType}</div>
                        <div className="col-sm-1">{player.price}m</div>
                        <div className="col-sm-1">Edit</div>
                        <div className="col-sm-1">Delete</div>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}

        </div>
    );
    
}
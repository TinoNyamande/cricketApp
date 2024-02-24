import { Autocomplete, Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom"

export default function AddPlayer() {
    const [inputs, setInputs] = useState<{ name: string, type: string | null, price: number, team: string | null }>({ name: "", type: "", price: 0, team: "" })
    const teams = ["Chennai Super Kings", "Dehli Capitals", "Gujarat Titans", "Kolkata Knight Riders",
        "Lucknow Super Giants", "Mumbai Indians", "Punjab Kings", "Rajastan Royals", "Royal Challengers Bangalore", "Sunrisers Hyderabad"];
    const types = ["Batsman", "Bowler", "All Rounder", "Wicket Keeper"];
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
    }
    const handleTypeDropdown = (event: React.ChangeEvent<{}>, value: string | null) => {
        setInputs((prevInputs) => ({ ...prevInputs, type: value }))
    }
    const handleTeamDropdown = (event: React.ChangeEvent<{}>, value: string | null) => {
        setInputs((prevInputs) => ({ ...prevInputs, team: value }));
    }
    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault();
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "players/player", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let json = await response.json();
        if(response.ok) {
            alert("Saved")
        }
        if(!response.ok) {
            console.log(json.error)
        }
    }


    return (
        <Box sx={{ margin: "5%" }}>
            <Box sx={{ margin: "2%" }}>
                <Typography sx={{ textAlign: "center" }}>Add Player Details</Typography>
            </Box>
            <Box sx={{ margin: "2%" }}>
                <TextField size="small" name="name" label="Player Name" fullWidth onChange={handleFormChange} />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <TextField size="small" type="number" name="price" label="Price" fullWidth onChange={handleFormChange} />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Autocomplete
                    onChange={(event, value) => handleTypeDropdown(event, value)}
                    size="small"
                    options={types}
                    renderInput={(params) => <TextField name="type" {...params} label="Type" />}
                />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Autocomplete
                    onChange={(event, value) => handleTeamDropdown(event, value)}
                    size="small"
                    options={teams}
                    renderInput={(params) => <TextField name="team" label="Team" {...params} />}
                />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Button fullWidth variant="outlined" onClick={handleSubmit}>Save</Button>
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Button fullWidth variant="outlined"><Link to="/admin/allplayers">Cancel</Link></Button>
            </Box>
        </Box>
    )
}
import { Autocomplete, Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom"

export default function AddMatch() {
    const [inputs, setInputs] = useState<{ 
        homeTeam: string|null, 
        awayTeam: string | null,
        venue: string, 
        kickoffTime: string,
        kickoffDate:Date,
        matchNumber:Number
      }
        >({ 
            homeTeam: "",
            awayTeam: "", 
            venue: "",
            kickoffTime:"", 
            kickoffDate:new Date(),
            matchNumber: 0 
        })
    const teams = ["Chennai Super Kings", "Dehli Capitals", "Gujarat Titans", "Kolkata Knight Riders",
        "Lucknow Super Giants", "Mumbai Indians", "Punjab Kings", "Rajastan Royals", "Royal Challengers Bangalore", "Sunrisers Hyderabad"];
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }))
    }
    // const handleTimeChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    //     const selectedTime = event.target.value;
    //     setInputs((prevInputs)=>({...prevInputs , kickoffTime:new Date('1970-01-01T' + selectedTime)}))
    // }
    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedTime = event.target.value;
        const [hours, minutes] = selectedTime.split(":");
        const currentTime = new Date();
        currentTime.setUTCHours(parseInt(hours, 10));
        currentTime.setUTCMinutes(parseInt(minutes, 10));
        setInputs((prevInputs) => ({ ...prevInputs, kickoffTime: currentTime.toISOString() }));
    }
    
    const handleHomeTeamDropdown = (event: React.ChangeEvent<{}>, value: string | null) => {
        setInputs((prevInputs) => ({ ...prevInputs, homeTeam: value }))
    }
    const handleAwayTeamDropdown = (event: React.ChangeEvent<{}>, value: string | null) => {
        setInputs((prevInputs) => ({ ...prevInputs, awayTeam: value }));
    }
    const handleSubmit = async(event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(inputs)
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "matches/match", {
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
                <Autocomplete
                    onChange={(event, value) => handleHomeTeamDropdown(event, value)}
                    size="small"
                    options={teams}
                    renderInput={(params) => <TextField name="homeTeam" label="Home Team" {...params} />}
                />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Autocomplete
                    onChange={(event, value) => handleAwayTeamDropdown(event, value)}
                    size="small"
                    options={teams}
                    renderInput={(params) => <TextField name="awayTeam" label="Away Team" {...params} />}
                />
            </Box>
            <Box sx={{ margin: "2%" }}>
            <Typography>Kick off Time</Typography>
                <TextField type="time"  size="small" name="kickoffTime"  fullWidth onChange={handleTimeChange} />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <Typography>Kick off Date</Typography>
                <TextField size="small" type="date" name="kickoffDate"  fullWidth onChange={handleFormChange} />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <TextField size="small" type="number" name="matchNumber" label="Match Number" fullWidth onChange={handleFormChange} />
            </Box>
            <Box sx={{ margin: "2%" }}>
                <TextField size="small"  name="venue" label="Venue" fullWidth onChange={handleFormChange} />
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
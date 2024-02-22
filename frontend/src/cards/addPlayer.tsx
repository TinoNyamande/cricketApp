import {  AddCircle } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
interface PlayerProps {
    playerColor:string;
}


export const AddPlayer:React.FC<PlayerProps> =({playerColor})=>{
    return (
        <Box>
            <AddCircle  sx={{padding:"10%",margin:"10%",color:playerColor,fontSize:"3em"}}/>
        </Box>
    )
}
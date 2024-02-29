import { Typography, Box } from "@mui/material";
interface PlayerProps {
    fullName:string,
    price:number,
    points:number,
    image:string,
    playerType:string
}
export const  Player:React.FC<PlayerProps>=({fullName,price,points,image,playerType}) =>{
    return (
        <Box>
            <Box
                component="img"
                sx={{
                    height:"10vh"
                }}
                src={image}
            />
            <Box>
                <Typography sx={{textAlign:"center",fontSize:"0.5em"}}>{fullName}</Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:"center",fontSize:"0.5em"}}>{price}m</Typography>
            </Box>
        </Box>

    )
}
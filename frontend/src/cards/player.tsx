import { Typography, Box } from "@mui/material";
interface PlayerProps {
    name:string,
    price:number,
    points:number,
    image:string,
    playerType:string
}
export const  Player:React.FC<PlayerProps>=({name,price,points,image,playerType}) =>{
    return (
        <Box>
            <Box
                component="img"
                sx={{
                    height: 60,
                    width: 50,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                src={image}
            />
            <Box>
                <Typography sx={{textAlign:"center",fontSize:"0.6em"}}>{name}</Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:"center",fontSize:"0.6em"}}>{price}m</Typography>
            </Box>
        </Box>

    )
}
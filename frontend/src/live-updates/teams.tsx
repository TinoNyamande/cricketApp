import NewsMain from "./news-main";
import { Box, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import "./../styles/news.css"

export default function Teams() {
    return (
        <>
            <NewsMain />
            <div className="container-row">
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Chennai Super Kings">Chennai Super Kings</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Dehli Capitals">Dehli Capitals</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Gujarat Titans">Gujarat Titans</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Kolkata Knight Riders">Kolkata Knight Riders</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Lucknow Super Giants">Lucknow Super Giants</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Mumbai Indians">Mumbai Indians</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Punjab Kings">Punjab Kings</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Rajastan Royals">Rajastan Royals</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Royal Challengers Bangalore">Royal Challengers Bangalore</Link></Typography>
                </Box>
                <Divider />
                <Box sx={{ textAlign: "center", padding: "1%" }}>
                    <Typography><Link className="my-link" to="/teams/Sunrisers Hyderabad">Sunrisers Hyderabad</Link></Typography>
                </Box>
                <Divider />
            </div>

        </>
    )
}
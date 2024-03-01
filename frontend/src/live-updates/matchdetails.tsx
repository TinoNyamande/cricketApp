import { useParams } from "react-router-dom"
import "./../styles/news.css"
import { Typography, Box, Button } from "@mui/material"
import moment from "moment"
import { useQuery } from "react-query"
import NewsMain from "./news-main"
import "bootstrap/dist/css/bootstrap.min.css"
interface Match {
    _id: string,
    homeTeam: string,
    awayTeam: string,
    kickoffTime: Date,
    kickoffDate: Date,
    venue: string,
    matchNumber: number
}
export default function MatchDetails() {
    const { id } = useParams();
    const { data, isError, isLoading } = useQuery(["matchdetails", id], async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}matches/match/${id}`);
        const json = await response.json();
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error(json.error)
        }
        // console.log(json)
        return json;

    })
    if (isLoading) {
        return <NewsMain />;
    }

    if (isError) {
        return (
            <div>
                <h3>Error occurred</h3>
            </div>
        );
    }
    const getLogo = (team: string) => {
        let imagePath = "";
        switch (team) {
            case "Chennai Super Kings":
                imagePath = "/CSK.png";
                break;
            case "Royal Challengers Bangalore":
                imagePath = "/rcb.png";
                break;
            case "Punjab Kings":
                imagePath = "/pbks.png";
                break;
            case "Dehli Capitals":
                imagePath = "/DC.png";
                break;
            case "Kolkata Knight Riders":
                imagePath = "/KKR.png";
                break;
            case "Sunrisers Hyderabad":
                imagePath = "/SRH.png";
                break;
            case "Rajastan Royals":
                imagePath = "/rr.png";
                break;
            case "Lucknow Super Giants":
                imagePath = "/LSG.png";
                break;
            case "Gujarat Titans":
                imagePath = "/GT.png";
                break;
            case "Mumbai Indians":
                imagePath = "/MI.png";
                break;
        }
        return imagePath;
    }

    return (
        <>
            <NewsMain />
            <div className="container-row">
                <div className="row">
                    <div className="col-sm-12 match-card" style={{ padding: "1%" }}>
                        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>Match {data.data.matchNumber} of 21</Typography>
                        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}><img src={getLogo(data.data.homeTeam)} />{data.data.homeTeam} vs {data.data.awayTeam} <img src={getLogo(data.data.awayTeam)} /> </Typography>
                        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}> {data.data.venue}</Typography>
                        <Typography sx={{ textAlign: "center" }}> {(moment(data.data.kickoffDate).format("DD MMM yyyy"))} -
                            {moment.utc(data.data.kickoffTime).format("HH:mm")}</Typography>

                    </div>
                </div>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"90%",marginLeft:"auto",marginRight:"auto"}}>
                        <div className="col-xs-4"><Button>Preview</Button></div>
                        <div className="col-xs-4"><Button>Squads</Button></div>
                        <div className="col-xs-4"><Button>News</Button></div>
                    </Box>
            </div>
        </>
    )
}
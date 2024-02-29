import NewsMain from "./news-main"
import "./../styles/news.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useQuery } from "react-query"
import { Typography } from "@mui/material"
// import {format} from "date-fns"
import moment from "moment"
import { useNavigate } from "react-router-dom"

interface Match {
    _id: string,
    homeTeam: string,
    awayTeam: string,
    kickoffTime: Date,
    kickoffDate: Date,
    venue: string,
    matchNumber: number
}
export default function NewsHome() {
     const navigate = useNavigate();
     const navigateToDetails = (id:string)=>{
        return navigate(`/match/${id}`)
     }
    const { data, isError } = useQuery("fixtures", async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "matches/match");
        const json = await response.json();
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error(json.error)
        }
       // console.log(json)
        return json;

    })
    if (isError) {
        return (
            <div>
                <h3>Error occurred</h3>
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                <h3>Loading...</h3>
            </div>

        )
    }
    const getLogo =(team:string)=> {
        let imagePath = "";
        switch(team) {
            case "Chennai Super Kings":
                imagePath = "/CSK.png";
                break;
            case "Royal Challengers Bangalore":
                imagePath="/rcb.png";
                break;
            case "Punjab Kings" :
                imagePath ="/pbks.png";
                break;
            case "Dehli Capitals" :
                imagePath = "/DC.png";
                break;
            case "Kolkata Knight Riders" :
                imagePath ="/KKR.png";
                break;
            case "Sunrisers Hyderabad" :
                imagePath = "/SRH.png";
                break;
            case "Rajastan Royals" :
                imagePath = "/rr.png";
                break;
            case "Lucknow Super Giants" :
                imagePath = "/LSG.png";
                break;
            case "Gujarat Titans" :
                imagePath = "/GT.png";
                break;
            case "Mumbai Indians":
                imagePath = "/MI.png";
                break;
        }
        return imagePath;
    }
    return (
        <div className="news-container">
            <NewsMain  />
            <div  className="row container-row">
                {data && Array.isArray(data.data) ? (
                    data.data?.map((match: Match) => (
                        <div onClick={()=>navigateToDetails(match._id)} key={match._id} className="col-sm-6 match-card" style={{padding:"1%"}}>
                            <Typography sx={{textAlign:"center",fontWeight:"bold"}}>Match {match.matchNumber} of 21</Typography>
                            <Typography sx={{textAlign:"center"}}><img src={getLogo(match.homeTeam)}/>{match.homeTeam} vs {match.awayTeam} <img src={getLogo(match.awayTeam)}/> </Typography>
                            <Typography sx={{textAlign:"center"}}> {(moment(match.kickoffDate).format("DD MMM yyyy"))} -
                             {moment.utc(match.kickoffTime).format("HH:mm")}</Typography>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

        </div>

    )
}
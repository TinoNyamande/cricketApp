import NewsMain from "./news-main"
import "./../styles/news.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useQuery } from "react-query"
import { Typography } from "@mui/material"
import {format} from "date-fns"

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

    const { data, isError } = useQuery("fixtures", async () => {
        const response = await fetch(import.meta.env.VITE_BACKEND_URI + "matches/match");
        const json = await response.json();
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error(json.error)
        }
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
    return (
        <>
            <NewsMain />
            <div className="row">
                {data && Array.isArray(data.data) ? (
                    data.data?.map((match: Match) => (
                        <div key={match._id} className="col-sm-6 match-card" style={{padding:"1%"}}>
                            <Typography sx={{textAlign:"center",fontWeight:"bold"}}>Match {match.matchNumber} of 21</Typography>
                            <Typography sx={{textAlign:"center"}}>{match.homeTeam} vs {match.awayTeam}</Typography>
                            <Typography sx={{textAlign:"center"}}> {(format(match.kickoffDate,"dd MMM yyyy"))} -
                             {format(match.kickoffTime,"HH:SS")}</Typography>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

        </>

    )
}
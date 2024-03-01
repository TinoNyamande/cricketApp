import { Link } from "react-router-dom"
import "./../styles/fantasy.css"
export default function FantasyMain () {
    return (
        <div className="fantasy-main">
            <div className="fantasy-container">
                 <div className="fantasy-row">
                    <div className="fantasy-col"><Link className="my-link" to="/fantasyteam">My Team</Link></div>
                    <div className="fantasy-col"><Link className="my-link" to="/">Points</Link></div>
                    <div className="fantasy-col"><Link className="my-link" to="/">Transfers</Link></div>
                 </div>
            </div>
        </div>
    )
}
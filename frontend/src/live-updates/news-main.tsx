import "./../styles/news.css"
import { Link } from "react-router-dom"
export default function NewsMain () {
    return (
        <div>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col"><Link to="/" className="my-link">Matches</Link></div>
                    <div className="my-col"><Link to="/stats" className="my-link">Stats</Link></div>
                    <div className="my-col"><Link to="/teams" className="my-link">Teams</Link></div>
                    <div className="my-col"><Link to="/" className="my-link">News</Link></div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
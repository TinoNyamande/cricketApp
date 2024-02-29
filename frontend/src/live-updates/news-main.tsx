import "./../styles/news.css"
import { Link } from "react-router-dom"
export default function NewsMain () {
    return (
        <div className="NewsMain">
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col"><Link to="/" className="my-link">Fixtures</Link></div>
                    <div className="my-col"><Link to="/" className="my-link">Results</Link></div>
                    <div className="my-col"><Link to="/stats" className="my-link">Stats</Link></div>
                    <div className="my-col"><Link to="/teams" className="my-link">Teams</Link></div>
                    <div className="my-col"><Link to="/" className="my-link">News</Link></div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
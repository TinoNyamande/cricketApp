import { useState } from "react"
import Ground from "../cards/ground"

export default function Index() {
    const [haveTeam,sethaveTeam] = useState(false)
    return (
        <>
        {!haveTeam && <Ground/>}
        </>
    )
}
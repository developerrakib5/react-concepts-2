import { useState } from "react"

export default function Team (){
    const [team, setTeam] = useState(11)

    const handleJoin = () =>{
        const totalJoin = team+1;
        setTeam(totalJoin)
    }

    const handleRemove = () =>{
        const removeTotal = team -1;
        setTeam(removeTotal)
    }
    const teamStyle = {
        border : '2px solid purple',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button onClick={handleJoin}>Join</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
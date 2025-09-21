import { useState } from "react";

function Likes(){

    const [numberOfLikes, setnumberOfLikes] = useState(0);

    return (
        <div className = "center">
        <button onClick = {() => setnumberOfLikes(numberOfLikes + 1)}>❤️</button>
        <p>{numberOfLikes} people love you.</p>
        <button onClick = {() => setnumberOfLikes(0)}>I Don't Care!</button>
        </div>
    )
}

export default Likes;
import { useState } from "react";




function Toggle(){
    const [visibility, setVisibility] = useState(false);

    return (
    <div className = "center">
        <button onClick = {() => setVisibility(!visibility)}>Veil/Unveil</button>
        {visibility && <p>The Secret...shhhh.....</p>}
    </div>
    )
}

export default Toggle;
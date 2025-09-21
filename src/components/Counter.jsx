import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <p>Your number  count is.....</p>
            <button onClick ={() => setCount(count + )}>Add!</button>
            <h2>{count}</h2>
        </>
    )
}

export default Counter;
import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Your number  count is.....</p>
            <button onClick ={() => setCount(count + 1)}>Add!</button>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter;
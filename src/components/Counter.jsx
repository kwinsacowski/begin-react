import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);
    
    return (
        <div className="center">
            <p>Your number  count is.....</p>
            <button onClick ={() => setCount(count + 1)}>Click Me!</button>
            <h2>{count}</h2>
            <button onClick ={() => setCount(count - 2)}>DANGER!!!!</button>
        </div>
    );
}

export default Counter;
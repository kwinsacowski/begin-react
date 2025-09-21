import { useState} from "react";

function Form () {
    const [inputText, setinputText] = useState ("");

    return (
        <>
        <input type="text"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}/>
        <p>You typed: {inputText}</p>
        </>
    )
}

export default Form
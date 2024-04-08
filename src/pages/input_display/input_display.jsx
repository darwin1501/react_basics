import { useState } from "react"

export default function InputDisplay(){
    const [text, setText] = useState("");

    return(
        <div>
            <input onInput={(e)=>setText(e.target.value)}/>
            <h1>Lowercase: {text.toLowerCase()}</h1>
            <h1>Upppercase: {text.toUpperCase()}</h1>
        </div>
    )
}
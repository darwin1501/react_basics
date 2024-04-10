import { useState } from "react"

export default function InputDisplay(){
    const [text, setText] = useState("");
    function handleChange(e){
        setText(e.target.value)
    }
// fix the code:
    return(
        <div>
            <input
            type="text"
            value={text} 
            onChange={handleChange}
            />
            <h1>
                {text}
            </h1>
        </div>
    )
}
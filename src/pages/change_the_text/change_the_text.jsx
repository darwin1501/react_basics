import { useState } from "react"

export default function ChangeTheText(){
    //    const [text, setText] = useState("");
    const [text, setText] = useState("Hello World");

// Activity
    // create a state
    // with an initial value of "Hello World"
    // name the state variable as "text"
    // name the state setter as "setText"
    // show the state inside <h1>

    return(
        <div>
            <h1>{text}</h1>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <button onClick={() => setText("Hello")}>
                Hello
            </button>
            <button onClick={() => setText("World")}>
                World
            </button>
        </div>
    )
}
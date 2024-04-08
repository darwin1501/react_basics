import { useState } from "react"
import "./style.css"
export default function JavaScriptEvents(){
    const [text, setText] = useState("")

    function changeText(e){
        const value = e.target.value;
        setText(value)
    }

    return(<div>
        <h1>{text}</h1>
        <button onClick={()=>{
            console.log("click")
        }}>click</button>
        <input onInput={changeText}/>
        
        <textarea onInput={()=>{
            console.log("text area")
        }}></textarea>
        <h1 onClick={()=>{
            console.log("h1 was clicked")
        }}>
            Im not a button
        </h1>
        <div
        className="mouse-over-container" 
        onMouseOver={()=>{
            console.log("mouse over")
        }}>
        </div>
    </div>)
}
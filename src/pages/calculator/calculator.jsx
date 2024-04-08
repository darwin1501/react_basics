import { useState } from "react"
import "./calculator.css"

export default function Calculator(){
    const [calcValue, setCalcValue] = useState("");     

    function evaluate(){
        const calculate = Function('return ' +  calcValue)();
        setCalcValue(calculate)
    }

    return(
        <div>
            <button onClick={()=>{
                    setCalcValue(calcValue + "+");
            }}>Add</button>
            <button onClick={evaluate}>=</button>
            <div className="calculator-display">{calcValue}</div>
            <div className="calculator-container">
               <button className="number-btn"
                onClick={()=>{
                    setCalcValue(calcValue + "1")
                }}
               >1</button>
               <button className="number-btn"
                onClick={()=>{
                    setCalcValue(calcValue + "2")
                }}
               >2</button>
               <button className="number-btn"
               onClick={()=>{
                    setCalcValue(calcValue + "3")
                }}
                >3</button>
            </div>
        </div>
    )
}
import { useState } from "react"
import "./counter.css"

export default function Counter(){
    const [counterValue, setCounterValue] = useState(0)
    return(
        <div>
            <h1>Counter value:{counterValue}</h1>
            <div className="counter-btn">
                <button onClick={()=>{
                    if(counterValue > 0){
                        setCounterValue(counterValue - 1)
                    }
                }}>-</button>
                <button onClick={()=>setCounterValue(counterValue + 1)}>+</button>
            </div>
        </div>
    )
}
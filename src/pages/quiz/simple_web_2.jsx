import { useState } from "react"

export default function SimpleWeb_2(){
    const [isOn, setIsOn] = useState(false)
    return(
        <div>
            
            <h1 onClick={() => setIsOn(!isOn)}>
                {isOn === true ? "On" : "Off"}
            
            </h1>
        </div>
    )
}
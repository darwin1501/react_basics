import { useState } from "react"

export default function ComplexStateArray(){
    const [fruits, setFruits] = useState(["Mango ", "Apple "])
    // const fruits = ["Mango ", "Apple "]
    return(
        <div>
            <button onClick={()=>{
                // fruits.push("Bannana")
                // ...fruits
                setFruits((prev)=> ([...prev, "Bannana"]));
            }}>Add Bannana
            </button>
            <button
                onClick={() =>{
                    setFruits(function(prev){
                        return [...prev, "Orange"]
                    })
                }}
            >
                Add Orange
            </button>
            <h1>fruits: {fruits}</h1>
        </div>
    )
}
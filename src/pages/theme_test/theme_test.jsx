import { useState } from "react";
import "./style.css";

export default function Themetest(){
    const [isDarkMode, setIsDarkMode] = useState(true)

    return(
        <div className="theme-container" 
        style={{background: isDarkMode ? "black" : "white"}}>
            <div>
                <h1 style={{color: isDarkMode ? "white" : "black"}}>React js with Vite</h1>
                <button onClick={()=>{
                    setIsDarkMode(!isDarkMode)
                }}>Dark mode {isDarkMode ? "off" : "on"}</button>
            </div>
        </div>
    )
}
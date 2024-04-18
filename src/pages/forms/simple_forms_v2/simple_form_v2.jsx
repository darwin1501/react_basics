import { useState } from "react"

export default function SimpleFormsV2(){
    // state text
    const [text, setText] = useState();
    const [fruits, setFruits] = useState();
    const [choice, setChoice] = useState("yes");
    const [remember, setRemember] = useState(true);

    return(
        <div>
            <h1>React Forms</h1>
            <h1>Text: {text}</h1>
            <h1>Fruits: {fruits}</h1>
            <h1>Remember: {remember ? "True" : "False"}</h1>
            <input value={text} onChange={(event) => setText(event.target.value)}/>
            <br></br>
            <br></br>
            <select value={fruits} onChange={(event) => setFruits(event.target.value)}>
                <option value="Apple">Apple</option>
                <option value="Bannana">Bannana</option>
                <option value="Mango">Mango</option>
            </select>
            <br></br>
            <br></br>
            {/* radio button */}
            <label htmlFor="yes">Yes</label>
            <input name="yes" type="radio"
                value="yes"
                onChange={(event)=>setChoice(event.target.value)}
                checked={choice === "yes"}
                />
            <label htmlFor="no">No</label>
            <input name="no" type="radio"
                value="no"
                onChange={(event)=>setChoice(event.target.value)}
                checked={choice === "no"}
                />
                {/* checkbox */}
            <br></br>
            <label htmlFor="remember">Remember me</label>
            <input 
                value={remember}
                name="remember" type="checkbox"
                onChange={()=>setRemember(!remember)}
            />
        </div>
    )
}
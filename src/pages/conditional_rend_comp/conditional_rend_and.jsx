import { useState } from "react"

export default function RenderAnd(){
    const [isShown, setIsShown] = useState(false)
    return(<p>
        {isShown && <p></p>}
    </p>)
}
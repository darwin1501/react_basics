import { useState } from "react"

export default function ConditionalOperator(){
    const [isPremium, setIsPremium] = useState(true);
/**
 * How to make ternary operator: 
 * 
 * condition ? "value when true" : "value when false"
 * 
 * types of condition:
 * ===
 * >=
 * <=
 */
    // function checkMembership(){
    //     // if(isPremium){
    //     //     return "20%"
    //     // }else{
    //     //     return "10%"
    //     // }
    //     return 

    // }

    return(
        <div>
            <h1>Discount: {isPremium ? "20%" : "10%"}</h1>
            <button onClick={() => setIsPremium(true)}>Premium</button>
            <button onClick={() => setIsPremium(false)}>Basic</button>
        </div>
    )
}

// assignment

// export default function ConditionalOperator(){
//     const [isPremium, setIsPremium] = useState(true)
// /**
//  * 
//  */
//     return(
//         <div>
//             <h1>Discount: {isPremium ? "20%" : "10%"}</h1>
//             <button onClick={()=>setIsPremium(true)}>Premuim</button>
//             <button onClick={()=>setIsPremium(false)}>Basic</button>
//         </div>
//     )
// }
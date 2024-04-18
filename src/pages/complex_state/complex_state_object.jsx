import { useState } from "react";

export default function ComplexStateObject(){
    const [contactInfo, setContactInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890'
      });
    return(
        <div>
            <h1>Firstname: {contactInfo.firstName}</h1>
            <h1>Lastname: {contactInfo.lastName}</h1>
            <input onChange={(e)=>setContactInfo(() => ({firstName: e.target.value}))}/>
        </div>
    )
}
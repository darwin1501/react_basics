import { useEffect } from "react";
import { useState } from "react"
import CatCard from "./cat_card";
export default function CatInfo(){
    const [catName, setCatName] = useState("a");
    const [catList, setCatList] = useState([]);
    const catCardList = catList.map((data)=>{
      return (
        <CatCard key={data.name} catInfo={data}/>
      )
    })

    useEffect(()=>{
        async function getCat() {
            const apiKey = 'ZxyQw5Rs4vOXaXlFH9opiw==GAbxzTkQTgVAjuZb';
            const url = `https://api.api-ninjas.com/v1/cats?name=${catName}`
          
            try {
              const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'X-Api-Key': apiKey,
                  'Content-Type': 'application/json'
                }
              });
          
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              const result = await response.json();

              setCatList(result)
            } catch (error) {
              console.error('Error:', error);
            }
        }
        getCat();
    },[catName])

    return(
        <div className="cat-container">
          <label>Search Cat name</label>
          <br />
          <input className="search-box" type="text" onChange={(e)=>{
            setCatName(e.target.value)
          }}/>
          <div className="card-container">
            {
              catList.length > 0 ?
              catCardList :
              <p>no data to show</p>
            }
          </div>
        </div>
    )
}
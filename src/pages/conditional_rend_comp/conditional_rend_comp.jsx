import { useState } from 'react'

const RenderFruit = () => {
  const [showDetails, setDetails] = useState(false)

  function FruitDetails () {
    return (
      <p>
        Mangoes, often called the king of fruits belong to the same family as
        poison ivy and cashews, and are native to South Asia.
      </p>
    )
  }
/**
 * if(condition){
 *  ..some code to run
 * }else{
 * 
 * }
 * 
 * &&
 * 
 */
  return (
    <div>
      <button onClick={() => setDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? <FruitDetails /> : <p>Mango</p>}
    </div>
  )
}

export default RenderFruit

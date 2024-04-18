import { useState } from 'react'

export default function SimpleForms () {
  // create a name state
  const [name, setName] = useState()
  const [fruit, setFruit] = useState()
  const [choice, setChoice] = useState('no')
  const [remember, setRemember] = useState(false);
  const [comments, setComments] = useState("");
  // connect the name state at input element
  // create a function that modify state at input element
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Fruit:{fruit}</h1>
      <h1>Choice:{choice}</h1>
      <h1>{remember ? "True":"False"}</h1>
      <h1>Comments:{comments}</h1>
      <input onChange={e => setName(e.target.value)} value={name} />
      <select onChange={e => setFruit(e.target.value)}>
        <option value='Apple'>Apple</option>
        <option value='Bannana'>Bannana</option>
        <option value='Mango'>Mango</option>
      </select>
      <br></br>
      <label htmlFor='yes'>Yes</label>
      <input
        name='yes'
        type='radio'
        value='yes'
        onChange={e => setChoice(e.target.value)}
        checked={choice === 'yes'}
      />

      <label htmlFor='no'>No</label>
      <input
        name='no'
        type='radio'
        value='no'
        onChange={e => setChoice(e.target.value)}
        checked={choice === 'no'}
      />
      <br></br>
      <br></br>
      <input name='remember' type='checkbox' value={remember} 
      onChange={()=>setRemember(!remember)}/>
      <label htmlFor='remember'>Remenber me</label>
      <br></br>
      <br></br>
      <textarea placeholder='write comment'
      onChange={(e)=>setComments(e.target.value)}>
      </textarea>
    </div>
  )
}

import './App.css'
import ProductList from './pages/product/product_list/Product_list'
import Card from './components/Card'
/**
 * 
 * 
  JavaScript Arrays
  Rendering Arrays
  JavaScript Array methods

  Props
  Destructuring Props
  Array Map
  Key prop
  Arrow function 
 * 
 */
  // const number = [1, 2, 3]
  const newNumber = number.map(function(value){
    return <Card key={value} number={value} />
  })

  const props = {
          number: 1
      }
  // const fruits = ["apple","mango", "banana"];
  // const myFruits = fruits.map(function(fruit){
  //     return <h1 key={fruit}>{"I love" + fruit}</h1>;
  // })
  

function App() {

  return (
    <div className = 'card-container'>
     {props.number}
    </div>

  )
}

export default App

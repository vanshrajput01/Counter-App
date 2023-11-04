import './App.css'
import { useState } from 'react'



function App() {
  let  [counter,setcounter] = useState(10)
  
  let inc = () => {
      setcounter(counter + 1)


    
  }

  let dec = () => {
    if(counter > 0){
      setcounter(counter - 1)
    }
    else{
      setcounter(counter)
    }
    
  }


  return (
    <div className='counter-container'>
    <h1>counter App</h1>
    <p >counter : <span>{counter}</span></p>
    <button className = "btn" onClick= {inc}>Increment</button>
    <button className = "btn" onClick= {dec}>Decrement</button>
    

    </div>
  )
}

export default App

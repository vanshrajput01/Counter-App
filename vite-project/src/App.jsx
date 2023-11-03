
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
    <>
    <h1>counter App</h1>
    <p>counter : {counter}</p>
    <button onClick= {inc}>inc</button>
    <button onClick= {dec}>dec</button>
    

    </>
  )
}

export default App

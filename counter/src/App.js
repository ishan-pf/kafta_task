import React, { useState } from "react";
  
import "./App.css";
  
const App = () => {
  
  const [counter, setCounter] = useState(0)
  

  const incrementhandler = () => {
 
    setCounter(counter + 1)
  }
  

  const decrementhandler = () => {
    
    setCounter(counter - 1)
  }
  
  return (
    <div className="app">
    <button className="btn-1"
          onClick={decrementhandler}>-</button>
      {<div className="counter" style={{color: counter < 5 ? 'red' : counter > 100 ? 'green' : ''}} >
      {counter}
      </div>}
      <button className="btn-2"
          onClick={incrementhandler}>+</button>
      
    </div>
  )
}
  
export default App

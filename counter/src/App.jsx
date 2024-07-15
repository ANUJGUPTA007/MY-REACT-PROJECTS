import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  name="Anuj"
  let [counter,setcounter]=useState(0)
  const addvalue=()=>{
    if (counter<20){
      setcounter(counter+1) // "setcounter" return a call back so we can use that for backtracking the prev value    setcounter returns  ()=>{}
    }
  }
  const remvalue=()=>{
    if (counter>0){
    setcounter(counter-1)
    }
  }
  return (
    <>
      <h1 className='color'>Welcome, {name}</h1>
      <h3 className='color2'>You can Increase Or Decrease Value of Counter</h3>
      <h2>Counter = {counter}</h2>
      <button onClick={addvalue}>Increase value</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={remvalue}>Decrease value</button>
    
    </>
  )
}

export default App

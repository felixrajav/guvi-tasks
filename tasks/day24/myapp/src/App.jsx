import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index'

function App() {
  const [count, setCount] = useState(0)
  const handleClick=()=>{
     setCount(count+1)
  }
  return (
    <>
     <h1>Component Life Cycle</h1>
     <p>count{count}</p>
     <button onClick={handleClick}>Show me</button>
     {count > 5 ? <Index/>: <div>Index component Remove!!!</div>}
    </>
  )
}

export default App

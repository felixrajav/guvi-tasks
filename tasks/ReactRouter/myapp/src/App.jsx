import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contect from './Contect'
import Service from './Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contect" element={<Contect/>}/>
       <Route path="/servise" element={<Service/>}/>
      </Routes>
    </>
  )
}

export default App
import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Cart from './Cart'
import About from './About'
import NavBar from './NavBar'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

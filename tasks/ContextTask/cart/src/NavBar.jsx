import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav'>
        <h3>Shoping App</h3>
        <div className="menus">
         <Link to='/'>home</Link>
         <Link to='/about'>About</Link>
         <Link to='/cart'>Cart 🛒</Link>
        </div>
    </div>
  )
}

export default NavBar
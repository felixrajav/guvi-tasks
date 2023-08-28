import React, { useState } from 'react'
import{Link} from 'react-router-dom'
import "./Navbar.css/"
import { NavLink } from 'react-router-dom'
function Navbar() {
    const[menuOpen, setMenuOpen]=useState(false)
  return (
    <nav>
        <Link to='/' className='title'>website</Link>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to="/servise">servise</NavLink></li>
            <li><NavLink to="contect">contect</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className='link'>Home</Link>
        <Link to="/About" className='link'>About</Link>
        <Link to="/Services" className='link'>Services</Link>
        <Link to="/Contact" className='link'>Contact</Link>
        <Link to="/Login" className='link'>Login</Link>

    </nav>
  )
}

export default Navbar
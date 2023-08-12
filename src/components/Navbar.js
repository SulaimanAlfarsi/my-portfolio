import React, { useState } from 'react'
import "./NavbarStyle.css"
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import sulaiman from "../Images/sulaiman1.png"





const Navbar = () => {


    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY>= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
        <h1><img src={sulaiman} alt='su' style={{width:100}}/></h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/" className='nav-link des'>Home</Link>
            </li>
            <li>
                <Link to="/login" className='nav-link des'>Login</Link>
            </li>
            <li>
                <Link to="/register" className='nav-link des'>Sign Up </Link>
            </li>
            <li>
                <Link to="/admin" className='nav-link des'>Admin</Link>
            </li>
            <li>
                <Link to="/project" className='nav-link des'>Project</Link>
            </li>
            <li>
                <Link to="/about" className='nav-link des'>About</Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link des'>Contact</Link>
            </li>
            
            <li className="dropdown">
          <a href="#dropdown" className='nav-link des'>Games</a>
          <div className="dropdown-content">
          <Link to="/tacgame" className='nav-link '>Tic Tac Toe</Link>
          <Link to="/Candycrush" className='nav-link '>Candy Crush</Link>
          </div>
          </li>
        <li className='nav-link'>
      
        </li>
            
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
           
           
        </div>
    </div>
  )
}

export default Navbar;
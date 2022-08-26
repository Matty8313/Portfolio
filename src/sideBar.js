import React from 'react';
import "./sideBar.scss";
import { Link } from 'react-router-dom';
import Logoo from "./Logo.png"
import { useState, useEffect } from 'react';



export default function SideBar() {
  const [navToggle, setNavToggle] = useState(false);
  const toggleMenu =()=>{
    setNavToggle(!navToggle)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  })
  return (
    <header id="header">
        <nav>
        <Link to="/Logo"></Link>
          {(navToggle || screenWidth > 500) && (
            <ul className="list">
                <Link to="/Portfolio"><li className="item" onClick={toggleMenu}>Main</li></Link>
                <Link to="/About"><li className="item" onClick={toggleMenu}>About</li></Link>
                <Link to="/Skills"><li className="item" onClick={toggleMenu}>Skills</li></Link>
                <Link to="/Projects"><li className="item" onClick={toggleMenu}>Projects</li></Link>
                
            </ul>)}
            <button id="btn-x" onClick={toggleMenu}>Menu</button>
        </nav>
    </header>
  )
}

//<img src={Logoo} id="Logo2"/>
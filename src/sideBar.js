import React from 'react';
import "./sideBar.scss";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function SideBar() {
  const [navToggle, setNavToggle] = useState(false);
  const toggleMenu =()=>{
    setNavToggle(!navToggle)
    if(navToggle === true){
      document.getElementById('btn-x').innerText = "Menu"
      document.getElementById('btn-x').style.color = 'black'
    }
    else{
      document.getElementById('btn-x').innerText = "Back"
      document.getElementById('btn-x').style.color = '#01fe87'
    }
    
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
  })
  return (<>
    <header id="header">

        <nav id='menu-menu'>
        <Link to="/Logo"></Link>
          {(navToggle || screenWidth > 500) && (
            <ul className="list">
                <Link to="/Portfolio"><li className="item" id="sidebar1" onClick={toggleMenu}>Main</li></Link>
                <Link to="/About"><li className="item" id="sidebar2" onClick={toggleMenu}>About</li></Link>
                <Link to="/Skills"><li className="item" id="sidebar3" onClick={toggleMenu}>Skills</li></Link>
                <Link to="/Projects"><li className="item" id="sidebar4" onClick={toggleMenu}>Projects</li></Link>
                <Link to="/Contact"><li className="item" id="sidebar5" onClick={toggleMenu}>Contact</li></Link>
                
            </ul>)}
            <button id="btn-x" onClick={toggleMenu}>Menu</button>
        </nav>
    </header></>
  )
}

//<img src={Logoo} id="Logo2"/>
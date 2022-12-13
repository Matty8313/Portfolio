import React from 'react'
import "./language.scss"
import { useLocation } from 'react-router-dom'

const text1 = 'siema'


export default function Language() {
        let x;
        const location = useLocation()
         //location.pathname will give you current route path 
        console.log(location);
      
  
    function changeLanguage(){
      
        if(location === "/Portfolio"){
        document.getElementById('kloc-1').innerText = text1
        document.getElementById('kloc-2').innerText = text1
        document.getElementById('kloc-3').innerText = text1
        document.getElementById('kloc-4').innerText = text1
        document.getElementById('sidebar1').innerText = text1
        document.getElementById('sidebar2').innerText = text1
        document.getElementById('sidebar3').innerText = text1
        document.getElementById('sidebar4').innerText = text1
        document.getElementById('sidebar5').innerText = text1
        }
    else if(location === "/About"){
        document.getElementById('txt').innerText = text1
        document.getElementById('kloc-5').innerText = text1
        document.getElementById('kloc-6').innerText = text1
        document.getElementById('kloc-7').innerText = text1
        
          }
    }
    
    function changeLanguage2(){
        console.log('english')
    }
  return (
    <div id="bar-btn">
        <button id='btn-pol' onClick={changeLanguage}>POL</button>
        <button id='btn-eng' onClick={changeLanguage2}>ENG</button>
    </div>
  )
}


import React, { useEffect } from 'react';
import Klocreverse from './Klocreverse';
import "./KlocR.scss";
import Portfolio from "./Portfolio";





export default function Logo() {
  let x = window.innerWidth
  useEffect(()=>{
    if(x >= 502){
    document.getElementById('sidebar1').style.backgroundColor = '#8f20db'
    document.getElementById('sidebar3').style.backgroundColor = ''
    document.getElementById('sidebar2').style.backgroundColor = ''
    document.getElementById('sidebar4').style.backgroundColor = ''
    document.getElementById('sidebar5').style.backgroundColor = ''
    }
  })

  return (
    <div>
        
        <Portfolio/>
        <div id="Skills">
          <article id='kloc-4'>The site was created by me to show my skills and projects to those interested in cooperation.</article>
        </div>
        <div id="upper-margin">
        <Klocreverse id="upper-margin "link="/About" idName1="kloc-1" txt="I am a management student. I graduated with a degree in Finance and Accounting while I was not programming." about="About"
                link2="/Skills" nameName1="h111" nameName2="h222" nameName3="h333" txt2=" 
                I am interested in websites. But in my opinion, wordpress does not offer as much possibilities and efficiency as dedicated websites. That's why I got interested in writing pages from scratch. And so far my favorite are SPA sites, because they give a lot of satisfaction" 
                about2="Skills" idName2="kloc-2" idName3="kloc-3"
                link3="/Projects" txt3="I already have several website designs and a mobile application that I use myself. MPlanner, which is used to schedule the week and saves memory in LocalStorage. I ran this web solution through androidStudio and I use it on my phone" about3="Projects"
                />
        </div>
                
    </div>
  )
}

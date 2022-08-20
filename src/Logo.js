import React from 'react';
import Klocreverse from './Klocreverse';
import "./KlocR.scss";
import Portfolio from "./Portfolio";



export default function Logo() {

  return (
    <div >

        <Portfolio/>
        <div id="upper-margin">
        <Klocreverse id="upper-margin "link="/About"txt="Until September, I am a student of finance and economics because I have to defend my BA thesis. I am an amateur programmer, because I like it very much that it gives many opportunities to create interesting and useful things for people" about="About"
                link2="/Skills" txt2="
                I am interested in websites. But in my opinion, wordpress does not offer as much possibilities and efficiency as dedicated websites. That's why I got interested in writing pages from scratch. And so far my favorite are SPA sites, because they give a lot of satisfaction" 
                about2="Skills"
                link3="/Projects" txt3="I already have several website designs and a mobile application that I use myself. MPlanner, which is used to schedule the week and saves memory in LocalStorage. I ran this web solution through androidStudio and I use it on my phone" about3="Projects"
                />
        </div>
                
    </div>
  )
}

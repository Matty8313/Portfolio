import React from 'react'
import "./About.scss"
import Portfolio from "./Portfolio";
import Klocreverse2 from './Klocreverse2';
import { useEffect } from 'react';
import photo1a from './Me.png'
import photo2a from './mission.png'
import photo3a from './Noise.png'

export default function About(props) {
    let number = 0
    let x = window.innerWidth
    useEffect(()=>{
      if(x >= 502){
      document.getElementById('sidebar2').style.backgroundColor = '#8f20db'
      document.getElementById('sidebar1').style.backgroundColor = ''
      document.getElementById('sidebar3').style.backgroundColor = ''
      document.getElementById('sidebar4').style.backgroundColor = ''
      document.getElementById('sidebar5').style.backgroundColor = ''
      }
    })
    
  setInterval(function(){
    number = number + 1
    let text = "My name is Mateusz Płocica and I am a student of finance and accounting. I started my programming adventure 2 years ago"
    let textCut = text.slice(0,number + 1)
    let writebox = document.getElementById("writeBox")
    if(writebox !== null){
    writebox.innerText = textCut + "_"
    }
    else if (number === text.length || writebox === null){
      clearInterval()
    }

    
   });
   
  return (
    <>
    <Portfolio/>
    <div className="container-2">
      <div id="wrap-Box">
        <div  id="writeBox" >
        </div>
        <div  id="writeBox3" ><article id="txt">It started with creating my own website for wordpress because I wanted to create a blog about SEO</article></div>
      </div>
    </div>
    <div className="container-2" id="container-2-a">
      <div id="wrap-Box">
        <div  id="writeBox-a" >
          <div id="komp">.</div>
          <div id="kom2">.</div>
        </div>
        <div  id="writeBox3" ><article id="txt"></article></div>
      </div>
    </div>
    <div className="container-3">
    </div>
      <Klocreverse2 id="upper-margin "link="/About"txt="My name is Mateusz Płocica, I am 23 years old. I graduated in finance and accounting. I am able to help you in programming pages in React Js using HTML, CSS and Js, which I do anyway in my free time. I ran a blog about SEO called seo.kasade.pl, which I created on wordpress, but I liked writing code more than articles about SEO, but thanks to that I gained basic knowledge about SEO, so I am able to help you write search engine friendly sites." 
        about="About Me" img1={photo1a} idName1="kloc-5" idName2="kloc-6" idName3="kloc-7"
          link2="/Skills" txt2="My mission is to support Polish micro and small enterprises, contributing to the economic development of Poland and improving prosperity. I want to help entrepreneurs create added value in Poland through my solutions and automation of tasks. Including yours." 
        about2="Mission" img2={photo2a}
          link3="/Projects" txt3="I like marketing books, especially Claude Hopkin's, which focuses mainly on the needs of consumers and customers, and not necessarily product features. I would like to use the AdWords system someday and learn it well to create more website traffic." 
        about3="Marketing" img3={photo3a} hid1="kloc-8" hid2="kloc-9" hid3="kloc-10"
                />
    </>
    
  )
}

/* 
<div id="body2">
    <div classNameName="circleAbout" id="CircleMain">My name is Mateusz Płocica and I am a student of finance and accounting. I started my programming adventure 2 years ago</div>
    <div className="circleAbout" id="Circle2">It started with creating my own website for wordpress because I wanted to create a blog about SEO</div>
    <div className="circleAbout" id="Circle3">My girlfriend pointed out that I spend more time styling the page than writing articles</div>
    <div className="circleAbout" id="Circle4">I thought about it and found that writing code was more interesting to me after all</div>
    <div className="circleAbout" id="Circle5">And so I started to learn programming more seriously</div>
    <div id="BackCircle"><p></p></div>
    <div id="BackCircle-violet"><p></p></div>
    <div id="BackCircle-orange"><p></p></div>
    </div>

*/
import React from 'react'
import { useEffect } from 'react'
import Portfolio from './Portfolio'
import './Contact.scss'
import photo1a from './Me.png'

export default function Contact() {
  let x = window.innerWidth
  useEffect(()=>{
    if(x >= 502){
    document.getElementById('sidebar5').style.backgroundColor = '#8f20db'
    document.getElementById('sidebar1').style.backgroundColor = ''
    document.getElementById('sidebar3').style.backgroundColor = ''
    document.getElementById('sidebar2').style.backgroundColor = ''
    document.getElementById('sidebar4').style.backgroundColor = ''
     }
  })
  return (<>
    <Portfolio/>
    <div id="contact-panel">
      <img src={photo1a} id="me-icon" width='60px'/>
      <div className="Box-contact" id='concon1'>Phone:</div>
      <div className="Box-info-1" ><p id="SMS">If I don't answer, please send me SMS</p> 111 111 111</div>
      <div className="Box-contact">e-mail:</div>
      <div className="Box-info-1" id='concon3'> 11111ji@onet.pl</div>
    </div>
    </>
  )
}

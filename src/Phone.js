import React from 'react'
import Mp4 from './movie123.mp4'

export default function Phone() {
    function starting() {
        document.getElementById('myweek').play()
    }
  return (
    <div id="allPhone">
        <div id="upPhone"></div>
        <div id="screenPhone">
            <video onMouseOver={starting} id="myweek" width="100%" height="auto" preload="auto">
            <source src={Mp4} type="video/mp4" />
            Your browser does not support HTML5 video.
            </video>
        </div>
        <div id="downPhone"></div>
    </div>
  )
}

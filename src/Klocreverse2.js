import React from 'react'
import "./KlocR2.scss"


export default function Klocreverse(props) {
  return (
    <div className="container" id="cont-2">
    <div className="row">
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.hid1} >{props.about}</h2><img src={props.img1} className="img-mission"/>
       <p className="content-2" id={props.idName1}>{props.txt} </p>
      </div>
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.hid2}>{props.about2}</h2><img src={props.img2} className="img-mission"/>
       <p className="content-2" id={props.idName2}>{props.txt2} </p>
      </div>
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.hid3}>{props.about3}</h2><img src={props.img3} className="img-mission"/>
       <p className="content-2" id={props.idName3}>{props.txt3} </p>
      </div>
      
    </div>
    </div>
  )
}

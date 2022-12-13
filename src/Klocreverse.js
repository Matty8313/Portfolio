import React from 'react'
import "./KlocR.scss"
import Photo from "./circle.png"
import { Link } from 'react-router-dom'

export default function Klocreverse(props) {
  return (
    <div className="container" id="cont-2">
    <div className="row">
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.nameName1}>{props.about}</h2>
       <p className="content-2" id={props.idName1}>{props.txt} </p>
       <Link to={props.link}>
          <button className="btn-2-n" id="btn-more-1">
              more
          </button>
       </Link>
      </div>
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.nameName2}>{props.about2}</h2>
       <p className="content-2" id={props.idName2}>{props.txt2} </p>
       <Link to={props.link2}>
          <button className="btn-2-n" id="btn-more-2">
              more
          </button>
       </Link>
      </div>
      <div className="col-sm-12 col-md-4" id="left-lego">
      <h2 id={props.nameName3}>{props.about3}</h2>
       <p className="content-2" id={props.idName3}>{props.txt3} </p>
       <Link to={props.link3}>
          <button className="btn-2-n" id="btn-more-3">
              more
          </button>
       </Link>
      </div>
      
    </div>
    </div>
  )
}

import React from 'react'
import "./KlocR.scss"
import Photo from "./circle.png"
import { Link } from 'react-router-dom'

export default function Klocreverse(props) {
  return (
    <div class="container" id="cont-2">
    <div class="row">
      <div class="col-sm-12 col-md-4" id="left-lego">
      <h2 >{props.about}</h2>
       <p id="content-2">{props.txt} </p>
       <Link to={props.link}>
          <button class="btn-2-n">
              more
          </button>
       </Link>
      </div>
      <div class="col-sm-12 col-md-4" id="left-lego">
      <h2 >{props.about2}</h2>
       <p id="content-2">{props.txt2} </p>
       <Link to={props.link2}>
          <button class="btn-2-n">
              more
          </button>
       </Link>
      </div>
      <div class="col-sm-12 col-md-4" id="left-lego">
      <h2 >{props.about3}</h2>
       <p id="content-2">{props.txt3} </p>
       <Link to={props.link3}>
          <button class="btn-2-n">
              more
          </button>
       </Link>
      </div>
      
    </div>
    </div>
  )
}

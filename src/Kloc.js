import React from 'react';
import "./Kloc.scss";
import Photo from "./circle.png";
import { Link } from 'react-router-dom';


export default function Kloc(props) {
  return (
    <div class="container" id="contt-1">
  <div class="row">
 
    <div class="col-sm col-md-4" id="right-lego">
      <div class="to-left">
      <h2 >{props.about}</h2>
       
      <p id="content-2">{props.txt} </p>
      <Link to={props.link}>
        <button class="btn-2">more</button>
      </Link>
      </div>
    </div>
  </div>
</div>
  )
}

import React from 'react'
import './SkillCircle.scss'

export default function SkillCircle(props) {
  return (
    <div>
        <div id={props.fuel}></div>
        <div id={props.fuel2}></div>
        <div id={props.fuel3}></div>
        <div id={props.fuel4}></div>
        <div id={props.fuel5}></div>
    </div>
  )
}

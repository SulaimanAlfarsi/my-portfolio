import "./Cards.css"
import React from 'react'

import { Link } from "react-router-dom"


const Cards = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image1"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <Link to="" className="btn">{props.view}</Link>
            
        </div>
    </div>
</div>
  )
}

export default Cards
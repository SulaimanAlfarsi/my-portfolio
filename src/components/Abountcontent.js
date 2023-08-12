import { Link } from "react-router-dom"
import "./Aboutcontent.css"

import pic3 from "../Images/react3.jpg"
import pic4 from "../Images/react7.jpg"

import React from 'react'

const Abountcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end and backend developer. I create responsive secure website for my studies and experience. </p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pic3} alt="ima" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={pic4} alt="ima" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Abountcontent
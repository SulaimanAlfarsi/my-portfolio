import React from 'react'
import "./Footer.css"

import{FaHome,FaPhone,FaMailBulk, FaLinkedin,FaWhatsapp,FaTwitter,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "white",marginRight: "2rem"}} />
                    <div>
                        <p>Muscat.</p>
                        <p>Oman.</p>
                    </div>
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color: "white",marginRight: "2rem"}} />
                +968 92004175</h4><br></br>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: "white",marginRight: "2rem"}} />
                sulaimanalfarsi26@gmail.com</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About me</h4>
                <p>Welcome to my website! My name is Sulaiman, and I am a student pursuing my passion in Information Technology and Software Engineering at the University of Technology and Applied Sciences. Currently, I am currently in the advanced diploma program, where I am constantly expanding my knowledge and skills in different areas of IT field. Join me on this exciting journey as I explore the world of technology and strive for excellence.”</p>
                <div className='social'>
                <FaFacebook size={20} style={{color: "white",marginRight: "1rem"}} />
                <FaWhatsapp size={20} style={{color: "white",marginRight: "1rem"}} />
                <FaTwitter size={20} style={{color: "white",marginRight: "1rem"}} />
                <FaLinkedin size={20} style={{color: "white",marginRight: "1rem"}} />
                </div>
            </div>
            <div className='copy'><h4>© Copyright by Suliman Alfarsi - All rights reserved</h4></div>
        </div>
    </div>
  )
}

export default Footer
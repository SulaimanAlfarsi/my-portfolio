import React from 'react'
import "./Image.css"
import back from "../Images/Background.mp4"
import { Link } from 'react-router-dom'

const Image = () => {
  return (
    <div className='hero'>
        
        <div className='mask'>
            <video autoPlay loop muted id='video'>
              <source src={back} type='video/mp4' />
            </video>
        </div>
        <div className='content'>
            <p>Hi, I am A Software developer</p>
            <h1>Html, CSS, JavaScript, React</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>

        </div>

    </div>
  )
}

export default Image
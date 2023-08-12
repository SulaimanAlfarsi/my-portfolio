import React from 'react'
import video from "../Images/alkhatab-sulaiman-numan.mp4"
import "./Video.css"
import Navbar from '../components/Navbar';

const Video = () => {
  return (
    <>
    <Navbar/>
    <div>
    <br/> <br/> <br/> <br/><br/> <br/>
        </div>
    <div className='main'>
        <video src={video} autoPlay loop muted/>
    </div>
    </>
  )
}

export default Video
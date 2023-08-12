import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Image2 from '../components/Image2'
import Abountcontent from '../components/Abountcontent'

const About = () => {
  return (
    <div>
        <Navbar />
        <Image2 heading="ABOUT." text="I am Front-End and Back-End Developer"/>
        <Abountcontent />
        <Footer/>
    </div>
  )
}

export default About
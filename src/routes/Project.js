import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Image2 from '../components/Image2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
        <Navbar />
        <Image2 heading="PROJECTS." text="Some of my works" />
        <Work/>
        <Footer/>
    </div>
  )
}

export default Project

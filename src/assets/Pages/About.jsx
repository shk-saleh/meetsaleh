import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import AboutData from '../Components/AboutData'
import CTA from '../Components/CTA'



const About = () => {
  return (
    <div className='font-body flex flex-col min-h-[100vh] pt-4'>
        <AboutData/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default About
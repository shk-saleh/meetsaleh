import React from 'react'
import Header from '../Components/Header'
import Scrollers from '../Components/Scrollers'
import CTA from '../Components/CTA'
import Footer from '../Components/Footer'
import Services from '../Components/Services'
import InteractiveBackground from '../Components/InteractiveBackground'
import Hero from '../Components/Hero'
import ProjectSlider from '../Components/ProjectSlider'


const Home = () => {
  return (
    <div>
        <Header/>
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" fill="#ffffff" filter="url(#noise)" />
        </svg>
        <Hero/>
        {/* <Scrollers/> */}
        <ProjectSlider/>
        <Services/>
        <CTA/>
        <Footer/> 
        <InteractiveBackground />
    </div>
  )
}

export default Home
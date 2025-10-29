import React from 'react'
import Footer from '../Components/Footer'
import CTA from '../Components/CTA'
import ProjectData from '../Components/ProjectData'

const Project = () => {
  return (
    <div className='font-body flex flex-col w-[100%] min-h-[100vh] pt-4 overflow-hidden'>
        <ProjectData/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Project
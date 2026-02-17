import React from 'react'
import CircularGallery from './ReactBits/CircularGallery'

const ProjectSlider = () => {
  return (
    <div style={{ height: '550px', position: 'relative' }}>
      <div className='absolute w-full bg-gradient-to-r from-black via-0% to-black'></div>
      <CircularGallery bend={-3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={1}/>
    </div>
  )
}

export default ProjectSlider
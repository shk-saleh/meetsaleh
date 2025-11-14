import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const ProjectCard = ({id, slug, type, projectName, projectThumb}) => {

  return (
    <div className='relative bg-gradient-to-b from-(--body-color) to-(--fade-color)/90 border border-zinc-800 pt-4 ps-4 pe-4 md:p-6 pb-1 rounded-xl cursor-pointer'>
        <span className='text-xs md:text-sm text-gray-500 font-light'>{type}</span>
        <h2 className='text-xl md:text-2xl mb-1 md:mb-6'>{projectName}</h2>
        <div className='masked'>
            <img src={projectThumb} />
        </div>
        <Link to={`/projects/${slug}`}>
          <MoveUpRight className='absolute bottom-6 md:bottom-8 hover:rotate-90 transition-all duration-300 right-4 md:right-6 cursor-pointer w-14 h-14 md:w-24 md:h-24 text-2xl bg-black rounded-full p-4 md:p-6 text-gray-200'/>
        </Link>
    </div>
  )
}

export default ProjectCard
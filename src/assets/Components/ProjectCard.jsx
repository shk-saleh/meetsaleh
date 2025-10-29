import React from 'react'
import { MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const ProjectCard = ({id, slug, type, projectName, projectThumb}) => {

  return (
    <div className='relative bg-gradient-to-b  from-(--body-color) to-(--fade-color)/70 border border-(--fade-color) p-6 pb-1 rounded-xl'>
        <span className='text-sm font-light'>{type}</span>
        <h2 className='text-2xl my-2'>{projectName}</h2>
        <div className='masked'>
            <img src={projectThumb} />
        </div>
        <Link to={`/projects/${slug}`}>
          <MoveUpRight className='absolute bottom-7 hover:rotate-90 transition-all duration-300 right-6 cursor-pointer w-24 h-24 text-2xl bg-black rounded-full p-6 text-gray-200'/>
        </Link>
    </div>
  )
}

export default ProjectCard
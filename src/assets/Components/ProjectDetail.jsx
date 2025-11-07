import React, {useEffect, useState} from 'react'
import { ChevronLeft, X } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { designProjects, devProjects } from '../utils/data'

const ProjectDetail = () => {

  const {slug} = useParams();
  const navigate = useNavigate();
  const [project, setproject] = useState({});

  useEffect(() => {
    
    const allProjects = [...designProjects, ...devProjects];

    const foundProject = allProjects.find(proj => proj.slug === slug);

    if(foundProject){
      setproject(foundProject);
    }

    window.scrollTo(0, 0);

    // Fetch project data based on slug
  }, [slug])
  

  return (
      <div className='px-40 py-20 h-full'>
        
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Link to='/projects'> <ChevronLeft className='bg-white/10 p-2 w-10 h-10 cursor-pointer rounded-full text-white' /></Link>
            <div>
              <span className='text-sm font-light text-gray-400'>{project.type}</span>
              <h2 className='text-4xl font-semibold mb-6'>{project.projectName}</h2>
            </div>
          </div>
          <Link to='/' className='mb-8 text-sm font-light bg-white/10 font-xl px-8 py-2 rounded-xl transition-all duration-300 cursor-pointer text-gray-400 hover:text-gray-200'>
             View 
          </Link>
        </div>

        <div className='w-full h-[500px] rounded-2xl mt-8 mb-8 overflow-hidden'>
          <img 
            src={project.projectThumb} 
            className='w-full h-auto object-center' 
            alt={project.projectName}
          />
        </div>
        
        <p className='text-md leading-relaxed font-light'>{project.projectDesc}</p>
      </div>
  )
}

export default ProjectDetail
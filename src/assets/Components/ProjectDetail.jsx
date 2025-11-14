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
      <div className='px-6 md:px-40 py-10 md:py-20 h-full'>
        
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Link to='/projects'> <ChevronLeft className='bg-white/10 p-2 w-10 h-10 cursor-pointer rounded-full text-white' /></Link>
            <div>
              <span className='text-xs md:text-sm font-light text-gray-400'>{project.type}</span>
              <h2 className='text-xl md:text-3xl font-medium'>{project.projectName}</h2>
            </div>
          </div>
          <Link to='/' className='text-sm font-light bg-white/10 font-xl px-6 md:px-8 py-2 rounded-xl transition-all duration-300 cursor-pointer text-gray-400 hover:text-gray-200'>
             View 
          </Link>
        </div>

        <div className='w-full h:[200px] md:h-[550px] rounded-2xl mt-8 mb-8 overflow-hidden'>
          <img 
            src={project.projectThumb} 
            className='w-full h-auto object-center' 
            alt={project.projectName}
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-wrap gap-2'>
            {project?.tag?.map((t, i) => (
              <span
                key={i}
                className="bg-[var(--fade-color)] border border-gray-600 rounded-3xl text-xs md:text-sm px-4 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          <p className='text-md leading-relaxed font-light text-zinc-400'>{project.projectDesc}</p>
          <div>
            <h3 className='text-2xl mb-2'>Project Detail</h3>
            <p className='text-md leading-relaxed font-light text-zinc-400' dangerouslySetInnerHTML={{ __html: project.features }}></p>
          </div>
          <div>
            <h3 className='text-2xl mb-2'>Design Process</h3>
            <p className='text-md leading-relaxed font-light text-zinc-400' dangerouslySetInnerHTML={{ __html: project.process }}></p>
          </div>
          <div>
            <h3 className='text-2xl mb-2'>Outcomes</h3>
            <p className='text-md leading-relaxed font-light text-zinc-400'>{project.outcomes}</p>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetail
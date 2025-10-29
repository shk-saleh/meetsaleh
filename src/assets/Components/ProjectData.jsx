import React, {useState, useEffect} from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import { designProjects, devProjects } from '../utils/data'


const ProjectData = () => {

  return (
    <section className="max-w-6xl mx-auto text-gray-200 py-18">
        <div className="border-b border-[var(--fade-color)]">
            <h2 className="text-4xl font-medium mb-10">
            <span className="text-[var(--secondary-color)]">— </span>
                Projects 
            </h2>
            <div className="tabs tabs-box justify-end bg-transparent mt-6 shadow-none">
                <input type="radio" name="my_tabs_1" className="tab is-tab-checked" aria-label="Designing" defaultChecked />
                <div className="tab-content bg-transparent border-none p-4 shadow-none">  
                  <div className='grid grid-cols-2 gap-6 mt-6 '>
                    { designProjects.map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
                  </div>
                </div>
                <input type="radio" name="my_tabs_1" className="tab is-tab-checked" aria-label="Development" />
                <div className="tab-content bg-transparent border-none p-4 shadow-none">
                  <div className='grid grid-cols-2 gap-6 mt-6 '>
                    { devProjects.map((project) => (
                      <ProjectCard key={project.id} {...project} />
                    ))}
                  </div>
                </div>
            </div>  
        </div>
    </section>
  )
}

export default ProjectData
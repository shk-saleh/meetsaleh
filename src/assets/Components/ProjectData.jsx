import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { designProjects, devProjects } from '../utils/data'

const ProjectData = () => {

  const [activeTab, setActiveTab] = useState('development')

  // Container variant for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  // Card variant for individual project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="max-w-6xl px-6 mx-0 md:mx-auto text-gray-200 py-12 md:py-18">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" fill="#ffffff" filter="url(#noise)" />
      </svg>
      <div>
        <motion.h2
          className="text-3xl md:text-5xl font-medium mb-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

        >
          My
          <span
            className='text-grad-orange'
            whileHover={{ scale: 1.1, display: "inline-block" }}
            style={{ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "500" }}
          >
            &nbsp;Projects!
          </span>
        </motion.h2>

        <div className="tabs tabs-box px-0 justify-end bg-transparent mt-6 shadow-none">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab is-tab-checked text-xs md:text-sm"
            aria-label="Development"
            defaultChecked
            onChange={() => setActiveTab('development')}
          />
          <div className="tab-content bg-transparent border-none p-0 md:p-4 shadow-none">
            <AnimatePresence mode="wait">
              <motion.div
                key="development"
                className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {devProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            className="tab is-tab-checked text-xs md:text-sm"
            aria-label="Designing"
            onChange={() => setActiveTab('designing')}
          />
          <div className="tab-content bg-transparent border-none p-0 md:p-4 shadow-none">
            <AnimatePresence mode="wait">
              <motion.div
                key="designing"
                className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {designProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectData

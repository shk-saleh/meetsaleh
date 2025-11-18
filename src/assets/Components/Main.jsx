import React from 'react'
import { motion } from 'framer-motion'
import headshot from '../Images/personal-img.png'
import { Hand, UsersRound, Facebook, Instagram, Linkedin, Github, SplinePointer, MousePointer2 } from "lucide-react";
import {Link} from 'react-router-dom';

const Main = () => {
  
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Fade up animation for text elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Image animation with 3D effect
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 5,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  

  return (
    <div className='relative flex flex-col-reverse md:flex-row justify-center gap-10 items-center z-50 min-h-[75vh] md:px-28 px-6 pt-18 pb-0 md:pt-10'>
        {/* Image with 3D hover effect */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ 
            scale: 1.05, 
            rotate: 0,
            transition: { duration: 0.3 }
          }}
        >
            <motion.img 
              src={headshot} 
              className='border border-gray-500 bg-white/5 backdrop-blur-sm rounded-[10%] rotate-5 transition-all ease-linear hover:border-white hover:rotate-0 cursor-pointer my-10' 
              alt="personal-img" 
              width="285px"
              whileHover={{ 
                boxShadow: "-12px 12px 0px rgba(255, 123, 0, 0.2)"
              }}
            />
        </motion.div>

        {/* Text content with staggered animations */}
        <motion.div 
          className='relative'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badges with pulse animation */}
          <motion.div 
            className='flex gap-2 pb-4'
            variants={fadeUpVariants}
          >
              <motion.button 
                className='flex items-center gap-2 bg-white/8 border border-gray-700 rounded-2xl md:text-sm text-xs text-[var(--primary-color)] px-3 py-1'
                whileHover={{ scale: 1.05, borderColor: "#f97316" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex size-2 md:size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 md:size-3 rounded-full bg-zinc-500"></span>
                </span>
                MERN Stack
              </motion.button>
              <motion.button 
                className='flex items-center gap-2 bg-white/8 border border-gray-700 rounded-2xl md:text-sm text-xs text-[var(--primary-color)] px-3 py-1'
                whileHover={{ scale: 1.05, borderColor: "#eab308" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex size-2 md:size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 md:size-3 rounded-full bg-orange-500"></span>
                </span>
                UI/UX Designer
              </motion.button>
          </motion.div>

          {/* Main heading with character animation */}
          <motion.h1 
            className='text-[45px] md:text-[70px] z-[-1] text-[var(--primary-color)] leading-none font-normal pb-2'
            variants={fadeUpVariants}
          >
            Hi! I'm Muhammad Saleh <br className='hidden md:block'/> 
            Creative <span 
              className='text-grad-orange'
              whileHover={{ scale: 1.1, display: "inline-block" }}
            >
              Designer
            </span> or <br className='hidden md:block'/> 
            <span 
              className='text-grad-gray'
            >
              Developer
            </span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.span 
            className='text-md md:text-lg text-(--subtext-color) font-light'
            variants={fadeUpVariants}
          >
            Building aesthetic and performance-driven SaaS interfaces that users love.
          </motion.span>

          {/* CTA and social links */}
          <motion.div 
            className='flex gap-5 items-center h-10 pt-8'
            variants={fadeUpVariants}
          >
            <button className="main-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Let's Collaborate</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>

            {/* Social icons with staggered hover */}
            <div className='flex items-start gap-4'>
                  <Link to='https://www.instagram.com/shk-saleh'>
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        color: "#e4405f"
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Instagram className='transition ease-linear cursor-pointer duration-300'/>
                    </motion.div>
                  </Link>
                  <Link to='https://www.linkedin.com/in/mohdsaleh18/'>
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        color: "#0077b5"
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Linkedin className='transition ease-linear cursor-pointer duration-300' />
                    </motion.div>
                  </Link>
                  <Link to='https://github.com/shk-saleh'>
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        color: "#6e5494"
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Github className='transition ease-linear cursor-pointer duration-300'/>
                    </motion.div>
                  </Link>
            </div>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Main

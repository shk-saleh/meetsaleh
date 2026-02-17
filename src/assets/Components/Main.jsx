import React from 'react'
import { motion } from 'framer-motion'
import headshot from '../Images/personal-img.png'
import { Hand, UsersRound, Facebook, Instagram, Linkedin, Github, SplinePointer, MousePointer2 } from "lucide-react";
import { Link } from 'react-router-dom';

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
    <div className='flex flex-col-reverse md:flex-row justify-center gap-10 items-center z-50 md:px-28 px-6 pt-6'>

      {/* Text content with staggered animations */}
      <motion.div
        className='relative flex flex-col items-center justify-center'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading with character animation */}
        <div className='flex gap-3 items-center justify-center mb-4'>
          <motion.h3
            className='relative flex items-end justify-center text-2xl md:text-6xl text-grad-gray leading-none font-medium'
            variants={fadeUpVariants}
          >
            <span> Hi! I'm</span>

            <div className='group relative'>
              <img
                src={headshot}
                className='w-16 h-16 md:w-22 md:h-22 mx-4 object-cover border border-zinc-800 bg-(--fade-color) backdrop-blur-sm rounded-lg md:rounded-2xl cursor-pointer transition-all'
                style={{ boxShadow: "0px 0px 14px 2px rgb(40, 40, 40)" }}
              />

              {/* Pulse Animation on Hover */}
              <span className="group-hover:flex hidden absolute top-0 right-4 size-3 transition-all duration-200">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
            </div>
            Saleh,
          </motion.h3>
        </div>
        <motion.h1
          className='max-w-5xl text-4xl md:text-7xl text-center text-(--primary-color) leading-none font-medium pb-2'
          variants={fadeUpVariants}
        >
          Engineered SaaS products that turn Users into <span
            className='text-grad-orange'
            whileHover={{ scale: 1.1, display: "inline-block" }}
            style={{ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "500" }}
          >
            Customers!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.span
          className='max-w-3xl text-center md:py-0 py-4 text-sm md:text-md text-(--subtext-color) font-light'
          variants={fadeUpVariants}
        >
          From Figma and UX strategy to full-stack development and deployment. I handle everything so founders can launch faster without hiring multiple teams.
        </motion.span>

        {/* CTA and social links */}
        <motion.div
          className='flex gap-3 items-center h-auto md:pt-10 pt-4'
          variants={fadeUpVariants}
        >
          <button className="main-button text-xs md:text-sm">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Let’s build your product</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>

          {/* Social icons with staggered hover */}
          <div className='flex gap-3'>
            <Link to='https://www.instagram.com/shk-saleh' target='blank' className='bg-(--fade-color) rounded-full p-2 shadow-sm shadow-zinc-500'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className='md:w-6 md:h-6 h-4 w-4 text-(--primary-color)/70 transition ease-linear cursor-pointer duration-300' />
              </motion.div>
            </Link>
            <Link to='https://www.linkedin.com/in/mohdsaleh18/' target='blank' className='bg-(--fade-color) rounded-full p-2 -ms-5 shadow-sm shadow-zinc-500'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Linkedin className='md:w-6 md:h-6 h-4 w-4 text-(--primary-color)/70 transition ease-linear cursor-pointer duration-300' />
              </motion.div>
            </Link>
            <Link to='https://github.com/shk-saleh' target='blank' className='bg-(--fade-color) rounded-full p-2 -ms-5 shadow-sm shadow-zinc-500'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github className='md:w-6 md:h-6 h-4 w-4 text-(--primary-color)/70 transition ease-linear cursor-pointer duration-300' />
              </motion.div>
            </Link>
          </div>

        </motion.div>
      </motion.div>
    </div>
  )
}

export default Main

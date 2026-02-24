import React from 'react'
import { motion } from 'framer-motion'
import Aurora from './ReactBits/Aurora'

const CTA = () => {
  return (
    <div className='relative z-50 flex items-center w-full justify-center md:pt-30 pt-20'>
      <motion.div 
        className="flex flex-col gap-5 items-center justify-center h-100 mx-4 md:mx-0 w-full md:w-3/4 mt-10 px-6 md:px-30 relative bg-black border border-zinc-900 rounded-2xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ boxShadow: "0px 0px 20px 10px rgb(40, 40, 40, 0.1)" }}
      >
          {/* Heading */}
          <motion.h1 
            className='text-5xl md:text-6xl text-white text-center relative z-10'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's <span
              className='text-grad-orange'
              whileHover={{ scale: 1.1, display: "inline-block" }}
              style={{ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "500" }}
            >
              Build a Project!
            </span> 
          </motion.h1>
          <motion.span
            className='w-full text-center text-xs md:text-md text-(--subtext-color) font-light'
          >
            Merging desing thinking with human insights to create digital expriences that don't trust look great!
          </motion.span>

          {/* CTA Button */}
          <motion.button 
            className="main-button text-sm md:text-lg relative z-10 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://cal.com/mohdsaleh18")}
          >
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Book a 1:1 dicovery Call</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </motion.button>
       </motion.div>
    </div>
  )
} 

export default CTA

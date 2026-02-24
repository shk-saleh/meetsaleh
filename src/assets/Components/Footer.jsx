import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div 
      className="relative flex flex-col gap-5 items-center justify-center w-full pt-10 pb-50 md:pb-70 z-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
        <motion.h2 
          className='text-4xl mb-4 md:text-9xl absolute bottom-30 text-transparent bg-clip-text bg-gradient-to-b from-25% from-[var(--fade-color)] to-[var(--primary-color)] to-90% opacity-15'
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 0.15, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Muhammad Saleh
        </motion.h2>

        <motion.span 
          className='text-(--primary-color) text-xs md:text-lg absolute bottom-25 opacity-15'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.15, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          &copy; copyright reversed 2026 | Made with ❤️
        </motion.span>
    </motion.div>
  )
}

export default Footer

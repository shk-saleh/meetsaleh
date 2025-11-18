import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Github, SendHorizontal, Copy } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto text-gray-200 py-0 md:py-18">
      <motion.div 
        className='flex items-start flex-col md:flex-row justify-between gap-10 md:gap-20 mx-6 md:mx-10 py-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Info */}
        <motion.div 
          className='w-full md:w-2/2'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className='text-3xl md:text-5xl text-gray-400 mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className='text-(--primary-color)'> Let's create </span> something <br/> remarkable together!
          </motion.h2>

          <motion.p 
            className="text-gray-400 mb-2 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm available for freelance work and collaborations — feel free to reach out.
          </motion.p>

          <motion.p 
            className="text-gray-400 max-w-2xl py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Prefer email? Use the form or message me directly at <br/> 
            <span className='flex items-center py-2 gap-2 text-(--primary-color)'>
              salehshazli786@gmail.com 
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Copy className='w-4 h-4 cursor-pointer' />
              </motion.div>
            </span>
          </motion.p>

          <motion.span 
            className="text-gray-400 max-w-2xl py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Local Time <br/> UTC + 5 Islamabad, Pakistan.
          </motion.span>

          <motion.div 
            className='flex gap-4 my-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          className='w-full'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="flex flex-col gap-6">
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 bg-[var(--input-bg)] border border-zinc-800 rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-4 bg-[var(--input-bg)] border border-zinc-800 rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"
              />
            </motion.div>

            <motion.input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-4 bg-[var(--input-bg)] border border-zinc-800 rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />

            <motion.textarea 
              rows="6" 
              placeholder="Your Message" 
              className="w-full p-4 bg-[var(--input-bg)] border border-zinc-800 rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            <motion.button 
              type="submit" 
              className="group flex w-70 justify-center items-center gap-6 px-6 py-3 bg-white border border-zinc-800 cursor-pointer text-(--body-color) font-medium rounded-md hover transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message 
              <SendHorizontal className='group-hover:translate-x-2 transition-all duration-200' />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactForm

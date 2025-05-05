import React from 'react'
import { motion } from "framer-motion";
import './Loading.css'


const Loading = () => {
  return (
    <div className='w-[100%] h-[100vh] relative flex gap-4 items-center justify-center'>
        <motion.svg initial={{ x: 0}} animate={{ x: -40}} transition={{duration: 0.5, delay: 3}} id='wheel' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship-wheel-icon lucide-ship-wheel"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5"/><path d="m19 5-5.23 5.23"/><path d="M22 12h-7.5"/><path d="m19 19-5.23-5.23"/><path d="M12 14.5V22"/><path d="M10.23 13.77 5 19"/><path d="M9.5 12H2"/><path d="M10.23 10.23 5 5"/><circle cx="12" cy="12" r="2.5"/></motion.svg>
        <motion.h2 initial={{ x: 30, opacity: 0}} animate={{ x: 55, opacity: 1}} transition={{duration: 0.5, delay: 3.5}} className='text-gray-200 absolute text-3xl' id='loader-text'>Hi there!</motion.h2>
    </div>
  )
}

export default Loading
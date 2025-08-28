import React from 'react'
import headshot from '../Images/personal-img.png'
import { Hand, UsersRound } from "lucide-react";


const Main = () => {
  
  return (
    <div className='relative flex justify-center gap-10 items-center z-1 min-h-[75vh] px-28'>
        <div>
            <img src={headshot} className='border border-gray-500 bg-white/5 backdrop-blur-sm rounded-[10%] rotate-5 transition-all ease-linear hover:border-orange-500 hover:rotate-0' alt="personal-img" width="250px"/>
        </div>
        <div>
          <div className='flex gap-2 pb-2'>
              <button className='bg-white/8 border border-gray-700 rounded-2xl text-sm text-[var(--primary-color)] px-3 py-1'>Full Stack Engineer</button>
              <button className='bg-white/8 border border-gray-700 rounded-2xl text-sm text-[var(--primary-color)] px-3 py-1'>UI Designer</button>
          </div>
          <span className='flex items-center gap-2 text-3xl text-[var(--primary-color)] pb-2'><Hand className='text-[var(--secondary-color)] animate-wave'/> I'm Muhammad Saleh.</span>
          <h1 className='text-[60px] z-[-1] text-[var(--primary-color)] leading-none font-normal pb-2'>Build <span className='text-[var(--secondary-color)]'>Business Solutions </span><br /> that stand out!</h1>
          <div className='flex gap-5 items-center h-10 pt-10'>
            <button class="main-button">
              <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Let's Collaborate</span>
              <span class="circle"></span>
              <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
            <p className='flex gap-2 text-[var(--primary-color)] text-md font-light py-4'><UsersRound className='text-[var(--secondary-color)] w-6 h-6'/> 10+ Trusted clients!</p>
          </div>
        </div>
    </div>
  )
}

export default Main
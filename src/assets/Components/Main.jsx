import React from 'react'
import headshot from '../Images/personal-img.png'
import { Hand, UsersRound, Facebook, Instagram, Linkedin, Github, SplinePointer, MousePointer2 } from "lucide-react";
import {Link} from 'react-router-dom';

const Main = () => {
  
  return (
    <div className='relative flex flex-col-reverse md:flex-row  justify-center gap-10 items-center z-1 min-h-[75vh] md:px-28 px-8 pt-20 pb-0 md:py-0'>
        <div>
            <img src={headshot} className='border border-gray-500 bg-white/5 backdrop-blur-sm rounded-[10%] rotate-5 transition-all ease-linear hover:border-white hover:rotate-0 cursor-pointer my-10' alt="personal-img" width="300px"/>
        </div>
        <div className='relative'>
          <div className='flex gap-2 pb-4'>
              <button className='flex items-center gap-2 bg-white/8 border border-gray-700 rounded-2xl text-sm text-[var(--primary-color)] px-3 py-1'>
                <span class="relative flex size-3">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                </span>
                MERN Stack
              </button>
              <button className='flex items-center gap-2 bg-white/8 border border-gray-700 rounded-2xl text-sm text-[var(--primary-color)] px-3 py-1'>
                <span class="relative flex size-3">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                  <span class="relative inline-flex size-3 rounded-full bg-yellow-500"></span>
                </span>
                UI/UX Designer
              </button>
          </div>
          <h1 className='text-[45px] md:text-[70px] z-[-1] text-[var(--primary-color)] leading-none font-normal pb-2'>Hi! I'm Muhammad Saleh <br className='hidden md:block'/> Creative <span className='text-grad-orange'>Designer</span> or  <br className='hidden md:block'/> <span className='text-grad-gray'>Developer</span>.</h1>
          {/* <MousePointer2 className='absolute top-43 right-50 w-8 h-8 text-orange-400' /> */}
          <span className='text-md md:text-lg text-(--subtext-color) font-light'>Building aesthetic and performance-driven SaaS interfaces that users love.</span>
          <div className='flex gap-5 items-center h-10 pt-8'>
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
            <div className='flex items-start gap-4'>
                  <Link to='https://www.instagram.com/shk-saleh'>
                    <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer duration-300 hover:rotate-y-180'/>
                  </Link>
                  <Link to='https://www.linkedin.com/in/mohdsaleh18/'>
                    <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer duration-300 hover:rotate-y-180' />
                  </Link>
                  <Link to='https://github.com/shk-saleh'>
                    <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer duration-300 hover:rotate-y-180'/>     
                  </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
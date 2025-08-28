import React ,{ useState, useEffect } from 'react'
import logo from '../Images/logo.svg'
import { Facebook,Instagram,Linkedin,Github  } from "lucide-react";
import { Grip, X } from 'lucide-react';
import TextTransition, { presets } from 'react-text-transition';


const Header = () => {

  const[showNav,setShowNav] = useState(false);
  const TEXTS = ['Hello!', 'السلام علیکم', 'مرحبا', 'Bonjour!', 'Hola!'];
  const [index, setIndex] = React.useState(0);


  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showNav]);


  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <header className='w-full flex justify-between px-28'>
        <div>
            <img src={logo} alt="" width="50px" />
        </div>
        <div className='text-gray-300 flex gap-4 z-10'>
          <Grip  className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer w-8 h-8' onClick={() => setShowNav(true)} />
        </div>
        <div
          className={`absolute top-0 ${showNav ? 'right-0' : '-right-100'} transition-all duration-500 w-100 text-gray-200 bg-white/5 backdrop-blur-sm h-screen z-10 px-10 py-14`}
          style={{transitionProperty: 'right'}}
        >
            <TextTransition className='inline-block mb-3' style={{fontSize:"34px"}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            <h2 className='text-3xl pt-12 pb-6 font-normal text-gray-300'>Need a custom Quote? Let's Talk!</h2>
            <button class="main-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Discuss Project</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            </button>
            <p className='text-gray-300 text-lg mt-40 mb-4'>Follow me at: </p>
            <div className='flex gap-6'>
                <Facebook className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
                <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>     
            </div>
            <div className='flex flex-row gap-2 mt-10'>
              <span>For any Query:</span>
              <a href='/' className='border-b-1 text-[var(--secondary-color)]'>+92 310 0861330</a>
            </div>
            <X  className= 'absolute top-2 right-2 hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer w-8 h-8' onClick={() => setShowNav(false)} />
        </div>
    </header>
  )
}

export default Header
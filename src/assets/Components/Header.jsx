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

  
  
    const [currentTime, setCurrentTime] = useState(new Date());
    const [lastLocation, setLastLocation] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
  
    const formattedDate = currentTime.toLocaleDateString();
    const formattedTime = currentTime.toLocaleTimeString();
  
    const playClickSound = () => {
      const clickSound = new Audio("/sounds/mouse-click.mp3");
      clickSound.volume = 0.2;
      clickSound.play();
    };
  
  
    useEffect(() => {
  
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      const fetchLocation = async () => {
  
        try {
          
          const response = await fetch('https://ipwho.is/');
          const data = await response.json();
          const location = `${data.city}, ${data.country}`;
  
          console.log(location);
  
          // Get last stored location
          const previousLocation = localStorage.getItem('lastLocation');
          
          if (previousLocation) {
            setLastLocation(previousLocation);
          }
  
          // Set new location to localStorage and state
          localStorage.setItem('lastLocation', location);
          setCurrentLocation(location);
          
        } catch (error) {
          console.error('Failed to fetch location:', error);
        }
  
      }
        fetchLocation();
  
        return () => clearInterval(timer);
  
    }, []);
  
  


  return (
    <header className='w-full flex items-center justify-between px-18 py-6'>
        <div>
            <img src={logo} alt="" width="50px" />
        </div>
        <div className='text-gray-300 flex items-center gap-4 z-10'>    
          <div className="w-full text-gray-400 flex flex-col items-end justify-start">
            <span className="font-light text-sm">{formattedTime}</span>
            <p className='font-light text-sm'><span className='text-(--primary-color)'>Last Visited:  </span>{lastLocation}</p>
          </div>
          {/* <Grip  className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer w-10 h-10' onClick={() => setShowNav(true)} /> */}
        </div>
        {/* <div
          className={`absolute top-0 ${showNav ? 'right-0' : '-right-100'} flex justify-between flex-col transition-all duration-500 w-90 text-gray-200 bg-white/5 backdrop-blur-sm h-screen z-10 px-6 py-14`}
          style={{transitionProperty: 'right'}}
        >
            <TextTransition className='inline-block text-(--secondary-color)' style={{fontSize:"34px"}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            <div>
              <h2 className='text-3xl font-normal mb-4 text-gray-300'>Need a custom Quote? Let's Talk!</h2>
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
            </div>
            <div>
              <p className='text-gray-300 text-lg mt-40 mb-4'>Follow me at: </p>
              <div className='flex gap-6'>
                  <Facebook className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                  <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
                  <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                  <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>     
              </div>
            </div>
            <X  className= 'absolute top-2 right-2 hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer w-8 h-8' onClick={() => setShowNav(false)} />
        </div> */}
    </header>
  )
}

export default Header
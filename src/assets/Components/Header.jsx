import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../Images/logo.svg'
import { Facebook, Instagram, Linkedin, Github, Pin } from "lucide-react";
import { Grip, X } from 'lucide-react';
import TextTransition, { presets } from 'react-text-transition';

const Header = () => {

  const [showNav, setShowNav] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = useState(false);

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
  const [showLocation, setShowLocation] = useState(false);
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

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const timeVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const digitVariants = {
    initial: { rotateX: 0 },
    animate: { 
      rotateX: 360,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header 
      className='absolute top-4 z-50 w-full flex items-center justify-between px-6 md:px-14 py-6'
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
        {/* Animated Logo */}
        <motion.div
          variants={logoVariants}
          whileHover={{ 
            scale: 1.1, 
            rotate: 360,
            transition: { duration: 0.6 }
          }}
          whileTap={{ scale: 0.9 }}
        >
            <img src={logo} alt="" width="50px" />
        </motion.div>

        {/* Time and Location Section */}
        <motion.div 
          className='text-gray-300 flex items-center gap-4 z-10'
          variants={timeVariants}
        >    
          <div className="w-full text-gray-400 flex flex-col items-end justify-start">
            
            {/* Animated Time Display */}
            <span 
              className="font-light text-lg" 
              style={{ fontFamily: "var(--font-time)" }}
              key={formattedTime}>
              {formattedTime}
            </span>
    
            {/* Location Toggle Button with Flip Animation */}
            <motion.button 
              className="min-w-28 text-md relative overflow-hidden cursor-pointer text-gray-800 bg-gray-200 rounded-sm border-none px-2 h-6" 
              onClick={() => setShowLocation(prev => !prev)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {!showLocation ? (
                  <motion.span
                    key="last-visited"
                    className="flex items-center text-sm gap-1 px-1.5 absolute left-0 top-0.5 whitespace-nowrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ 
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      <Pin className='w-3.5 h-3.5'/>
                    </motion.div>
                    Last Visited
                  </motion.span>
                ) : (
                  <motion.span
                    key="location"
                    className="absolute w-30 overflow-x-scroll flex left-0 text-sm top-0.5 px-1.5 whitespace-nowrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {lastLocation}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

          </div>
        </motion.div>
    </motion.header>
  )
}

export default Header

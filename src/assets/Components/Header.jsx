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
            <span className="font-light text-lg" style={{fontFamily: "var(--font-time)"}}>{formattedTime}</span>
            <p className='font-light text-sm'><span className='text-(--primary-color)'>Last Visited:  </span>{lastLocation}</p>
          </div>
        </div>
    </header>
  )
}

export default Header
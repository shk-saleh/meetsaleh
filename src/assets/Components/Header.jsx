import React ,{ useState, useEffect } from 'react'
import logo from '../Images/logo.svg'
import { Facebook,Instagram,Linkedin,Github, Pin  } from "lucide-react";
import { Grip, X } from 'lucide-react';
import TextTransition, { presets } from 'react-text-transition';


const Header = () => {

  const[showNav,setShowNav] = useState(false);
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
    <header className='w-full flex items-center justify-between px-6 md:px-14 py-6'>
        <div>
            <img src={logo} alt="" width="50px" />
        </div>
        <div className='text-gray-300 flex items-center gap-4 z-10'>    
          <div className="w-full text-gray-400 flex flex-col items-end justify-start">
            <span className="font-light text-lg" style={{fontFamily: "var(--font-time)"}}>{formattedTime}</span>
    
            <button className="min-w-30 relative overflow-hidden cursor-pointer text-gray-800 bg-gray-200 rounded-sm border-none px-2 h-6" onClick={() => setShowLocation(prev => !prev)}>
              <span
                className={
                  "flex items-center gap-1 px-1.5 absolute left-0 top-0 whitespace-nowrap transition-all duration-300 " +
                  (showLocation
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100")
                }>
                <Pin className='w-4 h-4'/> Last Visited
              </span>

              <span
                className={
                  "absolute w-30 overflow-x-scroll flex left-0 top-0 px-1.5 whitespace-nowrap transition-all duration-300 " +
                  (showLocation
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0")
                }
              >
                {lastLocation}
              </span>
            </button>

          </div>
        </div>
    </header>
  )
}

export default Header
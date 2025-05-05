import {useState,useEffect, React} from "react";
import { House, UserRound, PaintRoller, Headset, Gamepad2, Sun } from "lucide-react";
import { NavLink } from "react-router-dom"; 


const Navbar = () => {


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
      <nav className="w-full fixed bottom-4 left-0 px-28 flex flex-row justify-center items-center z-2">
        <div className="w-full text-gray-400 flex">
          <span className="font-time text-lg">{formattedTime}</span>
        </div>
        <div className="flex justify-center items-center py-3 px-5 rounded-[50px] gap-8 border text-gray-700 bg-white/5 backdrop-blur-sm">
          {[
            { icon: House, label: "Home", path: "/" },
            { icon: UserRound, label: "About", path: "/about" },
            { icon: PaintRoller, label: "Project", path: "/projects" },
            { icon: Headset, label: "Contact", path: "/contact" },
            { icon: Gamepad2, label: "Fun", path: "/fun" },
          ].map((item, index) => (
            <NavLink key={index} className={({isActive}) => isActive? "bg-orange-500 p-2 rounded-4xl transition-all text-gray-50" : "relative flex flex-col items-center gap-1 text-gray-400 transition-all hover:scale-120" } to={item.path} onClick={playClickSound}>
              <item.icon className="w-6 h-6" />
              {/* <span>{item.label}</span> */}
            </NavLink>
          ))}
          <span className="h-10 border border-gray-700 rounded-4xl"></span>
          <NavLink className="flex flex-col items-center gap-1 text-gray-400" to="/" onClick={playClickSound}>
            <Sun />
          </NavLink>
        </div>
        <div className="w-full text-gray-400 flex gap-2 justify-end">
          <span className="font-time text-lg">Last visited:  {lastLocation}</span> 
        </div>
      </nav>
  )

};

export default Navbar;

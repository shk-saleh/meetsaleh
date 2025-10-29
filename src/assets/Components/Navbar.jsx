import {useState,useEffect, React} from "react";
import { House, UserRound, Hammer , Headset, Gamepad2, Sun, Send  } from "lucide-react";
import { NavLink } from "react-router-dom"; 


const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const playClickSound = () => {
    const clickSound = new Audio("/sounds/mouse-click.mp3");
    clickSound.volume = 0.2;
    clickSound.play();
  };


  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  

  

  return (
        <div className={`fixed top-80 -right-30 p-1 rotate-90 z-4 backdrop-blur-3xl flex justify-center items-center rounded-[50px] gap-8 border text-gray-700 bg-black transition-all duration-500 ${show? '-right-30' : '-right-70' } `}>
          {[
            { icon: House, label: "Home", path: "/" },
            { icon: UserRound, label: "About", path: "/about" },
            { icon: Hammer , label: "Projects", path: "/projects" },
            { icon: Send, label: "Contact", path: "/contact" },
            { icon: Gamepad2, label: "Game", path: "/fun" },
          ].map((item, index) => (
            <NavLink key={index} className={({isActive}) => isActive? "bg-(--fade-color)/50 border border-gray-700 tooltip tooltip-left p-2.5 rounded-4xl text-gray-50 -rotate-90" : "relative tooltip tooltip-left -rotate-90 flex flex-col p-2.5 items-center gap-1 text-gray-400" } to={item.path} data-tip={item.label} onClick={playClickSound}>
              <item.icon className="w-6 h-6" />
            </NavLink>
          ))}
          <NavLink className="pr-2 text-gray-400" to="/" onClick={playClickSound}>
            <Sun />
          </NavLink>
        </div>
  )

};

export default Navbar;

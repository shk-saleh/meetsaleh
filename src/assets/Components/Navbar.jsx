import {useState,useEffect, React} from "react";
import { House, UserRound, Hammer , Unplug, Sun, Send  } from "lucide-react";
import { NavLink } from "react-router-dom"; 


const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const playClickSound = () => {
    const clickSound = new Audio("/sounds/mouse-click.mp3");
    clickSound.volume = 0.2;
    clickSound.play();
    window.scrollTo(0, 0);
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
        <div className={`fixed z-80 h-16 right-2 md:top-80 md:-right-30 p-2 rotate-0 md:rotate-90 backdrop-blur-xl flex justify-center items-center rounded-[50px] gap-3 md:gap-6 border border-zinc-800 text-gray-700 bg-black/60 transition-all duration-500 ${show? 'bottom-5 md:-right-30' : '-bottom-20 md:-right-70' } `}>
          {[
            { icon: House, label: "Home", path: "/" },
            { icon: UserRound, label: "About", path: "/about" },
            { icon: Hammer , label: "Projects", path: "/projects" },
            { icon: Send, label: "Contact", path: "/contact" },
            { icon: Unplug , label: "", path: "/network-error" },
          ].map((item, index) => (
            <NavLink key={index} className={({isActive}) => isActive? "bg-(--fade-color)/50 border border-zinc-700 tooltip tooltip-left p-3 md:p-2.5 rounded-4xl text-gray-50 rotate-0 md:-rotate-90" : "relative tooltip tooltip-left rotate-0 md:-rotate-90 flex flex-col p-2.5 items-center gap-1 text-gray-400" } to={item.path} data-tip={item.label} onClick={playClickSound}>
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
